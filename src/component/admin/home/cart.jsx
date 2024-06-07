import React, { useMemo,useState } from 'react'
import { Drawer,Box,Typography,IconButton,Button, Snackbar, Alert} from '@mui/material'
import CartCard from '../cart-card'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useSelector } from 'react-redux';
import SignUpModal from '../../forms/signup';
import PlaceOrderModal from '../../forms/place-order';

const Cart = ({open,onClose}) => {
    const [signUpOpen,setSignUpOpen] = useState(false);
    const [checkOutOpen,setCheckOutOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const cartItems = useSelector(state=>state.cartItems);
    const totalValue = Array.isArray(cartItems) ? cartItems.reduce((accumulator,currentValue)=>accumulator + currentValue.price * currentValue.quantity ,0) : "0"
    const handlePlaceOrder = () => {
        if(localStorage.getItem('@userAuthToken')){
            setCheckOutOpen(true)
        }else{
            setSignUpOpen(true);
        }
    }

  return (
    <>
      {successMessage && (
        <Snackbar
          open={!!successMessage}
          autoHideDuration={3000}
          onClose={() => setSuccessMessage(null)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={() => setSuccessMessage(null)}
            severity="success"
          >
            {successMessage}
          </Alert>
        </Snackbar>
      )}
    <Drawer
    anchor={'right'}
    open={open}
    onClose={onClose}
  >
    <Box sx={{minWidth:500}} px={4} py={2}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant='body1' sx={{fontSize:26,pb:2}}>Your Cart</Typography>
        <IconButton onClick={onClose}><ClearOutlinedIcon/></IconButton>
        </Box>
    {cartItems.map((item,index)=>(
        <CartCard data={item} key={item?._id} />
    ))}
   
    </Box>
    <Box sx={{position:'absolute',bottom:0,width:'100%',p:4,borderTop:'1px solid aqua'}}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Typography variant='body1' sx={{fontSize:20}}>{totalValue}</Typography>
            <Button variant="contained" size='large' disabled={totalValue == "0" ? true : false} onClick={()=>handlePlaceOrder()}>Place Order</Button>
        </Box>
    </Box>
  </Drawer>
< SignUpModal open={signUpOpen} setSuccessMessage={setSuccessMessage} onClose={()=>setSignUpOpen(false)}/>
< PlaceOrderModal open={checkOutOpen} setSuccessMessage={setSuccessMessage} onClose={()=>setCheckOutOpen(false)}/>
  </>
  )
}

export default Cart
