import "./App.css";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import { useState } from "react";
import JournalForm from "./components/JournalForm/JournalForm.jsx";

const INITIAL_STATE = [
  {
    id: 1,
    title: "Mountain Trip",
    post: "Went hiking today — the air was incredibly fresh and the scenery was amazing.",
    date: new Date(),
  },
  {
    id: 2,
    title: "Learning React",
    post: "Studied props and components today, slowly getting a better grip on the architecture.",
    date: new Date(),
  },
  {
    id: 3,
    title: "Workout Session",
    post: "Had a solid cardio workout, feeling energized and motivated.",
    date: new Date(),
  },
];

function App() {
  const [journalData, setJournalData] = useState(INITIAL_STATE);

  const addToJournalData = (newItem) => {
    setJournalData((oldItems) => [
      ...oldItems,
      {
        post: newItem.post,
        title: newItem.title,
        date: new Date(newItem.date),
        id: Math.max(...oldItems.map((i) => i.id)) + 1,
      },
    ]);
  };

  return (
    <>
      <LeftPanel>
        <Header />
        <JournalAddButton>
          <img src="/plus-icon.svg" alt="plus-icon" />
          Новое воспоминание
        </JournalAddButton>
        <JournalList data={journalData}></JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addToJournalData} />
      </Body>
    </>
  );
}

export default App;
