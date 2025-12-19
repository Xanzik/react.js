import "./App.css";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import { useState } from "react";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import { UserContextProvider } from "./context/user.context.jsx";
import SelectUser from "./components/SelectUser/SelectUser.jsx";

const INITIAL_STATE = [
  {
    id: 1,
    title: "Mountain Trip",
    post: "Went hiking today — the air was incredibly fresh and the scenery was amazing.",
    date: new Date(),
    userId: 1,
  },
  {
    id: 2,
    title: "Learning React",
    post: "Studied props and components today, slowly getting a better grip on the architecture.",
    date: new Date(),
    userId: 2,
  },
  {
    id: 3,
    title: "Workout Session",
    post: "Had a solid cardio workout, feeling energized and motivated.",
    date: new Date(),
    userId: 3,
  },
];

function App() {
  const [journalData, setJournalData] = useState(INITIAL_STATE);
  const [selectedItem, setSelectedItem] = useState({});

  const addToJournalData = (newItem) => {
    if (!newItem.id) {
      setJournalData((oldItems) => [
        ...oldItems,
        {
          ...newItem,
          date: new Date(newItem.date),
          id:
            oldItems.length > 0
              ? Math.max(...oldItems.map((i) => i.id)) + 1
              : 1,
        },
      ]);
    } else {
      setJournalData((oldItems) =>
        oldItems.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...newItem,
              date: new Date(newItem.date),
            };
          }
          return item;
        }),
      );
    }
  };

  const removeFromJournalData = (id) => {
    console.log(id);
    setJournalData((oldItems) => oldItems.filter((i) => i.id !== id));
    console.log(journalData);
  };

  return (
    <UserContextProvider>
      <LeftPanel>
        <SelectUser />
        <Header />
        <JournalAddButton clearForm={() => setSelectedItem(null)}>
          <img src="/plus-icon.svg" alt="plus-icon" />
          New memory
        </JournalAddButton>
        <JournalList data={journalData} setItem={setSelectedItem}></JournalList>
      </LeftPanel>
      <Body>
        <JournalForm
          onSubmit={addToJournalData}
          removeItem={removeFromJournalData}
          data={selectedItem}
        />
      </Body>
    </UserContextProvider>
  );
}

export default App;
