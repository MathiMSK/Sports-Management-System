import { Container, Typography } from '@mui/material'
import React from 'react'
import MDInput from "components/MDInput";
import MDBox from 'components/MDBox';


const CustomInput = (props) => {
const {style,id,name,placeholder,inputStyle,variant ,type, ...others}= props
  return (
    <Container >
    <Typography>{name}</Typography> 
    <MDBox mb={2}>
    <MDInput type={type} label={placeholder} variant={variant} fullWidth {...others} style={style} />      
  </MDBox>
  </Container> 
  )
}

export default CustomInput
