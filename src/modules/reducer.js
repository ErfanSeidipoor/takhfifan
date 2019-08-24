import ACTIONS from './action'

const defaultStore = ({
    text: "empty",
})

const simpleReducer = (state=defaultStore, action)=> {
    switch (action.type) {
        case ACTIONS.type.CREATE_ITEM:
            return ({
                text: action.payload
            })    
        default:
            return state
    }
}

export default simpleReducer;