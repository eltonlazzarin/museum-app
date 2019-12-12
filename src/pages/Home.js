import React, { Component } from 'react';
import { InfoConsumer } from '../components/context';
import Info from '../components/Info';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <InfoConsumer>
            {value => {
              return value.info.map(item => {
                return <Info key={item.id} item={item} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}
