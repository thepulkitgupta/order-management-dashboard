import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const testDataLabels=[
  [
    "Total Orders at Risk","Consignments at Risk","POS's", "Systems at Risk"
  ],
  [
    "Returns","Return Requests","Completed Returns", "At Risk"
  ],
  [
    "Cancelled","Before Packing ","After Packing", "At Risk"
  ],
  [
    "Refund Requests","Automatic Requests","Manual Vouchers", "At Risk"
  ],
]
const testDataValues=[
  [
    "100","200","300","400"
  ],
  [
    "100","200","300","400"
  ], 
  [
    "100","200","300","400"
  ],
  [
    "100","200","300","400"
  ],
]

export default function DetailsCard() {
  return (
    <Grid container  borderRadius={"8px"} p={"5px"} mt={"10px"} justifyContent="space-between" >
        {testDataLabels.map((x,index)=>{
            return (
              <CardTemplate labelData={x} valueData={testDataValues[index]} key={index}/>
            );
        })}
    </Grid>  
  );
}

function CardTemplate(props:any){
  return (
    <Grid item width="20vw" key={props.key}>
    <Card variant="outlined">
    <CardContent>
     
        {/* Main Header */}
        <Grid container justifyContent={"space-between"} >
           {/* Label Value */}
          <Grid item>
            <Typography noWrap color="text.secondary" variant="h6">{props.labelData[0]}</Typography>
          </Grid>
          {/* Count of the Main Label */}
          <Grid item>
            <Typography color="text.secondary" variant="h6">{props.valueData[0]}</Typography>
          </Grid>
        </Grid>

        {/* Secondary Headers */}
        <Grid container justifyContent={"space-between"}> 
        {
          [1,2,3].map((x)=>{
            return (
              <Grid item>
                <Typography variant={"body2"} color="text.secondary">{props.labelData[x]}</Typography>
             </Grid>
            )
          })
        } 
        </Grid>


        {/* Value counts */}
        <Grid container justifyContent={"space-between"}>
        {
          [1,2,3].map((x)=>{
            return (
              <Grid item>
                <Typography variant={"body1"} color="text.secondary">{props.valueData[x]}</Typography>
             </Grid>
            )
          })
        } 

        </Grid>
        {/* Percentages */}
        <Grid container justifyContent={"space-between"}>
        {
          [1,2,3].map((x)=>{
            return (
              <Grid item>
                <Typography variant={"body2"}  color="text.secondary">-10%</Typography>
             </Grid>
            )
          })
        } 
        </Grid>

    </CardContent>
    
    </Card>
  </Grid> 
  )
}