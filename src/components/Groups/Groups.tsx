import React, { useEffect } from "react"
import s from "./Groups.module.css"
import { GroupOrders } from "./GroupOrders/GroupOrders"
import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType, useAppDispatch } from "../../store/store"
import { OrderType } from "../Orders/Orders"
import { fetchOrdersTC } from "../../store/reducers/ordersReducer";


export const Groups = () => {
    const orders = useSelector<AppRootStateType, OrderType[]>(store => store.orders)
    const dispatch = useAppDispatch();

    useEffect( () => {
        if(orders.length === 0){
            console.log(orders.length);
            
            const thunk = fetchOrdersTC()
            dispatch(thunk)
        }
    }, [])

    return (
        <div className={s.groups__container}>
            <div className={s.groups__container2}>
                <div className={s.groups__container2__info}>
                        <button className={s.groups__container2__info_button}>+</button>
                        <p className={s.groups__container2__info_paragraph}>Групы / {orders.length}</p>
                </div>
                <div className={s.groups__container2__main}>
                    {
                        orders.length > 0 ? <GroupOrders orders={orders}/> : ""
                    }
                </div>
            </div>
        </div>
    )
}