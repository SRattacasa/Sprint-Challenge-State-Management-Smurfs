import { bindActionCreators } from "redux"

const initialState = {
    smurfs: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_DATA":
        return {
            state,
        }        
        case "FETCH_API":
            console.log("FETCHING")
        return {
            state
        }        
        case "POST_API":
            console.log("POSTING")
        return {
            state
        }        
        case "FETCH_SMURF_SUCCESS":
            console.log("PAYLOAD?", action.payload)
            
        return {
            smurfs: action.payload
        } 
        case "POST_SMURF_SUCCESS":
            console.log("POST?", action.payload)
        return {
            smurfs: action.payload
        } 
        default: 
        return {
            state,
        }
    }
}
