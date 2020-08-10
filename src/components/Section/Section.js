import React from "react";
import PropTypes from "prop-types";
import classes from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={classes.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
