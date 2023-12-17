import React from "react";
import s from "./GroupProducts.module.css"
import { OrderType } from "../../../Orders/Orders";
import { GroupProduct } from "./GroupProduct/GroupProduct";

type GroupProductsPropsType = {
    orders: OrderType
}

export const GroupProducts:React.FC<GroupProductsPropsType> = ({orders}) => {

    return (
        <div className={s.products_container}>
            <div className={s.products_container__title}>
                {
                    orders.title
                }
            </div>
            <div className={s.products_container__add}>
                <button>+</button>
                <span>Добавить продукт</span>
            </div>
            <div className={s.products_container_product}>
                <GroupProduct products={orders.products}/>
            </div>
        </div>
        
    )
}