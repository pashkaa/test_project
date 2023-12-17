import React from 'react';
import s from "./App.module.css"
import { createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider, BrowserRouter, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Data } from './components/Data/Data';
import { TopMenu } from './components/TopMenu/TopMenu';
import { LeftBlock } from './components/LeftBlock/LeftBlock';
import { Products } from './components/products/Products';
import { Orders } from './components/Orders/Orders';
import { Groups } from "./components/Groups/Groups"

function App() {


  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <div className={s.container}>
          <LeftBlock />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/groups' element={<Groups />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;
