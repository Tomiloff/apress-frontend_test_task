import { productsAPI } from "../../services/api";


const SET_PRODUCTS = "topTable/SET_PRODUCTS";

const initialState = {
  products: []
};

const topTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state, 
        products: action.products
      }
        
    default:
      return state;
  }
};


export const setProducts = (products) => ({type: SET_PRODUCTS, products});


export const requestProducts = () => async (dispatch) => {
  const response = await productsAPI.getProducts();
  dispatch(setProducts(response.data));
}


export default topTableReducer;