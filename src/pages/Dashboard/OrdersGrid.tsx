import Grid from '@mui/material/Grid';
import {Typography } from '@mui/material';
import SelectLabels from '../../common /SelectList';
import OrderJourneyElement from '../../common /OrderJourneyElement';
import DetailsCard from '../../common /DetailsCard';

const data= [
  "Order Creation", "Order Preparation", "Order Delivery", 
];


export default function OrdersGrid() {
  return (
    // Main Grid 
    <Grid container>
        {/* Row 1 : Filter Row :  */}
      <Grid container justifyContent={"space-between"}   >
        <Grid item alignSelf={"center"}>
            {/* Content : Text and Filter Checklists */}
            <Typography variant='h5' fontWeight="bold">Order flow</Typography>
            <Typography variant='body2'>Auto refresh in 4 Seconds</Typography>
        </Grid>
        <Grid item>
            {/* Filter List */}
            <SelectLabels/>
        </Grid>
      </Grid>
       {/* Row 2 : Order Journey Row :  */}
      <Grid container>
        {
          data.map((x, index)=>{
           return <Grid item width="29.7vw" flexGrow={1} key={x}>
              <OrderJourneyElement headerName={x} headerIndex={index}/>
          </Grid>
          })
        }
      </Grid>
       {/* Row 3 : Order Details Card :  */}
       <Grid container >
          <Grid item flexGrow={1}>
              <DetailsCard/>
              
          </Grid>
      </Grid>
    </Grid>
  );
}



