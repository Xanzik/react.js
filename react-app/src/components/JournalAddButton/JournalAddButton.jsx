import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

function JournalAddButton({ children }) {
  return <CardButton className="journal-add">{children}</CardButton>;
}

export default JournalAddButton;
