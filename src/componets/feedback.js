// import React from "react";
// import Controls from "./controls";
// import List from "./feedbackList";

// class Feedback extends React.Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   // handleGoodClick = () => {
//   //   this.setState(prevState => ({ good: prevState.good + 1 }));
//   // };
//   // optionsArr() {
//   //   const options = Object.keys(this.state);
//   //   return options;
//   // }

//   onLeaveFeedback = (option) => {
//     this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
//   };

//   totalVoutes = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   positiveFeedback = () => {
//     let total = this.state.good + this.state.neutral + this.state.bad;
//     return Math.ceil((this.state.good * 100) / total);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>

//         <Controls
//           // options={this.optionsArr()}
//           options={this.state}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//         <h3>Statistics</h3>
//         {this.totalVoutes() !== 0 ? (
//           <List
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             totalVoutes={this.totalVoutes(this.state)}
//             positiveFeedback={this.positiveFeedback(this.state)}
//           />
//         ) : (
//           <h3> No Feedback given</h3>
//         )}
//       </div>
//     );
//   }
// }

//export default Feedback;
//////////

import { useState } from "react";
import Controls from "./controls";
import List from "./feedbackList";

function Feedback() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  function onLeaveFeedback(options) {
    console.log(options);
    switch (options) {
      case "good":
        setGood(good + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;

      default:
        return;
    }
    // if (options === "good") {
    //   setGood(good + 1);
    // }
    // if (options === "neutral") {
    //   setNeutral(neutral + 1);
    // }
    // if (options === "bad") {
    //   setBad(bad + 1);
    // }
  }

  const totalVoutes = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const positiveFeedback = (good, neutral, bad) => {
    let total = good + neutral + bad;
    let precent = Math.ceil((good * 100) / total);
    return isNaN(precent) ? 0 : precent;
  };

  return (
    <div>
      <h2>Please leave feedback</h2>

      <Controls
        options={{ good, neutral, bad }}
        onLeaveFeedback={onLeaveFeedback}
      />
      <h3>Statistics</h3>
      {totalVoutes() !== 0 ? (
        <List
          good={good}
          neutral={neutral}
          bad={bad}
          totalVoutes={totalVoutes(good, neutral, bad)}
          positiveFeedback={positiveFeedback(good, neutral, bad)}
        />
      ) : (
        <h3> No Feedback given</h3>
      )}
    </div>
  );
}

// goit-react-hw-02-feedback
export default Feedback;
