import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import LogrosIndividuales from './LogrosIndividuales/LogrosIndividuales';
import ConexionesAgendadas from "./ConexionesAgendadas/ConexionesAgendadas";

import style from "./bodyContent.module.css";

const BodyContent = () => {



    return (
        <>
            <Box className={style.contenido__principal}>
                <LogrosIndividuales></LogrosIndividuales>
            </Box>

            <Box className={style.contenido__principal}>
                <ConexionesAgendadas></ConexionesAgendadas>
            </Box>
        </>
    )
}

export default BodyContent