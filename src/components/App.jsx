import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistic/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  incrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  incrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const check = this.countTotalFeedback();
    if (check) {
      return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={this.incrementGood}
            onIncrementNeutral={this.incrementNeutral}
            onIncrementBad={this.incrementBad}
          />
        </Section>
        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
