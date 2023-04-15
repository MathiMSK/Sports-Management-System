import { cilArrowCircleLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaEye } from "react-icons/fa";
import CustomTable from "../../../../custom/Table";
// import { getAllUsers } from "src/utility/apiService";
// import View from '../food/view';
import FoodRequestView from './view'
const GetView=(props)=>{
   const[userId,setUserId]=useState()
    const[data,setData]=useState([])
    const[open1,setOpen1]=useState(false)
    const{open,setOpen}=props
    const toggle=()=>{
        setOpen1(!open1)
    }
    let column=[
        {
            Header: "SI No",
            id: "index",
            accessor: (row, index) => (
              <div style={{ textAlign: "center" }}>{index + 1}</div>
            ),
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
            Header: "View",
            accessor: "view",
          },
    ]
    const getAll = async () => {
        let arr=[]
        let user = await getAllUsers();
     
        user?.data?.data.map((i)=>{
            arr.push({
                ...i,
                view:(
                    <center>
                    <IconContext.Provider value={{ color: "#000", size: "20" }}>
                      <FaEye style={{ cursor: "pointer" }} onClick={()=>{ toggle() 
                      setUserId(i._id) }}  />
                    </IconContext.Provider>
                  </center>
                ),
                })
        });
        setData(arr)
    }
    useEffect(()=>{
        getAll()
    },[])
return(
    <>
      <CContainer fluid>
        {/* <h1>jas</h1> */}
        <CContainer style={{ display: "contents" }}>
          <CIcon
            icon={cilArrowCircleLeft}
            size="xl"
            style={{
              marginTop: "1rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
            onClick={() => setOpen(!open)}
          />
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginLeft: "3.8rem",
              position: "absolute",
              top: "13px",
              paddingRight: "5px",
            }}
          >
            All Request
          </h1>
        </CContainer>
        <CustomTable columns={column} data={data} />
      </CContainer>
      {open1 && (
        <FoodRequestView open1={open1} setOpen1={setOpen1} id={userId} />
      )}
    </>
  );
};
export default GetView;
