import { Container, Typography } from '@mui/material'
import React from 'react'
import MDInput from 'components/MDInput'

const CustomInput = (props) => {
const {style,id,name,placeholder,type,inputStyle, ...others}= props
  return (
    <Container style={style}>
        <Typography>{name}</Typography>
      <MDInput 
       id={id} placeholder={placeholder} style={inputStyle} 
        {...others}
       />
     </Container> 
     
  )
}

export default CustomInput
