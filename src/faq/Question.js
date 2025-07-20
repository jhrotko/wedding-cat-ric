import { useState } from "react";
import {ReactComponent as Chevron} from "./chevron.svg";

const Question = ({ title, text }) => {
  const [open, isOpen] = useState(false);
  return (
    <div onClick={() => isOpen((prev) => !prev)}>
      <h3>{title}</h3>
      <Chevron className={isOpen ? "rotate-90" : "up"}/>
      {open ? <p>{text}</p> : null}
    </div>
  );
};

export default Question;
