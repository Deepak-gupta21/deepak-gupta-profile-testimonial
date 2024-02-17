import React from "react";
import "./curseranimation.css";

const Curseranimation = () => {
  const bubbleContainer = document.querySelector(".curser-bubble-container");
      document.addEventListener("mousemove", (event) => {
    const curserbubble = document.createElement("div");
    curserbubble.classList.add("curserbubble");
    setTimeout(() => {
        curserbubble.classList.add(
            `curserbubble-${Math.floor(Math.random() * 8 + 1) + 1}`
          );
      }, 500);
   
   
    curserbubble.style.top = `${event.clientY}px `;
    curserbubble.style.left = `${event.clientX}px`;
    bubbleContainer.appendChild(curserbubble);
    setTimeout(() => {
      curserbubble.remove();
    }, 8000);
  });

  return <div class="curser-bubble-container"></div>;
};

export default Curseranimation;
