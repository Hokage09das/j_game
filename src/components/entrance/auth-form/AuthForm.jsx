import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getData } from "../../../redux/slice/entrance-slice";

import { entranceAction } from "../../../redux/slice/entrance-slice";

import styles from "./auth-form.module.scss";

export const AuthForm = () => {
  const [entrance, setEntrance] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    return setEntrance(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (entrance.length > 3) {
      dispatch(entranceAction.copyFirstFiveElementOfArray());

      return dispatch(entranceAction.getUser(entrance));
    }
  };

  useEffect(() => {
    dispatch(getData(3));
    dispatch(getData(2));
    dispatch(getData(4));
    dispatch(getData(5));
    dispatch(getData(6));
  }, [dispatch]);

  return (
    <form
      onSubmit={submitHandler}
      className={styles.auth_form}
    >
      <p className={styles.title}>Write you nick name</p>

      <input
        value={entrance}
        onChange={handleChange}
        className={styles.user_field}
      />
      <button
        type='submit'
        className={styles.confirm_button}
      >
        Confirm
      </button>
    </form>
  );
};
