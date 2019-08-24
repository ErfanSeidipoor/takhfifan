const type = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
}

const createItem = task => ({
    type: type.CREATE_ITEM,
    payload: "hello",
})

export default {
    createItem,
    type
}