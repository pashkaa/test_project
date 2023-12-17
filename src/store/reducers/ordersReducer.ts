import { AnyAction, Dispatch } from "redux";
import { OrderType } from "../../components/Orders/Orders";
import { ordersAPI } from "../../api/ordersAPI";
import { AppRootStateType, store } from "../store";
import { ThunkAction, ThunkActionDispatch } from "redux-thunk";

type SetOrdersActionType = {
  type: "SET-ORDERS",
  orders: OrderType[]
}

type DeleteActionType = {
    type: "DELETE",
    orderId: number
}

type OrdersReducerActionType = DeleteActionType | SetOrdersActionType;

const initialState: OrderType[] = [

]

export const ordersReducer = (state: OrderType[] = initialState, action: OrdersReducerActionType): OrderType[]  => {
    switch (action.type) {
      case 'SET-ORDERS':
            return action.orders;
        case 'DELETE':
            const stateCopy = [...state];
            return stateCopy.filter(t => t.id != action.orderId);
        default:
            return state;
    }

}

export const setOrderseActionCreator = (orders: OrderType[]): SetOrdersActionType => {
  return {type: "SET-ORDERS", orders}
}

export const deleteActionCreator = (orderId: number): DeleteActionType => {
    return {type: "DELETE", orderId}
}

export const fetchOrdersTC = ()=> {
    return (dispatch: typeof store.dispatch ) => {
        ordersAPI.getOrders()
            .then((res) => {
                dispatch(setOrderseActionCreator(res.data.orders))
            })
    }
}
