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
import CustomSelect from 'custom/Select';
import { Row, Col } from 'reactstrap';
import CustomTable from 'custom/Table';
import { createSports,getallGender,createGender,getAllSports } from 'utility/apiService';


const Sports = (props) => {
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
     const [gender, setGender] = useState('');
     const [genderId, setGenderId] = useState('');
     const [sports, setSports] = useState('');
     const [selected,setSelected] = useState('')

     const [genderErr, setGenderErr] = useState('');
     const [genderIdErr, setGenderIdErr] = useState('');
     const [sportsErr, setSportsErr] = useState('');
     let columns = [
          {
               Header: 'SI No',
               id: 'index',
               accessor: (row, index) => <div style={{ textAlign: 'center' }}>{index + 1}</div>,
          },
          {
               Header: 'Sports Name',
               accessor: 'sportsName',
          },
          {
               Header: 'Sports Code',
               accessor: 'sportsCode',
          },
          {
               Header: 'Gender',
               accessor: 'genderName',
               disableSortBy: true,
          },
     ];

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }
     useEffect(() => {
          const genData = async () => {
            try {
              let response = await getallGender();
              let arr = [];
              response.data.data?.map((item, index) => {
                if (item.isBlock == false) {
                  arr.push({
                    id: item._id,
                    value: item.genderName,
                    label: item.genderName,
                  });
                }
                setGenderId(arr);
              });
            } catch (error) {
              console.log(error);
            }
          };
          const sportsData = async () => {
               try {
                 let response = await getAllSports();
                 let arr = [];
                 response.data.data?.map((item, index) => {
                   if (item.isBlock == false) {
                     arr.push({
                       ...item,
                       genderName:item.genderId.genderName                    
                     });
                   }
                   
                 });
                 setData(arr);
               } catch (error) {
                 console.log(error);
               }
             };
             genData();
             sportsData();
     },[open1,open2]);
     const handleSubmit = async () => {
          if (!gender) {
               return setGenderErr('Gender is required');
          }
          setGenderErr('');
          try {
               let response = await createGender({ genderName: gender });
               if (!response.ok) {
                    return toast.error(response.data.message);
               }
               toast.success(response.data.message);
               setOpen2(!open2);
          } catch (error) {
               console.log(error);
          }
     };
     const handleSubmit1 = async () => {
          if (!selected) {
               return setGenderIdErr('Gender is required');
          }
          else{

               setGenderIdErr('');
          }
          if (!sports) {
               return setSportsErr('Sports is required');
          }
          else{

               setSportsErr('');
          }  
          if (sports && selected) {
          try {
               let response = await createSports(selected.id,{ sportsName: sports });
               if (!response.ok) {
                    return toast.error(response.data.message);
               }
               toast.success(response.data.message);
               setOpen1(!open1);
          } catch (error) {
               console.log(error);
          }
     }};


     return (
          // <DashboardLayout>
          //     <DashboardNavbar />
          <div style={{ 
               width: "100%",
               minHeight: "calc(100vh - 190px)",
               backgroundColor: "white",
               borderRadius: "20px",
               position: "absolute",
               top: "15%",
               marginRight: "30px",
               maxWidth: "-webkit-fill-available",
               zIndex: "5",
               height: "100%",
          }}>
               
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
                                                  Sports creation
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
                                                  Gender
                                             </MDButton>
                                             <MDButton
                                                  variant='contained'
                                                  aria-label='fingerprint'
                                                  onClick={() => setOpen1(!open1)}
                                                  sx={{ display: 'flex', margin: '15px', fontSize: '18px' }}
                                                  color={sidenavColor}>
                                                  Sports
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
                                                  Gender Creating
                                             </MDTypography>
                                        </MDBox>
                                        <MDBox sx={{ paddingLeft: '55px', padding: '55px' }}>
                                             <CustomInput
                                                  name={'Gender Name'}
                                                  placeholder={'Enter Gender name'}
                                                  value={gender}
                                                  onChange={(e) => setGender(e.target.value)}
                                                  style={{ width: '300px', marginTop: '5px' }}
                                             />
                                             {genderErr ? <p style={{ color: 'red' }}>{genderErr}</p> : null}
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
                                        Sports Creating
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
                                                            placeholder={'Select Gender '}
                                                            isSearchable={true}
                                                            isMulti={false}
                                                            option={genderId}
                                                            selectedOptions={selected}
                                                            setSelectedOptions={setSelected}/> 
                                                             {genderIdErr ? <p style={{ color: 'red' }}>{genderIdErr}</p> : null}
                                                  </MDBox>
                                             </Col>
                                             <Col md={6}>
                                                  {/* <MDBox sx={{paddingLeft:"55px",padding:"55px"}}>  */}
                                                  <CustomInput
                                                       name={'Sports Name'}
                                                       placeholder={'Enter Sports name'}
                                                       style={{ width: '300px', marginTop: '5px' }}
                                                       value={sports}
                                                       onChange={(e) => setSports(e.target.value)}
                                                  />
                                                   {sportsErr ? <p style={{ color: 'red' }}>{sportsErr}</p> : null}
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
          // </DashboardLayout>
     );
};

export default Sports;
