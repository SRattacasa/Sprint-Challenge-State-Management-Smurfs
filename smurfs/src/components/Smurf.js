import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAPI, postAPI} from '../actions/actions'

const mapStateToProps = state => { 
    return { 
    state
    }
}


const Smurf =  props => { 
        useEffect(() => { 
            props.fetchAPI()
        }, [])
    
    return (
        <div>
            
            {/* {console.log("PROPS", props.state.smurfs)} */}
            {props.state.smurfs && props.state.smurfs.map(item =>{
                return <h1>{item.name}</h1>
            })}
        </div>
    )
}

export default connect(mapStateToProps,{fetchAPI, postAPI})(Smurf)