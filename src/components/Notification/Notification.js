import React from "react";
import PropTypes from "prop-types";
import classes from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div>
      <p className={classes.alert}>{message}</p>
    </div>
  );
};

export default Notification;
