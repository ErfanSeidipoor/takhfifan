import ACTIONS from './action'

const defaultStore = ({
    products: [],
})

const simpleReducer = (state=defaultStore, action)=> {
    switch (action.type) {
        case ACTIONS.type.ADD_TO_CART:
            return ({
                products: state.products.map(item=> (item.id===action.payload? {...item,cart:true}: item) )
            })  
        case ACTIONS.type.REMOVE_FROM_CART:
            return ({
                products: state.products.map(item=> (item.id===action.payload? {...item,cart:false}: item) )
            }) 
        case ACTIONS.type.GET_PRODUCTS:
            return ({
                products: action.payload,
            })    
        default:
            return state
    }
}

export default simpleReducer;