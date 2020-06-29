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

export const postAPI = data => {
    console.log(data)
    return dispatch => {
        dispatch({type: "POST_API" })
        axios.post('http://localhost:3333/smurfs', data)
        .then(response => {
            // dispatch({type: "POST_SMURF_SUCCESS"})
            console.log("RESPONSE DATA", response)
        })
        .catch(err => console.log("ERROR", err))
    }
}