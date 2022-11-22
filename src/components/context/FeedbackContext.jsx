import { createContext, useState } from "react";
import FeedbackData from "../../data/FeedbackData";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState(FeedbackData);

  //   Edit FeedBack Function
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //   Update Feedback Function
  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };

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

  //   Update edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
