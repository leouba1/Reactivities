import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'

class App extends Component {
  state = {
    values: []
  }

  componentWillMount() {
    axios.get("http://localhost:5000/api/values").then(response => {
      this.setState({
        values: response.data
      })
    })
  }

  render() {
    return (
      <div className="App" >
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <img src={logo} className="App-logo" alt="logo" />

        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>

      </div >
    );
  }
}

export default App;
