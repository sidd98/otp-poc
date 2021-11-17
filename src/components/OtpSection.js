import React, { useState, useEffect } from "react";

function OtpSection() {
  const [oneTimePassword, setOneTimePassword] = useState("");

  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
    
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal
        })
        .then((otp) => {
          setOneTimePassword(otp);
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.log(err);
        });
    }
  },[])

  return (
    <div className="otp-section">
      <h4>Enter Your OTP here</h4>
      <span>
      <input
          type="text"
          id="otp"
          autocomplete="one-time-code"
          value={oneTimePassword}
          onChange={(event) => setOneTimePassword(event.target.value)}
        ></input>
        <button>Send OTP</button>
      </span>
    </div>
  );
}

export default OtpSection;
