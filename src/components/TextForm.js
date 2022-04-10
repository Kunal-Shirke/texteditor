import React, { useState } from "react";
import Trial from "./Trial";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("UppercaseClicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("handle On Change");
    setText(event.target.value);
  };
  const handleUpClick2 = () => {
    console.log("UppercaseClicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleUpClick3 = () => {
    console.log("UppercaseClicked");
    setText("");
    props.showAlert("Text Cleared", "danger");
  };
  const handleCopy = () => {
    console.log("text is copied");
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div
        className="containerbtn my-2"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === `dark` ? `#1d1e20` : `white`,
              color: props.mode === `dark` ? `white` : `black`,
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
         
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleUpClick2}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
            
        
        <button
          type="button"
          className="btn2 btn-danger mx-2"
          onClick={handleUpClick3}
        >Clear All
          <img src="/Images/reset.png " alt="" width="25" height="22" />
        </button>
        
      </div>
      
      <div
        className="container2 my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h2> Summary</h2>
        <p>
          There are {text.split(" ").length} words {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Average Time To Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
