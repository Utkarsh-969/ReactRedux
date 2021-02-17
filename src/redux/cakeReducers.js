import {BuyCake} from "./cakeConstant"

const InitialState = {
    NumberOfCakes : 10
}
export const Reducers = (state = InitialState , action) => {
    switch(action.type){

        case BuyCake :
            return (
                {
                ...state,
                 NumberOfCakes : state.NumberOfCakes-1
                }
            )
        default:
            return state
    }
} 