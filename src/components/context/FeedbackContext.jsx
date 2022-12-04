import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch to data & push to useState

  useEffect(() => {
    fetchData();
  }, []);

  // fetch to data from db json (GET METHOD)

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //   Edit FeedBack Function
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //   Update Feedback Function
  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map(
        (item) => (item.id === id ? { ...item, ...data } : item)
        // item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };

  // Delete FeedBack Function
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
      // feedback item componentindeki handleClick(item.id) parametresine buradan id geçiyoruz
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add FeedBack Function
  const addFeedback = async (newFeedBack) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedBack),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);

    // setFeedback([newFeedBack, ...feedback]);
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
        isLoading,
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
