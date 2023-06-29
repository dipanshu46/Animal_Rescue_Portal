//for Add item to cart//
export const addCart= (Product)=>{
    return{
        type:"ADDITEM",
        payload: Product
}

}

//for Delete item from cart//
export const delCart= (Product)=>{
    return{
        type:"DELETEITEM",
        payload: Product
}

}