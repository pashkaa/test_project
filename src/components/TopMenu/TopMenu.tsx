import React, { useEffect, useState } from "react";
import * as io from "socket.io-client";
import s from "./TopMenu.module.css"
import axios from "axios";

const socket = io.connect("http://localhost:3001");

export const TopMenu = () => {

    const [date,setDate] = useState(new Date());

    const day = date.toLocaleDateString().substring(0,2)
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year =  date.toLocaleDateString().substring(6,10)

    const time = date.toLocaleTimeString().substring(0,5);

    const [connectedNumber, setConnectedNumber] = useState(0);

    useEffect( () => {
        socket.on("connectedUsersCount", (data) => {
            setConnectedNumber(data);
        });
    }, [socket])

    useEffect( () => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )

        axios.get('http://localhost:3001/getOnline')
            .then( (res) => {
                setConnectedNumber(res.data.connectedUsersCount); 
            })

        return function cleanup() {
            clearInterval(timer)
        }
    }, [])

    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__container__logo}>
                    <img src="https://i.ibb.co/tLgv9mS/logo.jpg" alt="" />
                    INVENTORY
                </div>

                <div className={s.header__container__input}>
                    <input type="text" placeholder="Поиск"/>
                </div>

                <div className={s.header__container__info}>
                    <span>Today</span>
                    <div className={s.header__container__info__data}>
                        <div>
                            <span style={{fontWeight: "600"}}> { day } </span>
                            { month }, { year }
                        </div>
                        <div  className={s.header__container__info__data__time}>
                            <img width="22" height="22" src="https://img.icons8.com/windows/32/000000/clock--v1.png" alt="clock--v1"/>
                            { time }
                        </div>
                    </div>
                </div>
                <div className={s.header__container__online}>
                    <div>Connected : <span>{connectedNumber}</span></div>
                </div>
            </div>
        </header>
    )
}