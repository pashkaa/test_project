import React from "react";
import s from "./LeftBlock.module.css"
import { NavigationMenu } from "./NavigationMenu/NavigationMenu";

export const LeftBlock = () => {

    return (
        <header className={s.container}>
            <div className={s.LeftBlock__info}>
                <div className={s.LeftBlock__info__up}>
                    <img src="https://www.parisfollowme.com/assets/images/karim-200x194.jpg" alt="" />
                    <div className={s.LeftBlock__info__up__settings}>
                        <img src="https://img.icons8.com/ios-filled/50/000000/settings.png" alt="settings"/>
                    </div>
                </div>
                <div className={s.LeftBlock__info__down}>
                    <NavigationMenu />
                </div>
            </div>
        </header>
    )
}