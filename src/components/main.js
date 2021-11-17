import React, { useState } from "react";
import OtpSection from "./OtpSection";

import "./main.scss";

function Main() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSend, setIsOtpSend] = useState(false);

  const handleOtpGeneration = () => {
    setIsOtpSend(true);
  };

  return (
    <div className="form">
      {/* <h1>Enter Your Mobile Number</h1>
      <span className="mobile-field">
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
        ></input>
        <button onClick={handleOtpGeneration}>Send OTP</button>
      </span> */}

      {isSend && <OtpSection />}
    </div>
  );
}

export default Main;
