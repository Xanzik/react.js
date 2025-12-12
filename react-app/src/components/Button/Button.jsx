import "./Button.css";

function Button({ text, className }) {
  return <button className={`button accent ${className}`}>{text}</button>;
}

export default Button;
