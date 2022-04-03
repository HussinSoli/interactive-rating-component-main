import React from "react";
import ".././styles/card-contnet.css";
export default function CardContnent({ title, img, info, name }) {
  return (
    <div className="card-body">
      <img src={img} alt="" className={name} />
      <h1 className="card-title">{title}</h1>
      <p className="card-info"> {info}</p>
    </div>
  );
}
