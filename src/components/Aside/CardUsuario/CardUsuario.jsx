import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardUsuario({nombre, correo, url}) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="30%"
        image={url}
        alt="Usuario"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {correo}
        </Typography>
      </CardContent>
    </Card>
  );
}