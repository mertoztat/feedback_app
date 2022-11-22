import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  const averageRatings = feedback.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.rating / feedback.length,
    0
  );

  //   previousValue + currentValue.rating,
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      {/* averageRatings den number gelmiyorsa 0 göster  */}
      <h4> Average Rating: {isNaN(averageRatings) ? 0 : averageRatings}</h4>
    </div>
  );
};

export default FeedbackStats;
