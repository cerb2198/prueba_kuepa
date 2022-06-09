import React from 'react'

import Navbar from '../../components/Navbar/Navbar';
import Content from '../Content/Content';
import Aside from '../../components/Aside/Aside';

import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.contenedor}>
      <Navbar></Navbar>
      <Content></Content>
      <Aside></Aside>
    </div>
  )
}

export default Home