import React, { useState } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
// import EnhancedTable from 'components/CustomTable';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from 'context';
import MDTypography from 'components/MDTypography';
import { Link, useNavigate } from 'react-router-dom';
import MDBox from 'components/MDBox';
import { Container } from '@mui/system';
import { Icon } from '@mui/material';
import Arrow from '@mui/icons-material/ArrowBackIos';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import CustomInput from 'custom/Input';
import CustomSelect from 'custom/Select';
import { Row, Col } from 'reactstrap';
import CustomTable from 'custom/Table';
const Department = () => {
     let textColor = 'white';
     const navigation = useNavigate();
     const [open, setOpen] = useState(false);
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
     const students = [
          { id: 1, role: 'Admin', name: 'Kakashi' },
          { id: 2, role: 'HR', name: 'Shikamaru' },
          { id: 3, role: 'Super Admin', name: 'Sasuke' },
          { id: 4, role: 'Pro Admin', name: 'Naruto' },
     ];
     let row = [];
     students.map((i) => {
          row.push({ role: i.role, name: i.name });
     });
     const [data, setData] = useState([]);

     let columns = [
          {
               Header: 'SI No',
               id: 'index',
               accessor: (row, index) => <div style={{ textAlign: 'center' }}>{index + 1}</div>,
          },
          {
               Header: 'Course Name',
               accessor: 'roleName',
          },
          {
               Header: 'Course Code',
               accessor: 'roleCode',
          },
          {
               Header: 'Department',
               accessor: 'status',
               disableSortBy: true,
          },
          {
               Header: 'Edit',
               accessor: 'edit',
               disableSortBy: true,
          },
          {
               Header: 'Delete',
               accessor: 'delete',
               disableSortBy: true,
          },
     ];

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }

     // let res=getRole()
     // res.then((data) =>{
     //   setDatavalue(data)
     // }
     // )
     return (
          <DashboardLayout>
               <DashboardNavbar />
               <div style={{ minHeight: 'calc(100vh - 190px)', width: '100%', backgroundColor: textColor }}>
                    {!open1 ? (
                         <>
                              {!open ? (
                                   <>
                                        <MDBox
                                             fullwidth
                                             mt={5}
                                             sx={{
                                                  display: 'flex',
                                                  flexDirection: 'row',
                                                  margin: '15px',
                                                  justifyContent: 'space-between',
                                             }}>
                                             <MDTypography variant='h4' fontWeight='medium' color='dark' mt={1} sx={{ padding: 2 }}>
                                                  Department
                                             </MDTypography>

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
                                                       onClick={() => setOpen(!open)}
                                                       sx={{ display: 'flex', margin: '15px', fontSize: '18px' }}
                                                       color={sidenavColor}>
                                                       Dept
                                                  </MDButton>
                                                  <MDButton
                                                       variant='contained'
                                                       aria-label='fingerprint'
                                                       onClick={() => setOpen1(!open1)}
                                                       sx={{ display: 'flex', margin: '15px', fontSize: '18px' }}
                                                       color={sidenavColor}>
                                                       Course
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
                                                  sx={{
                                                       display: 'flex',
                                                       flexDirection: 'row',
                                                       margin: '15px',
                                                       alignItems: 'baseline',
                                                  }}>
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
                                                       onClick={() => setOpen(false)}>
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
                                                       Department Creating
                                                  </MDTypography>
                                             </MDBox>
                                             <MDBox sx={{ paddingLeft: '55px', padding: '55px' }}>
                                                  <CustomInput
                                                       name={'Department Name'}
                                                       placeholder={'Enter Department name'}
                                                       style={{ width: '300px', marginTop: '5px' }}
                                                  />
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
                                                       color='error'>
                                                       Reset
                                                  </MDButton>
                                                  <MDButton
                                                       variant='contained'
                                                       aria-label='fingerprint'
                                                       sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
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
                                             Course Creating
                                        </MDTypography>
                                   </MDBox>
                                   <div
                                        style={{
                                             position: 'relative',
                                             marginTop: '6rem',
                                             width: '50%',
                                             marginRight: '5rem',
                                        }}>
                                        <Container>
                                             <Row
                                                  style={{
                                                       display: 'flex',
                                                       justifyContent: 'space-between',
                                                  }}>
                                                  <Col md={6}>
                                                       <MDBox sx={{ paddingLeft: '55px' }}>
                                                            <CustomSelect
                                                                 name={'Depatment'}
                                                                 placeholder={'Select Department '}></CustomSelect>
                                                       </MDBox>
                                                  </Col>
                                                  <Col md={6}>
                                                       {/* <MDBox sx={{paddingLeft:"55px",padding:"55px"}}>  */}
                                                       <CustomInput
                                                            name={'Course Name'}
                                                            placeholder={'Enter Course name'}
                                                            style={{ width: '300px', marginTop: '5px' }}
                                                       />
                                                       {/* </MDBox> */}
                                                  </Col>
                                             </Row>
                                        </Container>
                                   </div>

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
                                             color='error'>
                                             Reset
                                        </MDButton>
                                        <MDButton
                                             variant='contained'
                                             aria-label='fingerprint'
                                             sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                             color={sidenavColor}>
                                             Submit
                                        </MDButton>
                                   </MDBox>
                              </MDBox>
                         </>
                    )}
               </div>
          </DashboardLayout>
     );
};

export default Department;
