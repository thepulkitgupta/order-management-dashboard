import {Grid, Typography } from "@mui/material";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import VerticalLine from './VerticalLine';
const allFlowLabels = [
   [
    ["Orders Placed", "Fraud Checked"], 
    ["Order Split", "Payment Capture"]
  ], 
    [
    ["Exported", "Packing Complete"], 
    ["Ready to Dispatch", "Invoice Generated"]
  ], 
 [
    ["Carrier Assigned", "Refund Triggered"], 
    ["Out for Delivery", "Delivered"]
  ], 
]

export default function OrderJourneyElement(props:{headerName:string, headerIndex:number}){
    return (
        <Grid container  p={"15px"} mt={"10px"}  height={"60vh"} alignContent={"flex-start"}  border={"solid 1px black"}>
        {/*Text and Grow Icon  */}
        <Grid container justifyContent={"space-between"}>
           <Grid item>
               <Typography variant="h6">{props.headerName}</Typography>
           </Grid>
           <Grid item>
                <OpenInFullIcon/>
           </Grid>
        </Grid>
        {/* Highlighted Counts : Will Remain Static throughout */}
        <Grid container borderRadius={"8px"} border={"dashed 1px black"} mt={"20px"} p={"10px"} justifyContent={"space-between"} >
           <Grid item >
               <Typography  variant="body2">Orders Placed</Typography>
               <Typography variant="body1">100</Typography>
           </Grid>
           <Grid item>
               <Typography variant="body2">Consignments at Risk</Typography>
               <Typography variant="body1">250</Typography>
           </Grid>
           <Grid item>
               <Typography variant="body2">Impacted POSs</Typography>
               <Typography variant="body1">300</Typography>
           </Grid>
        </Grid>
        {/* Flow Data */}
        <Grid container  mt={"30px"} justifyContent={'space-around'}  height="40vh">
            {
                allFlowLabels[props.headerIndex].map((x)=>{
                   return(
                    <Stack alignItems={"center"} >
                        <Box display={"flex"} alignItems="center" flexDirection="column" >
                            <Typography variant="body2" >{x[0]}</Typography>
                            <Typography variant="body1">100</Typography>
                            <Box>
                                <img  src="mafLogo.png" alt="mafLogo" width={"45px"} />
                            </Box>
                        </Box>
                        <Box>
                            <VerticalLine/>
                        </Box>
                        <Box display={"flex"}  alignItems="center" flexDirection="column" >
                            <Box >
                                <img  src="mafLogo.png" alt="mafLogo" width={"45px"} />
                            </Box>
                            <Typography variant="body2" >{x[0]}</Typography>
                            <Typography variant="body1" >200</Typography>
                        </Box>
                    </Stack>
                   )
                })
            }
        </Grid>
        </Grid>
        
)}



