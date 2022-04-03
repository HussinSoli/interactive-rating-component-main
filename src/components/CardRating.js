import React from "react";
const createArray = (length) => [...Array(length)];
const Btns = ({ value, onClick = (f) => f }) => (
  //   <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  <input type="button" value={value} onClick={onClick} />
);

export default function BtnRating({ totalBtns = 5, onRateBtn = (f) => f }) {
  return (
    <>
      {createArray(totalBtns).map((n, i) => (
        <Btns
          key={i}
          value={i + 1}
          onClick={(e) => onRateBtn(e.target.value)}
        />
      ))}
    </>
  );
}
