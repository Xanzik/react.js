import "./JournalList.css";

import JournalItem from "../JournalItem/JournalItem";
import CardButton from "../CardButton/CardButton.jsx";

function JournalList({ data }) {
  return (
    <div className="journal-list">
      {data.map((item) => (
        <CardButton key={item.id}>
          <JournalItem {...item} />
        </CardButton>
      ))}
    </div>
  );
}

export default JournalList;
