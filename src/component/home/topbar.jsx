import React, { useState } from 'react'
import { Box,AppBar,Toolbar,Typography,IconButton,Button } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Cart from './cart';
import { useSelector } from 'react-redux';

const Topbar = () => {
    const [openCart,setOpenCart] = useState(false);
    const cartItems = useSelector(state=>state.cartItems);
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          iFragrance
        </Typography>
        <IconButton
         onClick={()=>setOpenCart(true)}
          color="inherit"
          aria-label="menu"
          sx={{position:'relative'}}
        >
        <Typography variant='body1' sx={{position:'absolute',top:0,right:0}}>{cartItems?.length || "0"}</Typography>
          <ShoppingBagOutlinedIcon fontSize='large' />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Cart open={openCart} onClose={()=>setOpenCart(false)}/>
  </Box>
  )
}

export default Topbar
