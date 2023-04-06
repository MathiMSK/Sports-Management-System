import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import React, { useState } from 'react';
import { useMaterialUIController } from 'context';
import MDButton from 'components/MDButton';
import CustomInput from '../../custom/Input';
import CustomSelect from '../../custom/Select';
const StudentDetails = () => {
     const [controller] = useMaterialUIController();

     let textColor = 'white';
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }

     
     // Personal Info
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [dob, setDob] = useState('');
     const [email, setEmail] = useState('');
     const [gender, setGender] = useState([
          { value: 'Male', label: 'Male' },
          { value: 'Female', label: 'Female' },
          { value: 'Others', label: 'Others' },
     ]);
     const [selectedgender, setSelectedgender] = useState('');
     const [bloodGroup, setBloodGroup] = useState('');
     const [mobileNo, setMobileNo] = useState();
     const [password, setPassword] = useState('rvs@123');
     const [confirmpassword, setConfirmPassword] = useState('');

     

   
     const [error, setError] = useState({
          firstNameError: '',
          lastNameError: '',
          dobError: '',
          emailError: '',
          genderError: '',
          bloodGroupError: '',
          mobileNoError: ''
     });

     const handleSubmit = async (e) => {
          e.preventDefault();
          // console.log(familyMembers);
          if (!firstName) {
               setError((pre) => ({ ...pre, firstNameError: 'First Name is required' }));
          } else {
               setError((pre) => ({ ...pre, firstNameError: '' }));
          }
          if (!lastName) {
               setError((pre) => ({ ...pre, lastNameError: 'Last Name is required' }));
          } else {
               setError((pre) => ({ ...pre, lastNameError: '' }));
          }
          if (!dob) {
               setError((pre) => ({ ...pre, dobError: 'Date of Birth is required' }));
          } else {
               setError((pre) => ({ ...pre, dobError: '' }));
          }
          if (!email) {
               setError((pre) => ({ ...pre, emailError: 'Email is required' }));
          } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/.test(email)) {
               setError((pre) => ({ ...pre, emailError: 'Email is invalid' }));
          } else {
               setError((pre) => ({ ...pre, emailError: '' }));
          }
          if (!selectedgender) {
               setError((pre) => ({ ...pre, genderError: 'Gender is required' }));
          } else {
               setError((pre) => ({ ...pre, genderError: '' }));
          }
          if (!bloodGroup) {
               setError((pre) => ({ ...pre, bloodGroupError: 'Blood Group is required' }));
          } else {
               setError((pre) => ({ ...pre, bloodGroupError: '' }));
          }
          if (!mobileNo) {
               setError((pre) => ({ ...pre, mobileNoError: 'Mobile No is required' }));
          } else if (!/^\d{10}$/.test(mobileNo)) {
               setError((pre) => ({ ...pre, mobileNoError: 'Mobile No must be 10 characters long' }));
          } else {
               setError((pre) => ({ ...pre, mobileNoError: '' }));
          }        

         

          if (
               !firstName ||
               !lastName ||
               !dob ||
               !email ||
               !/\S+@\S+\.\S+/.test(email) ||
               !selectedgender ||
               !bloodGroup ||
               !mobileNo ||
               !/^\d{10}$/.test(mobileNo) 
          ) {
               console.log('Error');
          } else {
        
             
             
          }
     };
     const handleReset = () => {
          setFirstName('');
          setLastName('');
          setDob('');
          setEmail('');
          setSelectedgender('');
          setBloodGroup('');
          setMobileNo(null);
          setPassword('');
          setConfirmPassword('');
          setError(false);
     };
    
     return (
          <div style={{ paddingLeft: '1%', backgroundColor: textColor }}>
               <MDBox sx={{ paddingLeft: '5%' }}>
                    <MDBox mb={2}>
                         <MDTypography variant='h5' color='secondary'>
                              Personal Info
                         </MDTypography>
                    </MDBox>
                    <hr style={{ width: '100%' }} />
                    <MDBox
                         sx={{
                              width: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                              justifyContent: 'center',
                         }}>
                         <MDBox
                              mt={1}
                              sx={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   flexWrap: 'wrap',
                                   alignItems: 'baseLine',
                                   // justifyContent: 'space-between',
                              }}>
                              <MDBox>
                                   <CustomInput
                                        title='First Name'
                                        type='text'
                                        value={firstName}
                                        setValue={setFirstName}
                                        width='300px'
                                   />
                                   {error.firstNameError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.firstNameError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='Last Name' type='text' value={lastName} setValue={setLastName} width='300px' />
                                   {error.lastNameError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.lastNameError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='Date of Birth' type='date' value={dob} setValue={setDob} width='300px' />
                                   {error.dobError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.dobError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='Email' type='email' value={email} setValue={setEmail} width='300px' />
                                   {error.emailError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.emailError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomSelect
                                        option={gender}
                                        placeholder='Select'
                                        selectedOptions={selectedgender}
                                        name='Gender'
                                        widthForSelect='100%'
                                        setSelectedOptions={setSelectedgender}
                                        isSearchable={true}
                                        isMulti={false}
                                        width='300px'
                                        required={true}
                                   />
                                   {error.genderError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.genderError}</p>
                                   ) : null}
                              </MDBox>
                           
                              <MDBox>
                                   <CustomInput
                                        title='Mobile Number'
                                        type='tel'
                                        value={mobileNo}
                                        setValue={setMobileNo}
                                        width='300px'
                                   />
                                   {error.mobileNoError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.mobileNoError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput
                                        title='Blood Group'
                                        type='text'
                                        value={bloodGroup}
                                        setValue={setBloodGroup}
                                        width='300px'
                                   />
                                   {error.bloodGroupError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.bloodGroupError}</p>
                                   ) : null}
                              </MDBox>
                         </MDBox>
                    </MDBox>
                    
                   
                    <MDBox mt={'30px'} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'end' }}>
                         <MDButton
                              type='reset'
                              variant='contained'
                              aria-label='fingerprint'
                              sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                              color='error'
                              onClick={handleReset}>
                              Reset
                         </MDButton>
                         <MDButton
                              variant='contained'
                              aria-label='fingerprint'
                              sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                              color={sidenavColor}
                              onClick={handleSubmit}>
                              Submit
                         </MDButton>
                    </MDBox>
               </MDBox>

              
          </div>
     );
};

export default StudentDetails;