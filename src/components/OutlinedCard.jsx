import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);


export default function OutlinedCard(props) {
  const handlegenerate=()=>{
    const data={
      firstName:props.firstName,
      lastName:props.lastName,
      email:props.email
    }
    localStorage.setItem('card', JSON.stringify(data));
    console.log(data);
  }
  return (
    <>
    <Box sx={{ width: '50%', margin: '0 auto' , boxShadow:3 , marginY:4, borderRadius: '10px'}}>
      <Card variant="outlined">
      <CardContent>
      <Typography sx={{ fontSize: 24 }} align='center' color="text.primary" gutterBottom>
        {props.firstName==''?"First Name":props.firstName}
      </Typography>
      <Typography sx={{ fontSize: 24 }} color="text.primary" align='center' gutterBottom>
        {props.lastName==''?"Last Name":props.lastName}
      </Typography>
      <Typography color="text.secondary" align='center' gutterBottom>
        <EmailIcon /> {props.email==''?"Sample Email":props.email}
      </Typography>
    </CardContent>
    </Card>
    </Box>
    <CardActions sx={{display: 'flex', justifyContent: 'right'}}>
    <Button variant="contained" onClick={handlegenerate}>Generate Signature</Button>
    </CardActions>
    </>
  );
}