import React,{ useState} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  InputLabel,
  TextField,
  Grid,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { apiEndpoint } from "../../utils/url";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItem } from "../../redux/slices/cartSlice";

const PlaceOrderModal = ({ open, onClose,setSuccessMessage }) => {
    const cartItems = useSelector(state=>state.cartItems);
    const dispatch = useDispatch();
    const totalValue = cartItems.reduce((accumulator,currentValue)=>accumulator + currentValue.price * currentValue.quantity ,0);
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [formData,setFormData] = useState({
        user:"id",
        products:[
            {
            product:"id",
            quantity:"",
            }
        ],
        totalAmount:"",
        address:"",
    })

    const initialFormData =  {
        address:"",         
        };
      const validationSchema = yup.object().shape({
        address:yup.string().min(10,"Min 10 characters required").required("Field is required"),

      });

    const handleFormSubmit = (values) => {
        setIsSubmitting(true)
        console.log(values)
        const products = cartItems.map((item)=>{
            return{
                product:item._id,
                quantity:item.quantity,
            }
        })
        const data = {
            user:localStorage.getItem("@userId"),
            products,
            totalAmount:totalValue,
            address:values.address,
        }
        console.log(data)
        try{
                    axios.post(`${apiEndpoint}/orders`, {...data}, {
                    }).then((response) => {
                            console.log("response", response);
                            setSuccessMessage("Order Placed Successfully")
                            dispatch(removeAllItem());
                            onClose();
                            setIsSubmitting(false);
                        })
                        .catch((error) => {
                            console.log("error", error);
                            setIsSubmitting(false);
                        });
                      }
                      catch(err){
                        console.log(err)
                      }
    }
    const formik = useFormik({
        initialValues: initialFormData,
        validationSchema:validationSchema,
        onSubmit: handleFormSubmit,
      });
    
      const {
        handleSubmit,
        getFieldProps,
        touched,
        errors,
      } = formik;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle    fontWeight="bold" sx={{  fontSize: "22px" }}>CheckOut</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
       <Grid container spacing={2}>
           
          
               <Grid item md={12}>
                <InputLabel sx={{ color: "#3A3A3A", mb: "3px" }}>Enter Full Address for Delivery</InputLabel>
                <TextField
                  fullWidth
                  {...getFieldProps("address")}
                  error={touched?.address && Boolean(errors?.address)}
                  helperText={touched?.address && errors?.address}
                />
              </Grid>
              <Grid item md={12}>
                <Typography variant="body1" fontSize='26'>Total Amount: {totalValue}</Typography>
              </Grid>
       </Grid>

          <Button type="submit" variant="contained" sx={{float:'right',mt:2}} disabled={isSubmitting} color="primary">{isSubmitting ? <CircularProgress size={26} /> : "Submit"}</Button>
          </form>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceOrderModal;
