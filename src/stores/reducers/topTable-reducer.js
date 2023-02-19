import { productsAPI } from "../../services/api";


const INITIALIZED_SUCCESS = "tableContainer/INITIALIZED_SUCCESS";
const SET_PRODUCTS = "tableContainer/SET_PRODUCTS";

const initialState = {
  initialized: false,
  products: []
};

const tableContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    case SET_PRODUCTS:
      return {
        ...state, 
        products: action.products
      }
        
    default:
      return state;
  }
};


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setProducts = (products) => ({type: SET_PRODUCTS, products});


export const requestProducts = () => async (dispatch) => {
  const response = await productsAPI.getProducts();
  dispatch(initializedSuccess());
  dispatch(setProducts(response.data));
}


export default tableContainerReducer;