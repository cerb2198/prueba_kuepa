import { useState, useEffect } from 'react'

import { axiosGET } from '../../request/axiosGET';

import spinner from "../../resources/Spinner.gif";
import CardUsuario from "./CardUsuario/CardUsuario";

import style from "./aside.module.css";

const Aside = () => {
  const [datos, setDatos] = useState();

  useEffect(() => {
    (async function () {
      const respuesta = await axiosGET("https://reqres.in/api/users?page=2");
      setDatos(respuesta.data);
    })()
  }, [])

  return (
    <aside className={style.lateral}>
      {
        datos ?
          datos.map((usuario) => {
            return <CardUsuario key={usuario.id}  nombre={usuario.first_name} correo={usuario.email} url={usuario.avatar}/>
          })
          :
          <img src={spinner} />
      }
    </aside>
  )
}

export default Aside