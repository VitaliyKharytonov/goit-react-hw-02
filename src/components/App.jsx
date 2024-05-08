import { useState, useEffect } from "react";
import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx"
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx"


export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {good: 0,
    neutral: 0,
    bad: 0,
  };
  });


  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);

  const { good, neutral, bad } = values;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] +1,
    });
  }
  
   const resetFeedback = () => { 
      setValues(
       { good: 0,
        neutral: 0,
        bad: 0,}
      )
    };

  return (
    <>
      <Description />
      <Options value={values} updateFeedback={updateFeedback} resetFeedback={resetFeedback} total={totalFeedback}/>
      { totalFeedback > 0 ? <Feedback value={values} total={totalFeedback} positive={positiveFeedback}/> : <Notification/> }
    </>
  )
}


