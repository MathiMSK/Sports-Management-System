import React, { useState } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
// import EnhancedTable from 'components/CustomTable';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from 'context';
import MDTypography from 'components/MDTypography';
import { Link, useNavigate } from 'react-router-dom';
import MDBox from 'components/MDBox';
import { Icon } from '@mui/material';
import Arrow from '@mui/icons-material/ArrowBackIos';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import CustomInput from 'custom/Input';
import CustomSelect from 'custom/Select';
import { Row, Col } from 'reactstrap';
import { Container } from '@mui/system';
import CustomTable from 'custom/Table';
const Event = () => {
     let textColor = 'white';
     const navigation = useNavigate();
     const [open, setOpen] = useState(false);
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

     let columns = [
          {
               Header: 'SI No',
               id: 'index',
               accessor: (row, index) => <div style={{ textAlign: 'center' }}>{index + 1}</div>,
          },
          {
               Header: 'Sports Name',
               accessor: 'roleName',
          },
          {
               Header: 'Sports Code',
               accessor: 'roleCode',
          },
          {
               Header: 'Gender',
               accessor: 'status',
               disableSortBy: true,
          },
          {
               Header: 'Date',
               accessor: 'date',
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

     return (
          <DashboardLayout>
               <DashboardNavbar />
               <div style={{ minHeight: 'calc(100vh - 190px)', width: '100%', backgroundColor: textColor }}>
                    {open == false ? (
                         <>
                              <MDBox
                                   fullwidth
                                   mt={5}
                                   sx={{ display: 'flex', flexDirection: 'row', margin: '15px', justifyContent: 'space-between' }}>
                                   <MDTypography variant='h4' fontWeight='medium' color='dark' mt={1} sx={{ padding: 2 }}>
                                        Events
                                   </MDTypography>
                                   <MDButton
                                        variant='contained'
                                        aria-label='fingerprint'
                                        onClick={() => setOpen(!open)}
                                        sx={{ display: 'flex', margin: '15px', fontSize: '18px' }}
                                        color={sidenavColor}>
                                        Create
                                   </MDButton>
                              </MDBox>
                              <MDBox sx={{ display: 'flex', justifyContent: 'center' }}>
                                   <MDBox sx={{ width: '95%' }}>
                                        <CustomTable data={data} columns={columns} />
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
                                             Event Creating
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
                                                            <CustomSelect name={'Gender'} 
                                                            placeholder={'select gender'}
                                                            ></CustomSelect>
                                                       </MDBox>
                                                  </Col>
                                                  <Col md={6}>
                                                       {/* <MDBox sx={{paddingLeft:"55px",padding:"55px"}}>  */}
                                                       <CustomInput
                                                            name={'Event Name'}
                                                            type='text'
                                                            style={{ width: '300px', marginTop: '5px' }}
                                                            placeholder={'Enter Event name'}
                                                       />
                                                       {/* </MDBox> */}
                                                  </Col>
                                             </Row>
                                        </Container>
                                   </div>
                                   {/* </MDBox> */}

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
                                             sx={{ display: 'flex', margin: '15px', alignSelf: 'left' }}
                                             color='error'>
                                             Reset
                                        </MDButton>
                                        <MDButton
                                             variant='contained'
                                             aria-label='fingerprint'
                                             sx={{ display: 'flex', margin: '15px', alignSelf: 'left' }}
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

export default Event;
