import "./Button.css";
import { memo } from "react";

function Button({ children }) {
  return <button className="button accent">{children}</button>;
}

export default memo(Button);
