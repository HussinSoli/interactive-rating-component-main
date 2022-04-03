import React, { useState } from "react";
import CardRating from "./CardRating";
import ".././styles/card-form.css";

export default function CardSubmit({ onDiplayRate = (f) => f }) {
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    onDiplayRate(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputs-area">
          <CardRating onRateBtn={(value) => setValue(value)} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
