import React, { useState, useEffect } from "react";
import "../css/TypingHeader.css";

function TypingHeader() {
  const [text, setText] = useState("");
  const phrases = [
    "PREPARE-SE PARA O FUTURO, APRENDA AS MELHORES TECNOLOGIAS E ALAVANQUE DE VEZ SEU SUCESSO!",
  ];

  useEffect(() => {
    let counter = 0;
    let intervalId = setInterval(() => {
      const newText = phrases[counter];
      setText(newText.substring(0, text.length + 1));
      if (newText.length === text.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          intervalId = setInterval(() => {
            setText(newText.substring(0, text.length - 1));
            if (text.length === 0) {
              clearInterval(intervalId);
              counter = (counter + 1) % phrases.length;
              setTimeout(() => {
                intervalId = setInterval(() => {
                  const newText = phrases[counter];
                  setText(newText.substring(0, text.length + 1));
                  if (newText.length === text.length) {
                    clearInterval(intervalId);
                  }
                }, 100);
              }, 1000);
            }
          }, 100);
        }, 1000);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    const h2 = document.querySelector("h2");
    h2.classList.add("fade-in");
    setTimeout(() => {
      h2.classList.remove("fade-in");
    }, 1000);
  }, []);

  return <h2>{text}</h2>;
}

export default TypingHeader;
