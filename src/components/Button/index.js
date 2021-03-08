import React from "react";
import './style.scss';

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;