import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


export default function SelectLabels() {

  const slots=[
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",   
  ]

  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];
  
  const ITEM_HEIGHT = 48;

  const [country,setCountry]=React.useState('UAE');

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const [deliveryType,setDeliveryType]=React.useState('E_Food');

  const handleDeliveryType = (event: SelectChangeEvent) => {
    setDeliveryType(event.target.value);
  };

  const [slotList,setSlotList]=React.useState('09:00 - 10:00');
  const handleSlotListValue = (event: SelectChangeEvent) => {
    setSlotList(event.target.value);
  };

  const [dateType,setDateType]=React.useState(new Date()); 
  const handleDateChange = (value: any) => {
     setDateType(new Date(value));
  };


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display={"inline-block"}>
      {/* Country List */}
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="countryListLabel"><Typography variant='body2'>Country</Typography></InputLabel>
        <Select
          
          labelId="countryListLabel"
          id="countryList"
          value={country}
          label="Country"
          onChange={handleCountryChange}
        >
          <MenuItem selected value={"UAE"}><Typography variant='body2'>UAE</Typography></MenuItem>
          <MenuItem value={"Saudi Arabia"}><Typography variant='body2'>KSA</Typography></MenuItem>
          <MenuItem value={"Lebanon"}><Typography variant='body2'>Lebanon</Typography></MenuItem>
          <MenuItem value={"Qatar"}><Typography variant='body2'>Qatar</Typography></MenuItem>
        </Select>
      </FormControl>
      {/* Delivery Type List */}
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="deliveryTypeLabel"><Typography variant='body2'>Delivery Type</Typography></InputLabel>
        <Select
          labelId="deliveryTypeLabel"
          id="deliveryType"
          value={deliveryType}
          label="Delivery Type"
          onChange={handleDeliveryType}
        >
          <MenuItem value={"E_Food"}><Typography variant='body2'>E Food</Typography></MenuItem>
          <MenuItem value={"Express"}><Typography variant='body2'>Express</Typography></MenuItem>
          <MenuItem value={"Marketplace"}><Typography variant='body2'>Marketplace</Typography></MenuItem>
          <MenuItem value={"Non_Food"}><Typography variant='body2'>Non-Food</Typography></MenuItem>
        </Select>
      </FormControl>
      {/* Slot List */}
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="slotsListLabel"><Typography variant='body2'>Slot</Typography></InputLabel>
        <Select
          labelId="slotsListLabel"
          id="slotsList"
          value={slotList}
          label="Slots"
          onChange={handleSlotListValue}
        >
        {
          slots.map((x)=>{
           return <MenuItem value={x}><Typography variant='body2'>{x}</Typography></MenuItem>
          })
        }
        </Select>
      </FormControl>
      {/* Date Controller */}
      <FormControl sx={{ m: 1, minWidth: 160 }} >
       
          <DatePicker 
            label="Date"
            onChange={(newValue)=>{handleDateChange(newValue)}}
            value={dateType}
            renderInput={(params) => <TextField sx={{fontWeight:100}} {...params} />}
            />
        
      </FormControl>
      
      <FormControl>
          <Grid container height={"56px"}>
             <Grid item alignSelf={"flex-end"}>
            <IconButton id="long-button" onClick={handleClick}>
               <MoreVertIcon fontSize='medium' />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              <Typography variant='body2'>{option}</Typography>
            </MenuItem>
          ))}
            </Menu>
            </Grid>
          </Grid>
     </FormControl>
    </Box>
  );
}

