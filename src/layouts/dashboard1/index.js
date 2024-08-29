import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import {Flex} from "@chakra-ui/react";
import {Container} from 'reactstrap'
import { 
  getAllEvent,
  // getallAssets,
   getAllUsers, } from '../../../src/utility/apiService'

import CustomTable from '../../../src/custom/Table';
import Typography from 'components/MDTypography'
const Dashboard = () => {
  const [data, setData] = useState([])

  const [profileData, setProfileData] = useState()
  const [profile, setProfile] = useState()
  const [column, setColumn] = useState([
    {
      Header: 'SI No',
      id: 'index',
      accessor: (row,index) => <div style={{textAlign:"center"}}>{index+1}</div> 
    },
    {
      Header: "First Name",
      accessor: "firstName",
      disableSortBy: true,
      filter: "equals",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone No",
      accessor: "mobileNo",
    },
  ])

  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }


  // let navigate=useNavigate()
  // useEffect(() => {
  //   let getToken = localStorage.getItem('sems-token')
  //   let token;
  //   if (getToken) {
  //     token = JSON.parse(getToken)
  //   }
  //   if (!token) {
  //     navigate("/login")
  //   }
  // }, [])

  useEffect(() => {
    let fetch=async()=>{
      try{
      let response = await getAllUsers();
      let arr = [];
      response.data.data?.map((item, index) => {
         console.log(item);
        if (item.isBlock == false) {
          arr.push({
            ...item               
          });
        }
        
      });
      setData(arr);
    } catch (error) {
      console.log(error);
    }
    }
    // let fetch=async()=>{
    //   try{
    //   let response = await getAllEvent();
    //   let arr = [];
    //   response.data.data?.map((item, index) => {
    //      console.log(item);
    //     if (item.isBlock == false) {
    //       arr.push({
    //         ...item ,
    //         sportsName:item.sportsId.sportsName,
    //         date:item.Date              
    //       });
    //     }
        
    //   });
    //   setData(arr);
    // } catch (error) {
    //   console.log(error);
    // }
    // }

 
    fetch()
  } , [] );


  return (
    <>
      <Container flexDirection='column' >
        <Container flexDirection='row' flexWrap="wrap"  pt={{ base: "120px", md: "75px" }}>
        </Container>
        <Typography style={{fontSize:"20px", fontWeight:"bold"}}>Sports List</Typography>
        <Container mt="10px" width={"98%"} mb="20px">
        <CustomTable columns={column} data={data} />
      </Container>
        {/* <Container mt="10px" width={"98%"} mb="20px">
        <CustomTable columns={column1} data={data1} />
      </Container> */}

      </Container>
      
    </>
  )
}

export default Dashboard
