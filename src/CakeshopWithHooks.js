import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import BuyCakeAction from './redux/cakeAction'
function CakeshopWithHooks() {
        const noOfCakes = useSelector(state => state.NumberOfCakes)
        const dispatch = useDispatch()
    return (
        <>
            <h1>Number Of Cakes : {noOfCakes} </h1>
            <button onClick={() => dispatch(BuyCakeAction())}>Buy Cake</button>
        </>
    )
}

export default CakeshopWithHooks
