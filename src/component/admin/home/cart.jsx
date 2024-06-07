import React from 'react'
import { Drawer,Typography } from '@mui/material'

const Cart = ({open,onClose}) => {

  return (
    <Drawer
    
    anchor={'right'}
    open={open}
    onClose={onClose}
  >
    <Typography>Under Construction</Typography>
  </Drawer>
  )
}

export default Cart
