import { useState } from "react";
import { OrderType } from "../Orders"
import s from "../Orders.module.css"
import { useNavigate } from "react-router-dom";


type OrderPropsType = {
    order: OrderType,
    deleteCallBack: (orderId: number) => void
}

export const Order:React.FC<OrderPropsType> = ({order, ...props}) => {
    const navigate = useNavigate();
    const date = new Date(order.date);
    const month = date.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + date.toLocaleString('default', { month: 'long' }).substring(1);
    const [deleteId, setDeleteId] = useState(0);
    const [readyForDelete, setReadyForDelete] = useState(false);

    const deleteOrder = () => {
        setReadyForDelete(true);
        setDeleteId(deleteId);
    }

    const closeForm = () => {
        setReadyForDelete(false);
    }

    const cinfirmDelete = () => {
        props.deleteCallBack(order.id)
        closeForm();
    }

    const relocate = () => {
        navigate(`/groups`);
    }

    var foo = {
        taxes: [
            { amount: 25, currencyCode: "USD", decimalPlaces: 0, taxCode: "YRI"},
            { amount: 25, currencyCode: "USD", decimalPlaces: 0, taxCode: "YRI"},
            { amount: 10, currencyCode: "USD", decimalPlaces: 0, taxCode: "YRI"}
        ]
    }
    
    const elements = [];
    let usd = 0;
    let uah = 0;
    if(order.products.length > 0) {
        console.log(order.products);
        
        order.products.forEach( (element) => {
            usd += element.price[0].value;
            uah += element.price[1].value;
        })
    }
    

    return (
        <div>
            <div className={s.order__container}>
                <div className={s.order__container__title}>
                    <p>{order.title}</p>
                </div>
                <div className={s.order__container__button} onClick={relocate}>
                    <img className={s.order__container__button_1} src="https://img.icons8.com/ios-filled/50/000000/menu-2.png" alt="" />
                    <img className={s.order__container__button_2}src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="" />
                </div>
                <div className={s.order__container__products}>
                    <span className={s.order__container__products_span1}>
                        {
                            order.products?.length
                        }
                    </span>
                    <span className={s.order__container__products_span2}>Продукта</span>
                </div>
                <div className={s.order__container__date}>
                    <span className={s.order__container__date_span1}>
                        {order.date.substring(5,7)} / 12
                    </span>
                    <span className={s.order__container__date_span2}>
                        {order.date.substring(8,11)} / &nbsp;
                        {month} / &nbsp;
                        {order.date.substring(0,4)}
                    </span>
                </div>
                <div className={s.order__container__price}>
                    <span className={s.order__container__price_span1}>
                        {
                            usd
                        }
                        $
                    </span>
                    <span className={s.order__container__price_span2}>
                        {uah} UAH
                    </span>
                </div>
                <div className={s.order__container__delete} onClick={deleteOrder}>
                    <img src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
                </div>
            </div>
            <div className={readyForDelete ? s.modal + " " + s.open : s.modal}>
                <div className={s.modal__box}>
                    <div className={s.modal__box_btn} onClick={closeForm}>x</div>
                        <form className={s.form}>
                                <div className={s.form__up}>
                                    <div>
                                        <p>Вы уверены что хотите удалить этот приход,</p>
                                    </div>
                                    <div className={s.form__up__product}>
                                        <div className={s.form__up__product__dot}>
                                            <div></div>
                                        </div>
                                        <div className={s.form__up__product__image}>
                                            <img src="https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg" alt="" />
                                        </div>
                                        <div className={s.form__up__product__info}>
                                            <span className={s.form__up__product__info_span1}>
                                                {
                                                    order.title
                                                }
                                            </span>
                                            <span className={s.form__up__product__info_span2}>
                                                {
                                                    order.description
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.form__down}>
                                    <div className={s.form__down__buttons}>
                                        <div className={s.form__down__buttons__cancel} onClick={closeForm}>
                                            <div>ОТМЕНИТЬ</div>
                                        </div>
                                        <div className={s.form__down__buttons__delete} onClick={cinfirmDelete}>
                                            <img src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
                                            <div>УДАЛИТЬ</div>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}