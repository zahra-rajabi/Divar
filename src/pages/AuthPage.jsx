import { useState } from "react";
import SendOTP from "src/components/templates/SendOTP";
import CheckOTP from "components/templates/CheckOTP";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [code, setCode] = useState("");

  return (
    <>
      {step === 1 && (
        <SendOTP
          setStep={setStep}
          setMobileNumber={setMobileNumber}
          mobileNumber={mobileNumber}
        />
      )}
      {step === 2 && (
        <CheckOTP
          code={code}
          setCode={setCode}
          mobileNumber={mobileNumber}
          setStep={setStep}
        />
      )}
    </>
  );
}

export default AuthPage;
