import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

function JournalAddButton({ children, clearForm }) {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      {children}
    </CardButton>
  );
}

export default JournalAddButton;
