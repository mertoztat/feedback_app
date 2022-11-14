import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
      </div>
    </>
  );
}

export default App;
