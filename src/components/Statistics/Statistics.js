import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";
<<<<<<< HEAD
=======
import Section from "../Section/Section";
>>>>>>> 34d33a5305cb06cb91bbd9e954ab95f98393cf63

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

<<<<<<< HEAD
Statistics.propTypes = {
=======
Section.propTypes = {
>>>>>>> 34d33a5305cb06cb91bbd9e954ab95f98393cf63
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
