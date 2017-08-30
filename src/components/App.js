import React from 'react';
import Header from './Header';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };

  componentDidMount() {
    console.log('did Mount');
    debugger;
  }

  componentWillUnmount() {
    console.log('will Unmount');
    debugger;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          { this.state.test }
        </div>
      </div>
    );
  }
}

export default App;
