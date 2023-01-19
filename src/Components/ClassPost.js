import React from "react";
import "../Styles/ClassPost.css";

export default class ClassPost extends React.Component {
  render() {
    return (
      <div className="ClassPost">
        <h2 className="title">{this.props.title}</h2>
        <div className="text">
          <p>{this.props.text}</p>
          <p className="text2">{this.props.text2}</p>
        </div>
      </div>
    );
  }
}
