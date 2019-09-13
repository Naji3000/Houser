import React, {Component} from 'react'
import House from './House'
import axios from 'axios'
import { Link } from "react-router-dom";

class Dashboard extends Component {
    constructor(){
        
        super()
        this.state = {
            property_name: "",
            address: "",
            city: "",
            state: "",
            zip_code: 0

        }
        this.handleChange = this.handleChange.bind(this)
        this.submitListing = this.submitListing.bind(this)
    }

    
    handleChange(e) {
        this.setState({[e.target.value]: e.target.value})
    }

    submitListing(){
        axios.post('/api/houses', {
            property_name: this.state.property_name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code
        })
        .then(res => {this.props.updateProperty(res.data)})
        .catch(error => {
            console.log(error)
        })
    }

    updateHouse = (id) => {
        axios.put(`/api/houses/${id}`)
        .then(res =>{this.props.updateProperty(res.data)})
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`)
        .then(res => {this.props.updateProperty(res.data)})
    }
    

    

    render(){
        return(
            <section className='container' >
                <div>
                    <h1>Dashboard</h1>
                    {this.props.houses.map((el, index) => {
                        return (
                            <House
                            key={index}
                            property_name = {el.property_name}
                            address = {el.address}
                            city = {el.city}
                            state = {el.state}
                            zip_code = {el.zip_code}
                            />
                        )
                    })}
                    
                <Link to='/wizard' >
                <button className='add-property' onClick={this.submitListing}>Add New Property</button>
                </Link>
                </div>
            </section>
        )
    }
}
export default Dashboard;