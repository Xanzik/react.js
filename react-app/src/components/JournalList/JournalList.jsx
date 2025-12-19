import "./JournalList.css";

import JournalItem from "../JournalItem/JournalItem";
import CardButton from "../CardButton/CardButton.jsx";
import { useContext } from "react";
import { UserContext } from "../../context/user.context.jsx";

function JournalList({ data, setItem }) {
  const { userId } = useContext(UserContext);

  return (
    <div className="journal-list">
      {data
        .filter((item) => item.userId === userId)
        .map((item) => (
          <CardButton key={item.id} onClick={() => setItem(item)}>
            <JournalItem {...item} />
          </CardButton>
        ))}
    </div>
  );
}

export default JournalList;
