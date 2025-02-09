import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Star } from '@mui/icons-material';

function ListingCard() {
  return (
    <div>
      <Card sx={{ display: 'flex', maxWidth: 500 }}>
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image=""
          title="Imagem do apartamento"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h5" component="div">
                Nome apartamento
              </Typography>
              <div className='flex items-center'>
              <Star sx={{ color: 'gold', fontSize: 24 }} />
              <Typography variant="body2" color="text.secondary">
                4.5/5
              </Typography>
              </div>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              descrição do apartamento
            </Typography>
          </CardContent>
          <CardActions sx={{ ml: 'auto' }}>
            <Button size="small" variant='contained' className='bg-green-300 mb-3 mr-3' >DropUp</Button>
          </CardActions>
        </Box>
      </Card>
    </div>
  )
}

export default ListingCard