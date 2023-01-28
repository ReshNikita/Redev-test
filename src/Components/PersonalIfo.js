import React from "react";
import "../Styles/PersonalIfo.css";

const PersonalIfo = ({ name, age, additionalIfo, sentence }) => {
  return (
    <div className="persInfo">
      <p> My name is {name}.</p>
      <p>I'm {age} years old.</p>
      <p>
        My personal email is <em>{additionalIfo}</em>.
      </p>
      <p>{sentence}</p>
    </div>
  );
};

export default PersonalIfo;
