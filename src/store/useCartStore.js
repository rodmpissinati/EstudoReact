import {create}  from "zustand";

const useCartStore = create ((set) => ({

    cart: 0,
    incrementCart: ()=> set((state)=> ({cart: state.cart + 1}))

}))

export default useCartStore;