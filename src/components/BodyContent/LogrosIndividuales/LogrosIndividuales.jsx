import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import porcentaje from "../../../resources/porcentaje.png";

export default function LogrosIndividuales() {
    
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', maxWidth: '80%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardContent sx={{ display:"flex", flexDirection:"row", gap:"1rem" }}>
                    <Typography component="div" variant="body1">
                        Leads obtenidos
                        <Typography variant="body2">50/100</Typography>
                    </Typography>
                    <Typography component="div" variant="body1">
                        Cola llamados
                        <Typography variant="body2">50/100</Typography>
                    </Typography>
                    <Typography component="div" variant="body1">
                        Matriculas finalizadas
                        <Typography variant="body2">50/100</Typography>
                    </Typography>
                    <Box>
                        <CardMedia
                            component="img"
                            sx={{ width: "50%" }}
                            image={porcentaje}
                            alt="Porcentaje cumplimiento"
                        />
                    </Box>
                </CardContent>
                <CardContent sx={{ display:"flex", flexDirection:"row", gap:"1rem" }}>
                    <Typography component="div" variant="body1">
                        Leads obtenidos
                        <Typography variant="body2">50/100</Typography>
                    </Typography>
                    <Typography component="div" variant="body1">
                        Cola llamados
                        <Typography variant="body2">50/100</Typography>
                    </Typography>
                    <Typography component="div" variant="body1">
                        Matriculas finalizadas
                        <Typography variant="body2">50/100</Typography>
                    </Typography>
                    <Box>
                        <CardMedia
                            component="img"
                            sx={{ width: "50%" }}
                            image={porcentaje}
                            alt="Porcentaje cumplimiento"
                        />
                    </Box>
                </CardContent>
            </Box>

        </Card>
    );
}