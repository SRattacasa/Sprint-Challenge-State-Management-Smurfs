import React, {useContext} from 'react'
// import axios from 'axios'
// import Smurf from './Smurf'
import { SmurfContext } from '../contexts/SmurfContext'



// axios.get('http://localhost:3333/smurfs')
//         .then(response => {
//             console.log(response)
//             response.data.map(smurf => {
//                 return ( 
//                     (<Smurf />)
//                 )}
//             )
//         })
//         .catch(err => console.log("ERROR", err))


const SmurfList = () => { 
    const smurfs = useContext(SmurfContext)
    return (
    <h2>{console.log(smurfs)}</h2>
    )
}

export default SmurfList