import { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "./context/FeedbackContext";
import { FaTimes, FaTrash } from "react-icons/fa";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
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
