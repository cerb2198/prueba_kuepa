import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from '../../components/Header/Header';
import BodyContent from '../../components/BodyContent/BodyContent';

import { useUsuario } from '../../context/userContext';

import style from "./content.module.css"

const Content = () => {

  const { user } = useUsuario();


  return (
    <Box className={style.contenido} fixed={true}>
      <Header></Header>
      
      <Box className={style.contenido__principal}>
        <Typography variant="h5">Hola, {user} </Typography>
      </Box>

      <BodyContent></BodyContent>

    </Box>
  )
}

export default Content