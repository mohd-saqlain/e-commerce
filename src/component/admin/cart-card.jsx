import React from 'react'
import { Card,Box,CardContent,Typography,IconButton,CardMedia, } from '@mui/material'
import perfumeImg from '../../assets/perfume-2.jpg'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../redux/slices/cartSlice';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const CartCard = ({data}) => {
    const dispatch = useDispatch()
  return (
    <Card sx={{ display: 'flex' ,my:2,position:'relative'}}>
      <IconButton onClick={()=>dispatch(removeCartItem(data?._id))} sx={{position:'absolute',top:-5,right:-5}}>
<ClearOutlinedIcon/>
        </IconButton>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={perfumeImg}
      alt="Live from space album cover"
    />
     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
     
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          
          {data?.name || ""}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
        {data?.description || ""}
        </Typography>
        <Typography variant="body1">
        ₹{data?.price || "0"}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-evenly', pl: 1, pb: 1 }}>
        <IconButton>
            <RemoveOutlinedIcon/>
        </IconButton>
        <Typography variant='body1'>
        {data?.quantity || 0}
        </Typography>
        <IconButton>
       <AddOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  </Card>
  )
}

export default CartCard
