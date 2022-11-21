import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // Delete
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
      // feedback item componentindeki handleClick(item.id) parametresine buradan id geçiyoruz
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add Form

  const addFeedback = (newFeedBack) => {
    setFeedback([newFeedBack, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
