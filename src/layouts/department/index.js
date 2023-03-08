import React, { useState } from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import EnhancedTable from 'components/CustomTable';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from 'context';
import MDTypography from 'components/MDTypography';
import { Link, useNavigate } from "react-router-dom";
import MDBox from 'components/MDBox';
import { Icon } from '@mui/material';
import Arrow from "@mui/icons-material/ArrowBackIos";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { Input } from '@mui/icons-material';
import CustomInput from 'custom/Input';
const Department = () => {
  let textColor = "white";
  const navigation=useNavigate()
  const [open, setOpen] = useState(false);
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  let color
  if(sidenavColor=="info") color="blue"
  else if(sidenavColor=="error") color="red"
  else if(sidenavColor=="warning") color="orange"
  else if(sidenavColor=="success") color="green"
  else if(sidenavColor=="primary") color="pink"
  else if(sidenavColor=="dark") color="black"
    const students = [
        { id: 1, role: 'Admin',  name: 'Kakashi' },
        { id: 2, role: 'HR', name: 'Shikamaru' },
        { id: 3, role: 'Super Admin', name: 'Sasuke'},
        { id: 4, role: 'Pro Admin', name: 'Naruto'}
    ];
    let row=[]
    students.map(i=>{
        row.push({role:i.role,name:i.name})
    })
    // row.push(students)
    const [datavalue, setDatavalue] = useState([]);
    const [data,setData]=useState({
        columns:[
            
            {
                label: "Role",
                field: "role",
                width: 150,
                attributes: {
                    "aria-controls": "DataTable",
                    "aria-label": "name"
                    }
            },
            {
                label: "Name",
                field: "name",
                width: 150,
            }
        ],
        rows:row
    })

    if (transparentSidenav || (whiteSidenav && !darkMode)) {
      textColor = "dark";
    } else if ( darkMode) {
      textColor = "inherit";
    }

    // let res=getRole()
    // res.then((data) =>{
    //   setDatavalue(data)
    // }
    // )
  return (
    <DashboardLayout>
        <DashboardNavbar />
        <div style={{ minHeight: "calc(100vh - 190px)",width:"100%" ,backgroundColor:textColor}}>
          {open==false ? (
          <>
          <MDBox fullwidth mt={5} sx={{ display:"flex",flexDirection:"row",margin:"15px",justifyContent:"space-between"}}>
            <MDTypography variant="h4" fontWeight="medium" color="dark" mt={1} sx={{padding:2}}>
              Department 
            </MDTypography>
            <MDButton variant="contained" aria-label="fingerprint" onClick={()=>setOpen(!open)} sx={{display:"flex",margin:"15px",fontSize:"18px"}} color={sidenavColor} >
            <Icon>add</Icon>
             &nbsp;Create
            </MDButton>
          </MDBox>
          <MDBox sx={{display:"flex",justifyContent:"center"}} >
          <MDBox sx={{width:"95%"}}>
            {/* <EnhancedTable data={data} /> */}
          </MDBox>
          </MDBox>
          </>
        ):(
          <>
           <MDBox fullwidth>  
            <MDBox fullwidth mt={5} sx={{display:"flex",flexDirection:"row",margin:"15px",alignItems:"baseline"}}>
              <MDBox mt={"18px"} sx={{alignItems:"flex-start",borderRadius:"100%",boxShadow: "0 2px 8px 0 rgb(99 99 99 / 20%)",cursor:"pointer",display:"flex",
              height:"40px",justifyContent:"center",marginRight: "10px",width:"40px"}} onClick={()=>setOpen(false)} >
                  <Arrow style={{marginLeft:"7px",marginTop:"7px"}} fontSize="medium">ArrowBackIosIcon</Arrow>
               </MDBox>
              <MDTypography variant="h4" fontWeight="medium" color="dark" mt={0} sx={{padding:0,display:"flex",alignItems:"center"  } }>
              Department Creating
              </MDTypography>

              </MDBox>  
              <MDBox sx={{paddingLeft:"55px",padding:"55px"}}> 
              <CustomInput name={"Department Name"}  width={"300px"} placeholder={"Enter Department name"} />
            </MDBox>
            
            
            <MDBox mt={"30px"} sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"end",padding:"0"}}>
                  <MDButton type="reset" variant="contained" aria-label="fingerprint" sx={{displat:"flex",margin:"15px",alignSelf:"left"}} color="error" >
                    Reset
                  </MDButton>
                  <MDButton variant="contained" aria-label="fingerprint" sx={{displat:"flex",margin:"15px",alignSelf:"left"}} color={sidenavColor} >
                    Submit
                  </MDButton>
            </MDBox>
            
            
    </MDBox>
    </>
        )}
        
      </div>
    </DashboardLayout>
  )
}

export default Department