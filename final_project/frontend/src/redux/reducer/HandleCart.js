const cart = [];

const HandleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.payload) {
        case "ADDITEM":
            //Check If Product is Already Exit
            const exit = state.find((x) => x.id === product.id)
            if (exit) {

                //Increase the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x)

            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
        case "DELITEM":
            const exit1 = state.find((x) => x.id === product.id)

            if (exit1.qty === 1) {
                return state.filter((x) => x.id !== exit1.id)
            }
            else{
                return state.map((x)=>
                x.id===product.id? {...x,  qty:x.qty-1}:x

                )
            }

  default:
     return state;
        
    }

}
















export default HandleCart;