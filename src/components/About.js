import React from "react";

function About(props) {
  return (
    <>
    <div className="container123"
    style={{
      backgroundColor: props.mode === `dark` ? `#1d1e20` : `white`,
      color: props.mode === `dark` ? `white` : `black`,
    }} >
      
      <h2>About Us  </h2>
      <p>
        Text Editor is a free online tool collection for generating and
        converting text. Find here in one place everything that font-related:
        enojis, characters, ASCII art and more. We didn't invent anything new,
        we just collected other individual websites in one place and made them
        even better. Or at least we hope that our visitors find these tools
        useful as well as we do. Our plan is to add even more features to Text
        Editor in the future. Our ultimate goal is becoming the best and most
        popular text converter.
      </p>
      </div>
   
  </>
  );
}

export default About;
