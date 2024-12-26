import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ContactFormFields } from "./ContactFormFields";

interface ContactFormOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormOverlay = ({ isOpen, onClose }: ContactFormOverlayProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <ContactFormFields onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};