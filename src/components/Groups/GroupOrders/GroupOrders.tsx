import React, { useState } from "react";
import s from "./GroupOrders.module.css"
import { OrderType } from "../../Orders/Orders";
import { GroupProducts } from "./GroupProducts/GroupProducts"

type GroupsOrderPropsType = {
    orders: OrderType[]
}

export const GroupOrders:React.FC<GroupsOrderPropsType> = ({orders}) => {

    const [groupdId, setGroupId] = useState<number>(0);

    return (
        <div className={s.orders__container}>
            <div className={s.orders__container2}>
            {
                orders.map(order => {
                    const date = new Date(order.date);
                    const month = date.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + date.toLocaleString('default', { month: 'long' }).substring(1);

                    const setGroupIdHandler = () => {
                        setGroupId(order.id)
                    }

                    return (
                        <div className={s.order} key={order.id}>
                            <div className={s.order__buttons} onClick={setGroupIdHandler}>
                                <img className={s.order__buttons_button_1} src="https://img.icons8.com/ios-filled/50/000000/menu-2.png" alt="" />
                                <img className={s.order__buttons_button_2}src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="" />
                            </div>
                            <div className={s.order__products}>
                                <span className={s.order__products_span1}>
                                    {order.products?.length}
                                </span>
                                <span className={s.order__products_span2}>Продукта</span>
                            </div>
                            <div className={s.order__date}>
                                <span className={s.order__date_span1}>
                                    {order.date.substring(5,7)} / 12
                                </span>
                                <span className={s.order__date_span2}>
                                    {order.date.substring(8,11)} / &nbsp;
                                    {month} / &nbsp;
                                    {order.date.substring(0,4)}
                                </span>
                            </div>
                            <div className={order.id === groupdId ? s.order__transition : s.order__transition2}>
                                &#62;
                            </div>
                        </div>
                    )
                })
            }
            </div>
            {
                groupdId !== -1 ?
                <>
                    <div>
                        <GroupProducts orders={orders[groupdId]}/>
                    </div>
                    <div className={s.orders__container2__close} onClick={() => setGroupId(-1)}>
                            x
                    </div>
                </>
                : ""
            }
        </div>
    )
}