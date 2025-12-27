import { use } from "react";
import useCartStore from "./store/useCartStore";

function Cart(){

    const cart = useCartStore ((state)=> state.cart)
    const incrementCart = useCartStore ((state)=> state.incrementCart)
    return(
        <div>
            <h1>Itens no carrinho: {cart}</h1>
            <button onClick={incrementCart}>Adicionar</button>
        </div>
    )
}

export default Cart;