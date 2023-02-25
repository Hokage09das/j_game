import React, { useState } from "react";

import { useDispatch } from "react-redux";

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
      return dispatch(entranceAction.getUser(entrance));
    }
  };

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
