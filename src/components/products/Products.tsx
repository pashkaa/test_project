import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./Products.module.css"
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType, useAppDispatch } from "../../store/store";
import { Product } from "./product/Product";
import { fetchProducssTC } from "../../store/reducers/productReducer";

export type ProductType = {
    id: number,
    serialNumber: number,
    isNew: number,
    photo: string,
    title: string,
    type: string,
    specification: string,
    guarantee: GuaranteeType,
    price: PriceType[],
    order: number,
    date: string
}

type GuaranteeType = {
    start: string,
    end: string
}

type PriceType = {
    value: number, 
    symbol: string, 
    isDefault: number
}

export const Products = () => {

    const products = useSelector<AppRootStateType, ProductType[]>(store => store.products)
    const dispatch =  useAppDispatch();
    const [type, setType] = useState("Monitors");
    const [specification, setSpecification] = useState("Specification 1");

    useEffect( () => {
        const thunk = fetchProducssTC();
        dispatch(thunk);
    }, [])

    const typeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setType(e.currentTarget.value)
    }

    const specificationHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setSpecification(e.currentTarget.value)
    }

    return (
        <div className={s.container}>
            <div className={s.container2}>
                <div className={s.container__block}>
                    <div className={s.container__block__info}>Продукты / { products.length}</div>
                    <div className={s.container__block__selectors}>
                        <div className={s.container__block__selectors_first}>
                            <label>Тип:</label>
                            <select name="type" value={type} onChange={typeHandler}>
                                <option value="Monitors">Monitors</option>
                                <option value="Monitors 2">Monitors 2</option>
                            </select>
                        </div>
                        <div className={s.container__block__selectors_second}>
                            <label>Спецефикация:</label>
                            <select name="specification" value={specification} onChange={specificationHandler}>
                                <option value="Specification 1">Specification 1</option>
                                <option value="Specification 2">Specification 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={s.container__products}>
                    {
                        products.filter(el => el.type === type && el.specification === specification).map(el => 
                            <Product key={el.id} el={el}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}