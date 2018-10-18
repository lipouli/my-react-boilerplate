import React from 'react';

import chatTest from 'Src/assets/images/chatTest.jpg';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: 1,
    };
  }

  getMenu() {
    return 1;
  }

  render() {
    return (
      <React.Fragment>
        <div>
          App online ! {this.getMenu()}
        </div>
        <img src={chatTest} />
      </React.Fragment>
    );
  }
}

export default App;
