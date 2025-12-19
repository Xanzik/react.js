import styles from "./JournalForm.module.css";
import cn from "classnames";

import { useContext, useEffect, useReducer } from "react";
import Button from "../Button/Button.jsx";
import { INITIAL_STATE, formReducer } from "./JournalForm.state.js";
import { UserContext } from "../../context/user.context.jsx";

function JournalForm({ onSubmit, removeItem, data }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { userId } = useContext(UserContext);
  const { values, isFormReadyToSubmit } = formState;

  useEffect(() => {
    if (!data) {
      dispatchForm({ type: "RESET" });
      dispatchForm({ type: "SET_VALUE", payload: { userId } });
    }
    dispatchForm({ type: "SET_VALUE", payload: { ...data } });
  }, [data]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit({ ...values, userId });
      dispatchForm({ type: "RESET" });
      dispatchForm({ type: "SET_VALUE", payload: { userId } });
    }
  }, [isFormReadyToSubmit, values, onSubmit, userId]);

  useEffect(() => {
    dispatchForm({ type: "SET_VALUE", payload: { userId } });
  }, [userId]);

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  const removeJournalItem = (e) => {
    removeItem(values.id);
  };

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <div className={styles["journal-form__input-title-wrapper"]}>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={onChange}
          placeholder="Journal Title"
          className={cn(
            styles["journal-form__input"],
            styles["journal-form__input-title"],
          )}
        />
        {data?.id ? (
          <Button
            onClick={removeJournalItem}
            className={cn(styles["journal-form__input-icon-title"])}
          >
            <img src="/pocket.svg" alt="pocket-icon" />
          </Button>
        ) : null}
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
            value={
              values.date
                ? new Date(values.date).toISOString().slice(0, 10)
                : ""
            }
            onChange={onChange}
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
            value={values.tag}
            onChange={onChange}
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
        value={values.post}
        onChange={onChange}
        className={styles["journal-form__textarea-post"]}
      ></textarea>
      <Button className={cn(styles["journal-form__button-save"])}>Save</Button>
    </form>
  );
}

export default JournalForm;
