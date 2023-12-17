import React from "react";
import s from "./GroupProduct.module.css"
import { ProductType } from "../../../../products/Products"

type GroupProductPropsType = {
    products?: ProductType[]
}

export const GroupProduct:React.FC<GroupProductPropsType> = ({products}) => {

    return (
        <div className={s.container}>
            {
                products?.length ?
                products?.map(product => {

                    return (
                        <div className={s.container__product} key={product.id}>
                            <div className={s.container__product__dot}>
                                <div></div>
                            </div>
                            <div className={s.container__product__image}>
                                <img src={product.photo} alt="" />
                            </div>
                            <div className={s.container__product_title}>
                                <span className={s.container__product_title_span1}>
                                    {
                                        product.title
                                    }
                                </span>
                                <span className={s.container__product_title_span2}>
                                    {
                                        product.specification
                                    }
                                </span>
                            </div>
                            <div className={s.container__product_avaible}>
                                <span>Свободен</span>
                            </div>
                            <div className={s.container__product_remove}>
                                <img src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
                            </div>
                        </div>
                    );
                })
                : ""
            }
        </div>
    );
}