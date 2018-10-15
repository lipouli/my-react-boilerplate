import React from 'react';

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
      <div>
        App online ! {this.getMenu()}
      </div>
    );
  }
}

export default App;
