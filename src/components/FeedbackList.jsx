import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./Spinner";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h3>No Feedback yet</h3>;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
          ))}
        </div>
      )}
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
