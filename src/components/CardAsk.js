import React from "react";
import CardContnent from "./CardContnet";
import CardSubmit from "./CardSubmit";
import img from ".././images/icon-star.svg";
export default function CardAsk({ onDiplayRate = (f) => f }) {
  return (
    <>
      <CardContnent
        name="star"
        img={img}
        title="How did we do?"
        info="Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!"
      />
      <CardSubmit onDiplayRate={onDiplayRate} />
    </>
  );
}
