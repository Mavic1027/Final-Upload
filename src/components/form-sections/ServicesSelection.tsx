import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";

const services = [
  { id: "main-image", label: "Main Image Optimization" },
  { id: "brand-story", label: "Brand Story" },
  { id: "a-plus", label: "A+ Content" },
  { id: "lifestyle", label: "Lifestyle Images" },
];

const plans = [
  { value: "essential", label: "Essential" },
  { value: "professional", label: "Professional" },
  { value: "enterprise", label: "Enterprise" },
  { value: "enterprise-plus", label: "Enterprise Plus" },
];

export const ServicesSelection = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="selected_plan"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selected Plan</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your plan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="services"
        render={() => (
          <FormItem>
            <FormLabel>Select the Creative Services you're interested in:</FormLabel>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              {services.map((service) => (
                <FormField
                  key={service.id}
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem
                      key={service.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(service.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, service.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: string) => value !== service.id
                                  )
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {service.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};