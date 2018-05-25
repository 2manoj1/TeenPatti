import React, { Component } from 'react';
import TeenPattiGame from './Components/TeenPattiGame';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      winner: null
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  submitValue = () => {
    if (this.state.inputValue) {
      try {
        let value = JSON.parse(this.state.inputValue);
        if (Array.isArray(value)) {
          let inputArrayPlayers = value;//[[12, 23, 45], [0, 32, 50], [25, 6, 17], [22, 33, 44], [43, 49, 16]];
          let winner = TeenPattiGame.getWinner(inputArrayPlayers);
          this.setState({
            winner: Array.isArray(winner) ? winner[0] : winner
          })
        }
        else {
          alert("Please Input Array of object data. EX: [[12, 23, 45], [0, 32, 50], [25, 6, 17], [22, 33, 44], [43, 49, 16]]");
        }
      }
      catch (e) {
        alert("Please Input Array of object data. EX: [[12, 23, 45], [0, 32, 50], [25, 6, 17], [22, 33, 44], [43, 49, 16]]");
      }
    }

  }

  render() {
    return (
      <div className="App">
        <label>Please Input Array of object data. EX: [[12, 23, 45], [0, 32, 50], [25, 6, 17], [22, 33, 44], [43, 49, 16]]</label>
        <br />
        <label>Give a Input Data for Teen Patti</label>
        <br />
        <hr />
        <textarea value={this.state.value} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitValue}> Submit Input Data </button>
        {this.state.winner && <div>{`Winner is Player Index: ${this.state.winner.id}`}</div>}
      </div>
    );
  }
}

export default App;
