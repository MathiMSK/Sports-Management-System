import React, { useState } from 'react'
import Switch from "react-switch";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Label} from 'reactstrap'


const CustomSwitchButton = ({ name,checked,setchecked }) => {
    return (
        // check ? 
        <Box  sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"center",margin:"10px"}}>
            <Label >
                {name}
            </Label>
            <Switch onChange={()=>setchecked(!checked)} checked={checked}  />
        </Box>
        
    )
}
export default CustomSwitchButton