import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {

    //this is testing of azure CI
    switch (action.type) {

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden    

            };
        default:
    return state;    
        
    }
};

export default cartReducer;