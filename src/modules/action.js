const type = {
    GET_PRODUCTS: "GET_PRODUCTS",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
}


const AddToCart = (id) => ({
    type: type.ADD_TO_CART,
    payload:id,
}) 

const RemoveFromCart = (id) => ({
    type: type.REMOVE_FROM_CART,
    payload:id,
})

const GetProduct = products => ({
    type: type.GET_PRODUCTS,
    payload:products,
})

export default {
    GetProduct,
    RemoveFromCart,
    AddToCart,
    type
}