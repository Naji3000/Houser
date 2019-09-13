import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Header from './components/Header'
import {HashRouter} from 'react-router-dom'
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      houses: [
        {
          property_name: "",
          address: "",
          city: "",
          state: "",
          zip_code: 0

        }
      ]
    };

  }

  componentDidMount = () => {
    axios.get('/api/houses')
    .then(res => {
      this.updateProperty(res.data)
    })
  }
  


  updateProperty(value){
    this.setState({
      property_name: value,
      address: value,
      city: value,
      state: value,
      zip_code: value
    })
  }



  render(){
    const {houses} = this.state
  return (
    
    <HashRouter>
    <div className="App">
      <Header />
      <Dashboard houses = {houses}
      updateProperty = {this.updateProperty}/>
      <Wizard />
      
    </div>
    </HashRouter>
  
  )
  }
}

export default App;
