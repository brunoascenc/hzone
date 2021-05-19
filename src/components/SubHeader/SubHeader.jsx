import React from "react";
import { AiOutlineLock, AiOutlineCreditCard } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
// import '../../App.css'

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container">
        <ul>
          <li>
            <AiOutlineLock /> <p>Compra 100% segura</p>
          </li>
          <li>
            <AiOutlineCreditCard /> <p>12x sem juros</p>
          </li>
          <li>
            <MdLocalShipping /> <p>Entregas em todo Brasil</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
