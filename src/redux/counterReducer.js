
const defaultState = {
    counter:0
}

export function counterReducer(state=defaultState, actions){

    switch (actions.type) {
        case "Add":
            return {
                ...state, counter:state.counter+actions.payload
            }
        case "Remove":
            return {
                ...state, counter:state.counter - actions.payload
            }    
        default:
         return state
    }
}