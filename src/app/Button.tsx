import React from "react";

interface ButtonProps { // It's good practice to name prop interfaces with "Props"
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => { // Destructure props here
  return (
    <button className="border rounded-xl p-5" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;