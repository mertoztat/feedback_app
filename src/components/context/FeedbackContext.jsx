import { createContext, useState } from "react";

import FeedbackData from "../../data/FeedbackData";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState(FeedbackData);

  // Delete FeedBack Function
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
      // feedback item componentindeki handleClick(item.id) parametresine buradan id geçiyoruz
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add FeedBack Function

  const addFeedback = (newFeedBack) => {
    setFeedback([newFeedBack, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
