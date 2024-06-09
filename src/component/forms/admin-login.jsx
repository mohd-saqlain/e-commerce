import React,{useState,useMemo} from 'react'
import { Box,Card,CardHeader,CardContent,InputLabel,TextField,Button,IconButton, CircularProgress,Snackbar,Alert } from '@mui/material'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { apiEndpoint } from '../../utils/url';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [successMessage,setSuccessMessage] = useState(false);
    const [errorMessage,setErrorMessage] = useState(false);
    const [formData,setFormData] = useState({userId:"",password:""})

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${apiEndpoint}/admin-login`,formData)
              if(response.data?.status){
                sessionStorage.setItem("@authToken",response.data?.authToken);
                setSuccessMessage("Login Successfully")
                navigate('/admin/orders',{replace:true});
              }else{
                setErrorMessage(response.data?.message);
              }

        }
        catch(err){
          console.log(err)
          setErrorMessage("Wrong Credentials");
        }
}

  return (
   <Box display='flex' alignItems='center' justifyContent='center' height='100%'>
      {successMessage && (
        <Snackbar
          open={!!successMessage}
          autoHideDuration={3000}
          onClose={()=>setSuccessMessage(null)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={()=>setSuccessMessage(null)}
            severity="success"
          >
            {successMessage}
          </Alert>
        </Snackbar>
      )}
      {errorMessage && (
        <Snackbar
          open={!!errorMessage}
          autoHideDuration={3000}
          onClose={()=>setErrorMessage(null)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={()=>setErrorMessage(null)}
            severity="error"
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
    <Card variant='outlined' >
        <CardHeader title="Admin Login" />
        <CardContent sx={{width:500,pr:2,pb:3}}>
          <form onSubmit={handleSubmit}>
      <Box mb={2}>
      <InputLabel sx={{ color: "#3A3A3A", mb: "3px" }}>
                User Id<span style={{ color: "red" }}>*</span>
              </InputLabel>
                <TextField
                  fullWidth
                  size="small"
                  name="userId"
                  required
                  value={formData.userId}
                  onChange={(e)=>setFormData({...formData,userId:e.target.value})}
                />
      </Box>
      <Box mb={2}>
      <InputLabel sx={{ color: "#3A3A3A", mb: "3px" }}>
                Password<span style={{ color: "red" }}>*</span>
              </InputLabel>
                <TextField
                  fullWidth
                  type='password'
                  size="small"
                  name="password"
                  required
                  value={formData.password}
                  onChange={(e)=>setFormData({...formData,password:e.target.value})}
                />
      </Box>
      <Box textAlign='right'>
        <Button variant="contained" type='submit'>Login</Button>
      </Box>
      </form>
      </CardContent>
    </Card>
   </Box>
  )
}

export default AdminLogin
