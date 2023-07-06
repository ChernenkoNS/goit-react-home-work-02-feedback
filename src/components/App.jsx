import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    total: 0,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = (good, total) => {
    if (total === 0) {
      return 0;
    }
    return (good / (total / 100)).toFixed(0);
  };

  countTotalFeedback = key => {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const positivePercentage = this.countPositiveFeedbackPercentage(
      this.state.good,
      this.state.total
    );
    return (
      <Section>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.countTotalFeedback}
        />
        <h2>Statistics</h2>
        {this.state.total < 1 
          ? (
            <Notification message="There is no feedback" />
            ) 
          : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={positivePercentage}
              countTotalFeedback={this.countTotalFeedback}
            />
          )
        }
      </Section>
    );
  }
}
