import { useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

import { axiosGET } from "../../../request/axiosGET";

import spinner from "../../../resources/Spinner.gif";

import style from "./conexionesAgendadas.module.css";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

    const [datos, setDatos] = useState(null);

    useLayoutEffect(() => {
        (async function () {
            const respuesta = await axiosGET("https://reqres.in/api/users?page=1");
            setDatos(respuesta.data);
        })()
    }, [])

    console.log("Los datos son", datos);

    return (
        <>
            {
                datos ?
                    <TableContainer component={Paper} sx={{ maxWidth: "80%" }}>
                        <Typography variant="h5">Conexiones agendadas para hoy</Typography>
                        <Table aria-label="simple table">
                            <TableBody>
                                {datos.map((persona) => (
                                    <TableRow
                                        key={persona.id}
                                    >
                                        <TableCell component="th" scope="row">
                                            {persona.first_name} {persona.last_name}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography variant="body1"> Llamar </Typography>
                                            <Typography variant="body2"> Descuento temporada </Typography>
                                        </TableCell>
                                        <TableCell align="right"><div className={style.circulo}></div></TableCell>
                                        <TableCell align="right"> <AiFillPhone className={style.icono__llamar}/>  <AiOutlineMessage className={style.icono__mensaje}/> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                        <img src={spinner} />
                    </Box>
            }
        </>
    );
}