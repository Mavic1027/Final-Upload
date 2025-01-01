import { Button } from "@/components/ui/button";

interface ProcessingButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
}

const ProcessingButton = ({ onClick, loading, disabled }: ProcessingButtonProps) => (
  <Button
    onClick={onClick}
    disabled={loading || disabled}
    className="w-full max-w-md"
  >
    {loading ? "Processing..." : "Remove Background"}
  </Button>
);

export default ProcessingButton;