import React from 'react'
import { Drawer } from '@mui/material'

const Cart = ({open,onClose}) => {

  return (
    <Drawer
    
    anchor={'right'}
    open={open}
    onClose={onClose}
  >
    Saqlain
  </Drawer>
  )
}

export default Cart
