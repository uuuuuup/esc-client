import { useState } from "react";
import { PrivatePolicy } from "./PrivacyPolicy";
import { TermsOfUse } from "./TermsOfUse";

export const Footer = () => {
  const [showPrivatePolicyPopup, setShowPrivatePolicyPopup] = useState(false);
  const [showTermsOfUsePopup, setTermsOfUsePopup] = useState(false);
  const mailAddr = "escmentoredu@gmail.com";
  return (
    <>
      <div
        className="w-full m-auto px-4 py-11 flex flex-col justify-center items-center"
        style={{ backgroundColor: "#353535" }}
      >
        <div className="text-white">Education Sharing Club</div>
        <div className="text-white mt-4">Contact</div>
        <a className="text-white" href={`mailto:${mailAddr}`}>
          {mailAddr}
        </a>
        <div className="mt-4">
          <button
            className="text-white"
            onClick={() => setShowPrivatePolicyPopup(true)}
          >
            이용약관
          </button>
          <button
            className="text-white ml-4"
            onClick={() => setTermsOfUsePopup(true)}
          >
            개인정보처리방침
          </button>
        </div>
      </div>
      {showPrivatePolicyPopup && (
        <PrivatePolicy onClose={() => setShowPrivatePolicyPopup(false)} />
      )}
      {showTermsOfUsePopup && (
        <TermsOfUse onClose={() => setTermsOfUsePopup(false)} />
      )}
    </>
  );
};
