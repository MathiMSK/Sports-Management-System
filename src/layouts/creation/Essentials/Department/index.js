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
import { createCourse,getallDep,createDepartment,getAllCourse } from 'utility/apiService';


import {HiPencilSquare} from 'react-icons/hi2'
import {MdDeleteSweep} from 'react-icons/md'
import {GiReturnArrow} from 'react-icons/gi'

const Department = (props) => {
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
     const [data2, setData2] = useState([])
     const [dept, setDept] = useState('');
     const [deptId, setDeptId] = useState('');
     const [course, setCourse] = useState('');
     const [selected,setSelected] = useState('')
     const [recover, setRecover] = useState(false);
     const [update, setUpdate] = useState(false);
     const [modal, setModal] = useState(false);
     const [modal2, setModal2] = useState(false);

     const [deptErr, setDeptErr] = useState('');
     const [deptIdErr, setDeptIdErr] = useState('');
     const [courseErr, setCourseErr] = useState('');
     let columns = [
          {
               Header: 'SI No',
               id: 'index',
               accessor: (row, index) => <div style={{ textAlign: 'center' }}>{index + 1}</div>,
          },
          {
               Header: 'Course Name',
               accessor: 'courseName',
          },
          {
               Header: 'Course Code',
               accessor: 'courseCode',
          },
          {
               Header: 'Department',
               accessor: 'deptName',
               disableSortBy: true,
          },
     ];

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }
     useEffect(() => {
          const depData = async () => {
            try {
              let response = await getallDep();
              let arr = [];
              response.data.data?.map((item, index) => {
                if (item.isBlock == false) {
                  arr.push({
                    id: item._id,
                    value: item.deptName,
                    label: item.deptName,
                  });
                }
                setDeptId(arr);
              });
            } catch (error) {
              console.log(error);
            }
          };
          const courseData = async () => {
               try {
                 let response = await getAllCourse();
                 let arr = [];
                 response.data.data?.map((item, index) => {
                   if (item.isBlock == false) {
                     arr.push({
                       ...item,
                       deptName:item.departmentId.deptName                    
                     });
                   }
                   
                 });
                 setData(arr);
               } catch (error) {
                 console.log(error);
               }
             };
             depData();
             courseData();
     },[]);
     const handleSubmit = async () => {
          if (!dept) {
               return setDeptErr('Department is required');
          }
          setDeptErr('');
          try {
               let response = await createDepartment({ deptName: dept });
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
          if (!selected) {
               return setDeptIdErr('Department is required');
          }
          else{

               setDeptIdErr('');
          }
          if (!course) {
               return setCourseErr('Course is required');
          }
          else{

               setCourseErr('');
          }  
          if (course && selected) {
          try {
               let response = await createCourse(selected.id,{ courseName: course });
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
                                                  Dept & Course
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
                                                  Department Creating
                                             </MDTypography>
                                        </MDBox>
                                        <MDBox sx={{ paddingLeft: '55px', padding: '55px' }}>
                                             <CustomInput
                                                  name={'Department Name'}
                                                  placeholder={'Enter Department name'}
                                                  value={dept}
                                                  onChange={(e) => setDept(e.target.value)}
                                                  style={{ width: '300px', marginTop: '5px' }}
                                             />
                                             {deptErr ? <p style={{ color: 'red' }}>{deptErr}</p> : null}
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
                                                            placeholder={'Select Department '}
                                                            isSearchable={true}
                                                            isMulti={false}
                                                            option={deptId}
                                                            selectedOptions={selected}
                                                            setSelectedOptions={setSelected}/> 
                                                             {deptIdErr ? <p style={{ color: 'red' }}>{deptIdErr}</p> : null}
                                                  </MDBox>
                                             </Col>
                                             <Col md={6}>
                                                  {/* <MDBox sx={{paddingLeft:"55px",padding:"55px"}}>  */}
                                                  <CustomInput
                                                       name={'Course Name'}
                                                       placeholder={'Enter Course name'}
                                                       style={{ width: '300px', marginTop: '5px' }}
                                                       value={course}
                                                       onChange={(e) => setCourse(e.target.value)}
                                                  />
                                                   {courseErr ? <p style={{ color: 'red' }}>{courseErr}</p> : null}
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

export default Department;
