import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box,Typography } from '@mui/material';
import { apiEndpoint } from '../../utils/url';
import axios from 'axios';

const OrderTable = () => {
    const [orderData,setOrderData] = React.useState([]);
    React.useEffect(() => {
        const getOrderData = async () => {
          try {
            const response = await axios.get(`${apiEndpoint}/orders`);
            if(response.data?.status){
                setOrderData(response.data?.data)
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        getOrderData();
      }, []);
  return (
    <div>
      <Typography variant='h4' textAlign='center'>Total Orders</Typography>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {[
                {heading:"Order ID",align:"left"},
                {heading:"Total Product",align:"right"},
                {heading:"Customer Name",align:"right"},
                {heading:"Customer Phone no.",align:"right"},
                {heading:"Delievery Address",align:"left"},
                {heading:"Amount",align:"right"},
            ].map(({heading,align})=>(
            <TableCell align={align}>{heading}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {orderData.map((row) => (
            <TableRow
              key={row?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{textTransform:'uppercase'}} component="th" scope="row">
                {row._id.slice(-7)}
              </TableCell>
              <TableCell align="right">{row?.products?.length}</TableCell>
              <TableCell align="right">{row?.user?.name}</TableCell>
              <TableCell align="right">{row?.user?.phoneNo}</TableCell>
              <TableCell align="left">{row?.address}</TableCell>
              <TableCell align="right">{row?.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default OrderTable
