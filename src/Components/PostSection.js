import React from "react";
import "../Styles/PostSection.css";
export default function PostSection({ title, text, text2 }) {
  return (
    <div className="PostSection">
      <h2 className="title">{title}</h2>
      <div className="text">
        <p>{text}</p>
        <p className="text2">{text2}</p>
      </div>
    </div>
  );
}
