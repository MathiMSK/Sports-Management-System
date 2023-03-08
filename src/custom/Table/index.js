import React from 'react';
import TableContainer from './TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../Card';
import "./table.css";
import { Container } from 'reactstrap';
const CustomTable = (props) => {
  const {data,columns,onClick}=props
  return (
    <CustomCard  style={{maxWidth:"100%",minWidth:"100%",marginTop:'30px',borderColor:'transparent'}} >
      <Container  style={{padding:'5px',maxWidth:"100%"}}>
        <TableContainer
          columns={columns}
          data={data?(data):(()=>{
            console.log("no data");
          })}
          onClick={onClick}
          /> 
        
        
      </Container>
    </CustomCard>
  );
};

export default CustomTable;
