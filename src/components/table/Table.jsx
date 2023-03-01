import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";

import { entranceAction } from "../../redux/slice/entrance-slice";

import { ItemValue } from "../item-value/ItemValue";

import styles from "./table.module.scss";

export const Table = () => {
  const { data } = useSelector((state) => state.entrance);
  const dispatch = useDispatch();

  const baningEnter = (itemId, id) => {
    dispatch(entranceAction.baningEnterUser({ itemId, id }));
  };

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <ul
          className={styles.table}
          key={item.id}
        >
          <p className={styles.title}> {item.title}</p>
          {item.clues.map((el) => (
            <Fragment key={el.id}>
              {!el.invalid_count ? (
                <ItemValue
                  id={el.id}
                  itemId={item.id}
                  value={el.value}
                  baningEnterUser={baningEnter}
                />
              ) : (
                <li className={styles.item}>{el.value}</li>
              )}
            </Fragment>
          ))}
        </ul>
      ))}
    </div>
  );
};
