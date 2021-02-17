import React from 'react'
import {connect}  from 'react-redux'
import BuyCakeAction from './redux/cakeAction'
function CakeShop(props) {
    return (
        <>
            <h1>Number Of Cakes : {props.numOfCakes}</h1>
            <button onClick={props.buyCake}> Buy Cake </button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.NumberOfCakes
    } 
}

 const mapStateToDispatch = dispatch => {
    return {
        buyCake : () => dispatch(BuyCakeAction())
    }
 }

 export default connect(mapStateToProps,mapStateToDispatch) (CakeShop)



