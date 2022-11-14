import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaTrash } from "react-icons/fa";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button className="close">
        <FaTimes />
      </button> */}
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
