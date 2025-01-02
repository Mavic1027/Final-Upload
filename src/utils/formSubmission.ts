import { supabase } from "@/integrations/supabase/client";

export type FormSubmission = {
  first_name: string;
  last_name: string;
  email: string;
  store_name: string;
  parent_asins?: string;
  product_link?: string;
  selected_plan: string;
  services: string[];
  challenge: string;
};

export const submitContactForm = async (data: FormSubmission) => {
  const { error } = await supabase
    .from('contact_form_submissions')
    .insert(data);

  if (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};