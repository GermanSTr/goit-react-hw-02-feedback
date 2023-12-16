import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // handleIncrement = evt => {
  //   const text = evt.currentTarget.textContent.toLowerCase();
  //   const values = Object.keys(this.state);
  //   values.forEach(value => {
  //     text === value &&
  //       this.setState(prevState => ({
  //         value: prevState.value + 1,
  //       }));
  //   });
  // };

  handleIncrement = evt => {
    const text = evt.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      const updatedState = { ...prevState };
      if (updatedState.hasOwnProperty(text)) {
        updatedState[text] += 1;
      }
      return updatedState;
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      this.state.good && (this.state.good / this.countTotalFeedback()) * 100
    ).toFixed();
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={this.state}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
