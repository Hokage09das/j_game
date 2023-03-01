import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { NavLink, useParams } from "react-router-dom";
import { entranceAction } from "../../redux/slice/entrance-slice";
import { route } from "../../utils/constants/route";

import styles from "./tableItem.module.scss";

export const TableItem = () => {
  const { id, itemid } = useParams();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [state, setState] = useState(false);

  const { data, statistic } = useSelector((state) => state.entrance);

  const findByItemId = data.find((item) => item.id === Number(itemid));
  const example = findByItemId?.clues.find((item) => item.id === Number(id));

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      inputValue.trim().toLocaleLowerCase() ===
      example.answer.trim().toLocaleLowerCase()
    ) {
      dispatch(
        entranceAction.getTrueAnswer({
          title: findByItemId.title,
          value: example.value,
          isCorrect: isCorrect,
        }),
      );
      setInputValue("");
      setState(true);

      return setIsCorrect(true);
    }

    setIsCorrect(false);

    setState(true);

    setInputValue("");
  };
  console.log(statistic, "dastan");

  return (
    <div className={styles.table_item_container}>
      <div className={styles.table_item}>
        <p>{example.question}?</p>
        <form
          onSubmit={submitHandler}
          className={styles.form}
        >
          <input
            disabled={state}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type='submit'
            disabled={state}
          >
            confirm
          </button>
        </form>

        {state ? (
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ color: isCorrect ? "green" : "red" }}>
              {isCorrect ? " its correct" : "   its not correct"}
            </div>
            <div>true answer:{example.answer}</div>
          </div>
        ) : null}
        <NavLink to={route.INNER_PAGE}>to question</NavLink>
      </div>
    </div>
  );
};
