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
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { apiEndpoint } from "../../utils/url";

const SignUpModal = ({ open, onClose,setSuccessMessage }) => {

    const [isSubmitting,setIsSubmitting] = useState(false)

    const initialFormData =  {
        name:"",
        phoneNo:"",
        password:"",            
        };
      const validationSchema = yup.object().shape({
        name:yup.string().min(3,"Min 3 characters required").required("Field is required"),
        phoneNo:yup.string().min(10,"Min 10 number required").required("Field is required").max(10,"Max 10 number required"),
        password:yup.string().min(5,"Min 5 characters long").required("Field is required")
      });

    const handleFormSubmit = (values) => {
        setIsSubmitting(true)
        console.log(values)
        try{
                    axios.post(`${apiEndpoint}/users`, {...values}, {
                    }).then((response) => {
                            console.log("response", response);
                            localStorage.setItem('@userAuthToken',response.data?.authtoken)
                            localStorage.setItem('@userId',response.data?.data?._id)
                            setSuccessMessage("Your account has been created now you can place orders.")
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
      <DialogTitle    fontWeight="bold" sx={{  fontSize: "22px" }}>Sign-Up</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
       <Grid container spacing={2}>
           
          
               <Grid item md={12}>
                <InputLabel sx={{ color: "#3A3A3A", mb: "3px" }}>Enter Full Name</InputLabel>
                <TextField
                  fullWidth
                  {...getFieldProps("name")}
                  error={touched?.name && Boolean(errors?.name)}
                  helperText={touched?.name && errors?.name}
                />
              </Grid>
              <Grid item md={12}>
                <InputLabel sx={{ color: "#3A3A3A", mb: "3px" }}>
                  Enter Phone Number
                  <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  {...getFieldProps("phoneNo")}
                  error={touched?.phoneNo && Boolean(errors?.phoneNo)}
                  helperText={touched?.phoneNo && errors?.phoneNo}
                />
              </Grid>
              <Grid item md={12}>
                <InputLabel sx={{ color: "#3A3A3A", mb: "3px" }}>
                  Enter Password
                  <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  {...getFieldProps("password")}
                  error={touched?.password && Boolean(errors?.password)}
                  helperText={touched?.password && errors?.password}
                />
              </Grid>
       </Grid>

          <Button type="submit" variant="contained" sx={{float:'right',mt:2}} disabled={isSubmitting} color="primary">{isSubmitting ? <CircularProgress size={26} /> : "Submit"}</Button>
          </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
