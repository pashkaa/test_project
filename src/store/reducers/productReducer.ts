import { ProductType } from "../../components/products/Products";
import { AnyAction, Dispatch } from "redux";
import { ordersAPI } from "../../api/ordersAPI";
import { AppRootStateType, store } from "../store";
import { ThunkAction, ThunkActionDispatch } from "redux-thunk";

type SetProductsActionType = {
  type: "SET-PRODUCTS",
  products: ProductType[]
}

type CounterReducerActionType =  SetProductsActionType;

const initialState: ProductType[] = [

]

export const productReducer = (state: ProductType[] = initialState, action: CounterReducerActionType): ProductType[] => {
    switch (action.type) {
        case 'SET-PRODUCTS':
            return action.products;
        default:
            return state;
    }

}

export const setProductsActionCreator = (products: ProductType[]): SetProductsActionType => {
  return {type: "SET-PRODUCTS", products}
}

export const fetchProducssTC = ()=> {
  return (dispatch: typeof store.dispatch ) => {
      ordersAPI.getProducts()
          .then((res) => {
              dispatch(setProductsActionCreator(res.data.products))
          })
  }
}