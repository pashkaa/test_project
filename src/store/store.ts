
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { productReducer } from "./reducers/productReducer";
import { ordersReducer } from "./reducers/ordersReducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers(
    {
        products: productReducer,
        orders: ordersReducer 
    }
)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = ()=>useDispatch<ThunkDispatch<AppRootStateType, unknown, any>>()

export type DispatchType = typeof store.dispatch;

// @ts-ignore
window.store = store;
