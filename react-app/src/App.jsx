import "./App.css";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";

const journalData = [
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
        <Header />
      </Body>
    </>
  );
}

export default App;
