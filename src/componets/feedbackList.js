import React from 'react';
import styles from './syle.module.css';

const List = ({ good, neutral, bad, totalVoutes, positiveFeedback }) => (
  <ul className={styles.FeedbackItem}>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {totalVoutes}</li>
    <li>Positive Feedback: {positiveFeedback}%</li>
  </ul>
);
export default List;
