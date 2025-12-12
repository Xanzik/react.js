import styles from "./JournalForm.module.css";
import cn from "classnames";

import { useState } from "react";
import Button from "../Button/Button.jsx";

function JournalForm({ onSubmit }) {
  const [inputData, setInputData] = useState("");

  const inputChange = (e) => {
    setInputData(e.target.value);
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    onSubmit(formProps);
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <div className={styles["journal-form__input-wrapper"]}>
        <input
          type="text"
          name="title"
          placeholder="Journal Title"
          className={cn(
            styles["journal-form__input"],
            styles["journal-form__input-title"],
          )}
        />
        <img
          src="/pocket.svg"
          alt="pocket-icon"
          className={cn(
            styles["journal-form__input-icon"],
            styles["journal-form__input-icon-title"],
          )}
        />
      </div>
      <div>
        <div className={styles["journal-form__input-wrapper"]}>
          <img
            src="/calendar-icon.svg"
            alt="pocket-icon"
            className={cn(
              styles["journal-form__input-icon"],
              styles["journal-form__input-icon-date"],
            )}
          />
          <span className={styles["journal-form__input-description"]}>
            Date
          </span>
          <input
            type="date"
            name="date"
            className={cn(
              styles["journal-form__input"],
              styles["journal-form__input-date"],
            )}
          />
        </div>
        <div className={styles["journal-form__input-wrapper"]}>
          <img
            src="/folder-icon.svg"
            alt="pocket-icon"
            className={cn(
              styles["journal-form__input-icon"],
              styles["journal-form__input-icon-tag"],
            )}
          />
          <span className={styles["journal-form__input-description"]}>
            Tags
          </span>
          <input
            type="text"
            name="tag"
            value={inputData}
            onChange={inputChange}
            className={cn(
              styles["journal-form__input"],
              styles["journal-form__input-tag"],
            )}
          />
        </div>
      </div>
      <textarea
        name="post"
        cols="30"
        rows="10"
        className={styles["journal-form__textarea-post"]}
      ></textarea>
      <Button
        text="Save"
        className={styles["journal-form__button-save"]}
      ></Button>
    </form>
  );
}

export default JournalForm;
