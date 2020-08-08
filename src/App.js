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
    const countClicks = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leeve Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateProp}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countClicks > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countClicks}
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
