import React from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import { entranceAction } from "../../redux/slice/entrance-slice";
import { route } from "../../utils/constants/route";

import styles from "./header.module.scss";

const CustomLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={match ? styles.active : styles.link}
      {...props}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <CustomLink to={route.INNER_PAGE}>Jeopardy</CustomLink>
      <CustomLink to={route.STATISTIC}>Statistic</CustomLink>
      <CustomLink to={route.AUTH}>
        <button onClick={() => dispatch(entranceAction.log_out())}>
          Log out
        </button>
      </CustomLink>
    </header>
  );
};
