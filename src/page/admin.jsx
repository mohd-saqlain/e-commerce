import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box,Typography,InputLabel,TextField } from '@mui/material';
import { apiEndpoint } from '../utils/url';
import axios from 'axios';
import OrderTable from '../component/admin/order-table';
import AdminLogin from '../component/forms/admin-login';

const Admin = () => {
  const isAdminLogin = sessionStorage.getItem("@adminLogin")
  if(!isAdminLogin){
    return(
        <Box p={4}>
         <AdminLogin/>
        </Box>
    )
  }else{
    return(
        <Box p={4}>
<OrderTable/>
</Box>
    )
  }
}

export default Admin
