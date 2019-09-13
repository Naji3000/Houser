import React, {Component} from 'react'
import store, {UPDATE_STATE} from '../store'

class Wizard extends Component {
    constructor(){
        const reduxState = store.getState()
        super()
        this.state = {
            state: reduxState.state,
            input: ''

        }
    }
    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                    state: reduxState.state,
        
            })
        })
    }


    updateState(){
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.input
        })
        this.setState({
            input: ""
        })
    }


    render(){
        return(
            <div>
                <h3>Add New Listing</h3>
                Property Name: 
                <input />
                Address: 
                <input />
            </div>
        )
    }
}
export default Wizard;