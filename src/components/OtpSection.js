import React, { useState, useEffect } from "react";

import "./main.scss";

function OtpSection() {
  const [oneTimePassword, setOneTimePassword] = useState("");
  const [newError, setErr] = useState("");

  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          setOneTimePassword(otp.code);
        })
        .catch((err) => {
          setErr(err);
        });
    }
  }, []);

  return (
    <div className="otp-section">
      <h4>Enter Your OTP</h4>
      <span>
        <input
          type="text"
          id="otp"
          autoComplete="one-time-code"
          value={oneTimePassword}
          onChange={(event) => setOneTimePassword(event.target.value)}
        ></input>
        <button onClick={() => setOneTimePassword('')}>Send OTP</button>
      </span>
      {<p className="error">{newError}</p>}
    </div>
  );
}

export default OtpSection;
