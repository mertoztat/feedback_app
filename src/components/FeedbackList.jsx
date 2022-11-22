import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackList = () => {
  const { feedback, deleteFeedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <h3>No Feedback yet</h3>;
  }

  return (
    <>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          // deleteFeedback={deleteFeedback}
        />
      ))}
    </>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
