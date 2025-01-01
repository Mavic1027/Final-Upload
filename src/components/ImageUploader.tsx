import { useState } from "react";
import EmailForm from "./background-remover/EmailForm";
import BackgroundRemoverTool from "./background-remover/BackgroundRemoverTool";

const MAX_USES = 3; // Maximum number of times a user can use the tool

const ImageUploader = () => {
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [remainingUses, setRemainingUses] = useState(MAX_USES);

  const handleEmailSubmit = (email: string, remainingUses: number) => {
    setEmail(email);
    setIsEmailSubmitted(true);
    setRemainingUses(remainingUses);
  };

  if (!isEmailSubmitted) {
    return <EmailForm onEmailSubmit={handleEmailSubmit} maxUses={MAX_USES} />;
  }

  return (
    <BackgroundRemoverTool
      email={email}
      remainingUses={remainingUses}
      onUsageUpdate={setRemainingUses}
    />
  );
};

export default ImageUploader;