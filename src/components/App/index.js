import React from 'react';
import { hot } from 'react-hot-loader';

import chatTest from 'Src/assets/images/chatTest.jpg';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.incCounter = this.incCounter.bind(this);
  }

  incCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          App online ! {this.state.counter}
        </div>
        <img src={chatTest} />
        <div>
          <button onClick={this.incCounter}>Increase</button>
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
