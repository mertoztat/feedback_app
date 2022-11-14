import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  // conditional className
  //   return <div className={`card ${reverse && "reverse"} `}>{children}</div>;

  // conditional className
  return <div className={reverse ? "card reverse" : "card"}>{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
