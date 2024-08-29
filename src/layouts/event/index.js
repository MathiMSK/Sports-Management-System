import React, { useEffect, useState } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
// import EnhancedTable from 'components/CustomTable';
import MDButton from 'components/MDButton';
import { toast, Toaster } from 'react-hot-toast';
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
import { getAllSports,getallGender } from 'utility/apiService';
import { createEvent } from 'utility/apiService';
import { getAllEvent } from 'utility/apiService';
const Event = () => {
     let textColor = 'white';
     const navigation = useNavigate();
     const [open, setOpen] = useState(false);
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
     const [event,setEvent] = useState("")
     const [gender,setGender] = useState("")
     const [sports,setSports] = useState("")
     const [selected,setSelected] = useState('')
     const [selected1,setSelected1] = useState('')
     const [genderErr, setGenderErr] = useState('');
     const [eventNameErr, setEventNameErr    ] = useState('');
     const [sportsErr, setSportsErr] = useState('');
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
               Header: 'Event',
               accessor: 'eventName',
          },
          {
               Header: 'Sports Name',
               accessor: 'sportsName',
          },
          {
               Header: 'Date',
               accessor: 'date',
               disableSortBy: true,
          },
      
     ];

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }
     const eventData = async () => {
          try {
            let response = await getAllEvent();
            let arr = [];
            response.data.data?.map((item, index) => {
               console.log(item);
              if (item.isBlock == false) {
                arr.push({
                  ...item ,
                  sportsName:item.sportsId.sportsName,
                  date:item.Date              
                });
              }
              
            });
            setData(arr);
          } catch (error) {
            console.log(error);
          }
        };
        

     const handlegenspo = async () => {
          const Gender = await getallGender();
          const GenderData = Gender.data?.data?.filter((item) => {
            return item.isBlock === false;
          });
      
          setGender(
            GenderData.map((item) => {
              return {
                value: item.genderName || "",
                label: item.genderName || "",
                genderId: item._id || "",
              };
            })
          );
          let sports = await getAllSports();
          const sportsData = sports.data?.data.filter((item) => {
            return item.isBlock === false
           
          });
        
            setSports(
              sportsData?.map((item) => {
                return {
                  value: item.sportsName || "",
                  label: item.sportsName || "",
                  sportsId: item._id || "",
                };
              })
            );
        };
        
          useEffect(() => {
               eventData();
          handlegenspo();
            }, []);
     
     const handleSubmit = async () => {
          if (!selected) {
               return setGenderErr('Gender is required');
          }
          else{
               setGenderErr('');
          }
          if (!selected1) {
               return setSportsErr('Sports is required');
          }
          else{
               setSportsErr('');
          }  
          if (!event) {
               return setEventNameErr('Event Name is required');
          }
          else{
               setEventNameErr('');
          }  
          if (selected && selected1 && event) {
          try {
               let response = await createEvent(selected.genderId,selected1.sportsId,{ eventName: event });
               if (!response.ok) {
                    return toast.error(response.data.message);
               }
               toast.success(response.data.message);
               setOpen(!open);
          } catch (error) {
               console.log(error);
          }
     }};




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
                                             <Row >
                                             <Col md={6}>
                                                  <CustomInput
                                                       name={'Event Name'}
                                                       placeholder={'Enter Event name'}
                                                       style={{ width: '245px', marginTop: '5px' }}
                                                       value={event}
                                                       onChange={(e) => setEvent(e.target.value)}
                                                  />
                                                   {eventNameErr ? <p style={{ color: 'red' }}>{eventNameErr}</p> : null}
                                                 
                                             </Col>
                                                 <Col md={6}>
                                                  <MDBox sx={{ paddingLeft: '20px' }}>
                                                       <CustomSelect
                                                            name={'Gender'}
                                                            placeholder={'Select Gender '}
                                                            isSearchable={true}
                                                            isMulti={false}
                                                            option={gender}
                                                            selectedOptions={selected}
                                                            setSelectedOptions={setSelected}/> 
                                                             {genderErr ? <p style={{ color: 'red' }}>{genderErr}</p> : null}
                                                  </MDBox>
                                             </Col>
                                             <Col md={6}>
                                                  <MDBox sx={{ paddingLeft: '20px' }}>
                                                       <CustomSelect
                                                            name={'Sports'}
                                                            placeholder={'Select Sports '}
                                                            isSearchable={true}
                                                            isMulti={false}
                                                            option={sports}
                                                            selectedOptions={selected1}
                                                            setSelectedOptions={setSelected1}/> 
                                                             {sportsErr ? <p style={{ color: 'red' }}>{sportsErr}</p> : null}
                                                  </MDBox>
                                             </Col>
                                            
                                             </Row>
                                        </Container>
                                   </div>
                                   {/* </MDBox> */}

                                   <MDBox
                                        mt={'60px'}
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
                                             color={sidenavColor}
                                             onClick={handleSubmit}>
                                             Submit
                                        </MDButton>
                                   </MDBox>
                              </MDBox>
                         </>
                    )}
                    <Toaster/>
               </div>
          </DashboardLayout>
     );
};

export default Event
