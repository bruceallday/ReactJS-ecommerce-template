import CartActionTypes from './card.types.js';
import {addItemsToCart} from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload )
            }

            default:
                return state;
    }
}

export default cartReducer;