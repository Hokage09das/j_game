import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./item.module.scss";

export const ItemValue = ({ id, value, itemId, baningEnterUser }) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={`jeopardy/${id}/${itemId}`}
        onClick={() => baningEnterUser(itemId, id)}
      >
        {value}
      </NavLink>
    </li>
  );
};
