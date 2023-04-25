import React, { useState ,useEffect} from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
// import EnhancedTable from 'components/CustomTable';
import MDButton from 'components/MDButton';
import { cilArrowCircleLeft } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useMaterialUIController } from 'context';
import MDTypography from 'components/MDTypography';
import { Link, useNavigate } from 'react-router-dom';
import MDBox from 'components/MDBox';
import { toast, Toaster } from 'react-hot-toast';
import { Container } from '@mui/system';
import { Switch } from "@mui/material";
import Arrow from '@mui/icons-material/ArrowBackIos';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import CustomInput from 'custom/Input';
import { Row, Col } from 'reactstrap';
import CustomTable from 'custom/Table';
import { createMenu,getallRole,createRole } from 'utility/apiService';


import {HiPencilSquare} from 'react-icons/hi2'
import {MdDeleteSweep} from 'react-icons/md'
import {GiReturnArrow} from 'react-icons/gi'

const Role = (props) => {
     const { open, setOpen } = props;
     let textColor = 'white';
     const navigation = useNavigate();
     const [open2, setOpen2] = useState(false);
     const [open1, setOpen1] = useState(false);
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
     let color;
     if (sidenavColor == 'info') color = 'blue';
     else if (sidenavColor == 'error') color = 'red';
     else if (sidenavColor == 'warning') color = 'orange';
     else if (sidenavColor == 'success') color = 'green';
     else if (sidenavColor == 'primary') color = 'pink';
     else if (sidenavColor == 'dark') color = 'black';

     const [data, setData] = useState([]);
     const [role, setRole] = useState('');
     const [menu, setMenu] = useState('');

     const [roleErr, setRoleErr] = useState('');
     const [menuErr, setMenuErr] = useState('');
     let columns = [
          {
               Header: 'SI No',
               id: 'index',
               accessor: (row, index) => <div style={{ textAlign: 'center' }}>{index + 1}</div>,
          },
          {
               Header: 'Role Name',
               accessor: 'roleName',
          },
          {
               Header: 'Role Code',
               accessor: 'roleCode',
          },
    
     ];
     const reset = () => {
        setRole("")
        setMenu("")
        };

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }
     useEffect(() => {
          const menuData = async () => {
               try {
                 let response = await getallRole();
                 let arr = [];
                 response.data.data?.map((item, index) => {
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
             };
          
             menuData();
     },[]);
     const handleSubmit = async () => {
          if (!role) {
               return setRoleErr('Role is required');
          }
          setRoleErr('');
          try {
               let response = await createRole({ roleName: role });
               if (!response.ok) {
                    return toast.error(response.data.message);
               }
               toast.success(response.data.message);
               setOpen(!open);
          } catch (error) {
               console.log(error);
          }
     };
     const handleSubmit1 = async () => {
          if (!menu) {
               return setMenuErr('Menu is required');
          }
          else{

               setMenuErr('');
          }  
          
          try {
               let response = await createMenu({ menuName: menu });
               if (!response.ok) {
                    return toast.error(response.data.message);
               }
               toast.success(response.data.message);
               setOpen(!open);
          } catch (error) {
               console.log(error);
          }
     };


     return (
          // <DashboardLayout>
          //     <DashboardNavbar />
          <div style={{ minHeight: 'calc(100vh - 190px)', width: '100%', backgroundColor: textColor }}>
               
               {!open1 ? (
                    <>
                         {!open2 ? (
                              <>
                                   <MDBox
                                        fullwidth
                                        mt={5}
                                        sx={{ display: 'flex', flexDirection: 'row', margin: '15px', justifyContent: 'space-between' }}>
                                        <MDBox sx={{ display: 'flex', alignItems: 'Baseline' }}>
                                             <MDBox
                                                  mt={'18px'}
                                                  sx={{
                                                       alignItems: 'flex-start',
                                                       borderRadius: '100%',
                                                       boxShadow: '0 2px 8px 0 rgb(99 99 99 / 20%)',
                                                       cursor: 'pointer',
                                                       display: 'flex',
                                                       height: '40px',
                                                       justifyContent: 'center',
                                                       marginRight: '10px',
                                                       width: '40px',
                                                  }}
                                                  onClick={() => setOpen(!open)}>
                                                  <Arrow style={{ marginLeft: '7px', marginTop: '7px' }} fontSize='medium'>
                                                       ArrowBackIosIcon
                                                  </Arrow>
                                             </MDBox>
                                             <MDTypography
                                                  variant='h4'
                                                  fontWeight='medium'
                                                  color='dark'
                                                  mt={0}
                                                  sx={{ padding: 0, display: 'flex', alignItems: 'center' }}>
                                                  Role & Menu
                                             </MDTypography>
                                        </MDBox>

                                        <MDBox
                                             sx={{
                                                  display: 'flex',
                                                  flexDirection: 'row',
                                                  margin: '5px',
                                                  justifyContent: 'space-between',
                                             }}>
                                             <MDButton
                                                  variant='contained'
                                                  aria-label='fingerprint'
                                                  onClick={() => setOpen2(!open2)}
                                                  sx={{ display: 'flex', margin: '15px', fontSize: '18px' }}
                                                  color={sidenavColor}>
                                                  Role
                                             </MDButton>
                                             <MDButton
                                                  variant='contained'
                                                  aria-label='fingerprint'
                                                  onClick={() => setOpen1(!open1)}
                                                  sx={{ display: 'flex', margin: '15px', fontSize: '18px' }}
                                                  color={sidenavColor}>
                                                  Menu  
                                             </MDButton>
                                        </MDBox>
                                   </MDBox>
                                   <MDBox sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <MDBox sx={{ width: '95%' }}>
                                             <CustomTable columns={columns} data={data} />
                                        </MDBox>
                                   </MDBox>
                              </>
                         ) : (
                              <>
                                   <MDBox fullwidth>
                                        <MDBox
                                             fullwidth
                                             mt={5}
                                             sx={{ display: 'flex', flexDirection: 'row', margin: '15px', alignItems: 'baseline' }}>
                                             <MDBox
                                                  mt={'18px'}
                                                  sx={{
                                                       alignItems: 'flex-start',
                                                       borderRadius: '100%',
                                                       boxShadow: '0 2px 8px 0 rgb(99 99 99 / 20%)',
                                                       cursor: 'pointer',
                                                       display: 'flex',
                                                       height: '40px',
                                                       justifyContent: 'center',
                                                       marginRight: '10px',
                                                       width: '40px',
                                                  }}
                                                  onClick={() => setOpen2(false)}>
                                                  <Arrow style={{ marginLeft: '7px', marginTop: '7px' }} fontSize='medium'>
                                                       ArrowBackIosIcon
                                                  </Arrow>
                                             </MDBox>
                                             <MDTypography
                                                  variant='h4'
                                                  fontWeight='medium'
                                                  color='dark'
                                                  mt={0}
                                                  sx={{ padding: 0, display: 'flex', alignItems: 'center' }}>
                                                  Role Creating
                                             </MDTypography>
                                        </MDBox>
                                        <MDBox sx={{ paddingLeft: '55px', padding: '55px' }}>
                                             <CustomInput
                                                  name={'Role Name'}
                                                  placeholder={'Enter Role name'}
                                                  value={role}
                                                  onChange={(e) => setRole(e.target.value)}
                                                  style={{ width: '300px', marginTop: '5px' }}
                                             />
                                             {roleErr ? <p style={{ color: 'red' }}>{roleErr}</p> : null}
                                        </MDBox>

                                        <MDBox
                                             mt={'30px'}
                                             sx={{
                                                  display: 'flex',
                                                  flexDirection: 'row',
                                                  flexWrap: 'wrap',
                                                  justifyContent: 'end',
                                                  padding: '0',
                                             }}>
                                             <MDButton
                                                  type='reset'
                                                  variant='contained'
                                                  aria-label='fingerprint'
                                                  sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                                  color='error'
                                                  onClick={reset}
                                                  >
                                                  Reset
                                             </MDButton>
                                             <MDButton
                                                  variant='contained'
                                                  aria-label='fingerprint'
                                                  sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                                  onClick={handleSubmit}
                                                  color={sidenavColor}>
                                                  Submit
                                             </MDButton>
                                        </MDBox>
                                   </MDBox>
                              </>
                         )}
                    </>
               ) : (
                    <>
                         <MDBox fullwidth>
                              <MDBox
                                   fullwidth
                                   mt={5}
                                   sx={{ display: 'flex', flexDirection: 'row', margin: '15px', alignItems: 'baseline' }}>
                                   <MDBox
                                        mt={'18px'}
                                        sx={{
                                             alignItems: 'flex-start',
                                             borderRadius: '100%',
                                             boxShadow: '0 2px 8px 0 rgb(99 99 99 / 20%)',
                                             cursor: 'pointer',
                                             display: 'flex',
                                             height: '40px',
                                             justifyContent: 'center',
                                             marginRight: '10px',
                                             width: '40px',
                                        }}
                                        onClick={() => setOpen1(false)}>
                                        <Arrow style={{ marginLeft: '7px', marginTop: '7px' }} fontSize='medium'>
                                             ArrowBackIosIcon
                                        </Arrow>
                                   </MDBox>
                                   <MDTypography
                                        variant='h4'
                                        fontWeight='medium'
                                        color='dark'
                                        mt={0}
                                        sx={{ padding: 0, display: 'flex', alignItems: 'center' }}>
                                        Menu Creating
                                   </MDTypography>
                              </MDBox>
                             
                              <MDBox sx={{ paddingLeft: '55px', padding: '55px' }}>
                                             <CustomInput
                                                  name={'Menu Name'}
                                                  placeholder={'Enter Menu name'}
                                                  value={menu}
                                                  onChange={(e) => setMenu(e.target.value)}
                                                  style={{ width: '300px', marginTop: '5px' }}
                                             />
                                             {menuErr ? <p style={{ color: 'red' }}>{menuErr}</p> : null}
                                        </MDBox>

                              <MDBox
                                   mt={'30px'}
                                   sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        justifyContent: 'end',
                                        padding: '0',
                                   }}>
                                   <MDButton
                                        type='reset'
                                        variant='contained'
                                        aria-label='fingerprint'
                                        sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                        color='error'
                                        onClick={reset}
                                        >
                                        Reset
                                   </MDButton>
                                   <MDButton
                                        variant='contained'
                                        aria-label='fingerprint'
                                        sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                        onClick={handleSubmit1}
                                        color={sidenavColor}>
                                        Submit
                                   </MDButton>
                              </MDBox>
                         </MDBox>
                    </>
               )}
               <Toaster />
          </div>
     );
};

export default Role;
