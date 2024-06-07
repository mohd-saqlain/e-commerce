import React from 'react'
import { Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material'
import perfumeImg from '../../assets/perfume-2.jpg'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../redux/slices/cartSlice'

const ItemCard = ({data}) => {
    const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 300 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="240"
      image={perfumeImg}
    />
    <CardContent>
      <Typography textAlign='center' gutterBottom variant="h5" component="div">
        {data?.name || ""}
      </Typography>
      <Typography textAlign='center' gutterBottom variant="h6" component="div">
      ₹{data?.price || ""}
      </Typography>
      <Typography textAlign='center' variant="body2" color="text.secondary">
      {data?.description || ""}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium" onClick={()=>dispatch(addCartItem(data))} fullWidth variant='contained'>Add to Cart</Button>
    </CardActions>
  </Card>
  )
}

export default ItemCard
