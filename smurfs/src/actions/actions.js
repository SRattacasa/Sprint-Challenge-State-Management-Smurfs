import axios from 'axios'

export const fetchAPI = () => {
    return dispatch => {
        dispatch({type: "FETCH_API" })
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({type: "FETCH_SMURF_SUCCESS", payload: response.data})
            console.log("RESPONSE DATA", response)
        })
        .catch(err => console.log("ERROR", err))
    }
}

export const postAPI = data => dispatch => 
    
    {
        {console.log("postAPI", data)}
        axios.post('http://localhost:3333/smurfs', data)
        .then(response => {
            console.log("after i posted the data DATA", response)
            dispatch({type: "POST_SMURF_SUCCESS", payload: data})
        })
        .catch(err => console.log("ERROR", err))
    }
