import React from 'react';
import ReactDom from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecerment = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecerment}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDom.render(<App color='Red' />, document.querySelector('#root'));
