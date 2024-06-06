import React from 'react'
import { Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material'
import perfumeImg from '../../assets/perfume-2.jpg'

const ItemCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="240"
      image={perfumeImg}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" fullWidth variant='contained'>Add to Cart</Button>
    </CardActions>
  </Card>
  )
}

export default ItemCard
