import React from "react";
import PropTypes from "prop-types";
import classes from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  console.log(buttons);
  return (
    <>
      <div className={classes.wrap}>
        {buttons.map((nameButton) => (
          <button
            name={nameButton}
            type="button"
            className={classes.button}
            onClick={onLeaveFeedback}
          >
            {nameButton}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
