import { ProductType } from "../Products"
import s from "../Products.module.css"

type ProductPropsType = {
    el: ProductType
}

export const Product:React.FC<ProductPropsType> = ({el}) => {

    return (
        <div className={s.container__products__product} key={el.id}>
            <div className={s.product__status}>
                <span></span>
            </div>
            <div className={s.product__image}>
                <img src={el.photo} alt="" />
            </div>
            <div className={s.product__info}>
                <span>{el.title}</span>
                <span>{el.specification}</span>
            </div>
            <div className={s.product__available}>
                <span>Свободен</span>
            </div>
            <div className={s.product__guarantee}>
                <div className={s.product__guarantee__from}>
                    <span>c</span>
                    <p>
                        {el.guarantee.start.substring(8,10)} / &nbsp;
                        {el.guarantee.start.substring(5,7)} / &nbsp; 
                        {el.guarantee.start.substring(0,4)}
                    </p>
                </div>
                <div className={s.product__guarantee__to}>
                    <span>по</span>
                    <p>
                        {el.guarantee.end.substring(8,10)} / &nbsp;
                        {el.guarantee.end.substring(5,7)} / &nbsp; 
                        {el.guarantee.end.substring(0,4)}
                    </p>
                </div>
            </div>
            <div className={s.product__isNew}>
                {el.isNew ? <p>новый</p> : <p>Б/У</p>}
            </div>
            <div className={s.product__price}>
                <div className={s.product__price__up}>
                    {el.price[0].value}
                    <span> {el.price[0].symbol}</span>
                </div>
                <div className={s.product__price__down}>
                    {el.price[1].value}
                    <span> {el.price[1].symbol}</span>
                </div>
            </div>
            <div className={s.product__price__know}>
                -
            </div>
            <div className={s.product__price__know}>
                -
            </div>
            <div className={s.product__price__know}>
                -
            </div>
            <div className={s.product__date}>
                <div className={s.product__price__up}>
                    {el.date.substring(8,10)} / &nbsp;
                    {el.date.substring(5,7)}
                </div>
                <div className={s.product__price__down}>
                    {el.date.substring(8,10)} / &nbsp;
                    {el.date.substring(5,7)} / &nbsp;
                    {el.date.substring(0,4)}
                </div>
            </div>
            <div className={s.product__price__delete}>
                <img src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
            </div>
        </div>
    );
}