import React, { Component } from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    let totalCount = this.state.good + this.state.neutral + this.state.bad;
    return totalCount;
  };
  countPositiveFeedbackPercentage = () => {
    let totalPositive = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(1);
    return totalPositive;
  };
  updateProp = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leeve Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateProp}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
