import { supabase } from "@/integrations/supabase/client";

export type FormSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  storeName: string;
  parentAsins: string;
  productLink: string;
  selectedPlan: string;
  services: string[];
  challenge: string;
};

export const submitContactForm = async (data: FormSubmission) => {
  const { error } = await supabase
    .from('contact_form_submissions')
    .insert([data]);

  if (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};