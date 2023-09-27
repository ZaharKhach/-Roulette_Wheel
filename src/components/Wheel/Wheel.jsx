import { useEffect, useState } from "react";
import uuid from "react-uuid";

import { resultArray } from "../functions/numbers";
import { numbersArray } from "../functions/numbers";

import "./wheel.scss";

const Wheel = () => {
  const [items, setItems] = useState(resultArray);

  const dataFunc = (item) => {
    return numbersArray.includes(item) ? "correct" : "uncorrect";
  };

  const renderItems = (data) => {
    return (
      <ul className="circle">
        {data.map((item) => {
          const dataNumber = dataFunc(item);
          return (
            <li
              data-number={dataNumber}
              key={uuid()}
              className={`number ${dataNumber}`}
              value={item}
            >
              <label>
                <span className="pit">{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
    );
  };


  const elements = renderItems(items);


  return (
    <>
      <div className="main">
        <div className="plate" id="plate">
          <ul className="inner">{elements}</ul>
        </div>
      </div>
    </>
  );
};
export default Wheel;
