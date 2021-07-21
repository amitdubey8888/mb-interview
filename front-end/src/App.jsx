import './App.css';
import React from 'react';
import { thistle } from 'color-name';
import _ from "lodash";
import Rows from './Rows';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  async componentDidMount() {
    let headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch('http://localhost:3001/fetch', {headers});
    const data = await response.json();
    console.log(data.data);
    this.setState({ data: data.data });
  }

  render() {
    let rows = [];
  for (let i = 0; i < this.state.data.length; i++) {
    rows.push(<Rows key={i} data={this.state.data[i]} />);
  }
    return (
    <div className='App'>
      <table className="table">
        <thead>
          <tr>
          <th>ID</th>
          <th>Post ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
    )
  }
}

export default App;
