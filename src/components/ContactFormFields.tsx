import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { PersonalInfo } from "./form-sections/PersonalInfo";
import { BusinessInfo } from "./form-sections/BusinessInfo";
import { ServicesSelection } from "./form-sections/ServicesSelection";
import { submitContactForm, FormSubmission } from "@/utils/formSubmission";

const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  store_name: z.string().min(1, "Store name is required"),
  parent_asins: z.string().optional(),
  product_link: z.string().url("Invalid Amazon product link").optional(),
  selected_plan: z.string().min(1, "Please select a plan"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  challenge: z.string().min(10, "Please describe your challenge"),
});

interface ContactFormFieldsProps {
  onSuccess?: () => void;
}

export const ContactFormFields = ({ onSuccess }: ContactFormFieldsProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await submitContactForm(values as FormSubmission);
      toast({
        title: "Form submitted!",
        description: "We'll be in touch soon.",
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Let's Get Started</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PersonalInfo form={form} />
          <BusinessInfo form={form} />
          <ServicesSelection form={form} />
          
          <FormField
            control={form.control}
            name="challenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your biggest challenge right now?</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};