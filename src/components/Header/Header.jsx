import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography"
import Fade from '@mui/material/Fade';

import { BsSearch } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import { TiFilter } from "react-icons/ti";

import { getTime, updateTime } from "../../helpers/getTime.js";

import style from "./header.module.css";

const Header = () => {

  const [fecha, setFecha] = useState(() => getTime());

  //MINUTOS EN TIEMPO REAL
  useEffect(() => {

    setInterval(() => {
      setFecha(getTime())
    }, 1000)

  }, [])

  return (
    <Box className={style.contenedor}>
      <Box className={style.contenedor__buscar}>
        <Input
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <BsSearch />
            </InputAdornment>
          }
        />
        <TiFilter className={style.contenedor__buscar__icono}></TiFilter>
      </Box>
      <Chip
        className={style.contenedor__chip}
        icon={<BsChevronCompactDown />}
        label={<Typography variant='body1'>{fecha}</Typography>}
      />
    </Box>
  )
}

export default Header