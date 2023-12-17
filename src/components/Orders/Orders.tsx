import React, { useCallback, useEffect, useState } from "react";
import { ProductType } from "../products/Products";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType, store, useAppDispatch } from "../../store/store";
import { Order } from "./Order/Order";
import s from "./Orders.module.css"
import { deleteActionCreator, fetchOrdersTC, setOrderseActionCreator } from "../../store/reducers/ordersReducer";
import { ordersAPI } from "../../api/ordersAPI";

export type OrderType = {
    id: number,
    title: string,
    date: string,
    description: string,
    products: ProductType[]
}

export const Orders = () => {

  
    const orders = useSelector<AppRootStateType, OrderType[]>(state => state.orders)
    const dispatch = useAppDispatch();

    const deleteOrder = useCallback(function(orderId: number){
        const action = deleteActionCreator(orderId);
        dispatch(action);
    }, [dispatch])

    useEffect( () => {
        if(orders.length === 0){
            const thunk = fetchOrdersTC()
            dispatch(thunk)
        }
    }, [])

    return (
        <div className={s.orders__container}>
            <div className={s.orders__container2}>
                <div className={s.orders__container2__info}>
                    <button className={s.orders__container2__info_button}>+</button>
                    <p className={s.orders__container2__info_paragraph}>Приходы / { orders.length }</p>
                </div>
                {
                    orders.map(order => 
                            <Order order={order} deleteCallBack={deleteOrder} key={order.id}/>
                        )
                }
            </div>
        </div>
    );
}