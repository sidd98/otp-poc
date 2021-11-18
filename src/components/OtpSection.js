import React, { useState, useEffect } from "react";

function OtpSection() {
  const [oneTimePassword, setOneTimePassword] = useState("");

  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
      navigator.credentials.get({
        otp: { transport:['sms'] },
        signal: ac.signal
      }).then(otp => {
        setOneTimePassword(otp.code);
      }).catch(err => {
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
          autoComplete="one-time-code"
          value={oneTimePassword}
          onChange={(event) => setOneTimePassword(event.target.value)}
        ></input>
        <button>Send OTP</button>
      </span>
    </div>
  );
}

export default OtpSection;
