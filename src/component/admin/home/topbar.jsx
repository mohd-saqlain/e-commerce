import React, { useState } from 'react'
import { Box,AppBar,Toolbar,Typography,IconButton } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Cart from './cart';

const Topbar = () => {
    const [openCart,setOpenCart] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          iFragrance
        </Typography>
        <IconButton
         onClick={()=>setOpenCart(true)}
          color="inherit"
          aria-label="menu"
        >
          <ShoppingBagOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Cart open={openCart} onClose={()=>setOpenCart(false)}/>
  </Box>
  )
}

export default Topbar
