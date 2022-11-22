import "./App.css";
import { useState } from "react";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <FeedbackStats />
          <FeedbackForm />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
