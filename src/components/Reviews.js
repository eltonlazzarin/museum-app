import React, { Component } from 'react';
import { InfoConsumer } from './context';
import ReviewCard from '../components/ReviewCard';

export default class Reviews extends Component {
  render() {
    return (
      <InfoConsumer>
        {data => {
          return data.reviews.map(person => {
            return <ReviewCard key={person.id} person={person} />;
          });
        }}
      </InfoConsumer>
    );
  }
}
