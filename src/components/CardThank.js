import React from "react";
import img from ".././images/illustration-thank-you.svg";
import ".././styles/card-thank.css";

export default function CardThank({ rateChosed, totalBtns = 5 }) {
  const msgDisplayed = `You selected ${rateChosed} of ${totalBtns}`;
  return (
    <div className="thank-body">
      <img src={img} alt="" className="thank" />
      <p className="msg">{msgDisplayed}</p>
      <h1 className="thank-title">Thank you!</h1>
      <p className="thank-info">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
