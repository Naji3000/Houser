import {createStore} from 'redux';

const initialState = {
    property_name: "",
    address: "",
    city: "",
    state: ""
}

export const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"

function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_PROPERTY_NAME:
            return {
                ...state,
                name: payload
            }
            case UPDATE_ADDRESS:
                return {
                    ...state,
                    name: payload
                }

                case UPDATE_CITY:
                    return {
                        ...state,
                        name: payload
                    }
                    case UPDATE_STATE:
                        return {
                            ...state,
                            name: payload
                        }
                            default: return state;
    }
}
export default createStore(reducer)