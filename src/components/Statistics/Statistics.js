import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>Good: {good}</li>
      <li className={classes.listItem}>Neutral: {neutral}</li>
      <li className={classes.listItem}>Bad: {bad}</li>
      <li className={classes.listItem}>Total: {total}</li>
      {positivePercentage > 50 ? (
        <li className={classes.listItem || classes.listItemTrue}>
          Positive Percentage: {positivePercentage}%
        </li>
      ) : (
        <li className={classes.listItem}>
          Positive Percentage: {positivePercentage}%
        </li>
      )}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
