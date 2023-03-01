import React from "react";
import { useSelector } from "react-redux";

export const StatisticPage = () => {
  const { userName, statistic } = useSelector((state) => state.entrance);

  return (
    <div>
      <h1> User Name: {userName}</h1>
      <p>
        Title:
        {statistic.question.title.length < 1 ? (
          <span>no theme</span>
        ) : (
          statistic.question.title.map((item) => <span key={item}>{item}</span>)
        )}
      </p>
      Value:{statistic.question.value}
    </div>
  );
};
