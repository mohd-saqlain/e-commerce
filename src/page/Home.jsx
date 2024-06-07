import React,{useState,useEffect} from 'react'
import Topbar from '../component/admin/home/topbar'
import Card from '../component/admin/card'
import ItemCard from '../component/admin/card'
import { Grid,Box, CircularProgress } from '@mui/material'
import { apiEndpoint } from '../utils/url'

const Home = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiEndpoint}/products`);
        if (!response.ok) {
          throw new Error('Network Error');
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Topbar/>
      <Box p={4}>
        {loading ? <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}> <CircularProgress /></Box>:
      <Grid container rowSpacing={6}>
        {data.map((item,index)=>(
            <Grid item md={3} xs={12} key={item?._id}>
        <ItemCard data={item} />
        </Grid>
        ))}
      </Grid>}
      </Box>
    </div>
  )
}

export default Home
