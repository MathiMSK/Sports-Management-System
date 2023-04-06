
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import SignUpBG from "assets/images/SigUpBG.jpg"
import SignUpBG1 from "assets/images/SigUpBG1.png"
import SignUpSEMS from "assets/images/SignUpSEMS.png"
import { useState,useCallback } from "react";
import { createUser } from "utility/apiService";

// import CustomSelect from "custom/Select";
import Image from 'mui-image'
import { useNavigate } from "react-router-dom";
import Footer from "examples/Footer";
import { toast, Toaster } from "react-hot-toast";
import CustomInput from "custom/Input";
import { Container } from "reactstrap";

function SignUp() {
  let navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState();
  const [password, setPassword] = useState('');
  
  
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
 
   const party={
	    particles: {
	        number: {
	            value: 120,
	            density: {
                enable: true,
                area: 800,
	            }
	        },
	        size: {
	            value: 10,
	            random: true
	        },
          // shape:{
          //     type:"square"
          // },
          color: {
            value: ["#c4b916", "#d5e82a", "#c76dbc","#14deda"],
            random:true
          },
	        move: {
            enable: true,
            speed: 2,
            direction: "random",
            random: false,
            straight: false,
            outModes: "out",
          },
	        line_linked: {
	            enable: false
	        }
	    },
	    interactivity: {
	        events: {
	            onclick: {
	                enable: true,
	                mode: "remove"
	            }
	        },
	        modes: {
	            remove: {
	                particles_nb: 10
	            }
	        }
	    }
	}
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

const handleSubmit = async (e) => {
  if(firstName === ""){
    setFirstNameError("First Name is required");
  }
  if(lastName === ""){
    setLastNameError("Last Name is required");
  }
  if(email === ""){
    setEmailError("Email is required");
  }
  if(mobileNo === ""){
    setMobileNoError("Mobile No is required");
  }
  if(password === ""){
    setPasswordError("Password is required");
  }
  if(firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !== ""){
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNo: mobileNo,
      password: password,
    };
    try {
      const response = await createUser(body);
      console.log(response);
    if (response.ok) {
      toast.success(response.data.message);
      return navigate("/authentication/sign-in");
    } else {
      toast.error(response.data.message);
    }
    } catch (error) {
      console.log(error);
    }
    
  }
}




  return (
    <>
   <div style={{
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
    backgroundImage: `url(${SignUpBG1})`,
    backgroundSize: "cover",
   }}>
    <CoverLayout  >
               <div >
        <Particles options={party} init={particlesInit} />
      </div>
      <Card style={{
        marginTop:'-30px'
      }} >
            <MDBox
          variant="gradient"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
          style={{
            background:'radial-gradient(circle, rgb(163, 0, 28) 0%, rgb(253, 83, 2) 38%, rgb(250, 176, 37) 100%)'
          }}
        >
       <Image src={SignUpSEMS} style={{
          width:'100%',
          height:'100%',
        }}/>
        </MDBox>

        <MDBox  pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="First Name" variant="standard" fullWidth 
                value={firstName}
                onChange={(e) =>
                    setFirstName(e.target.value )
                  }
                />
                  {firstNameError ? (
                    <p
                      style={{
                        paddingLeft: "14px",
                        color: "red",
                        fontSize: "14px",
                      }}
                      color="red"
                    >
                      {firstNameError}
                    </p>
                  ) : null}
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Last Name" variant="standard" fullWidth 
                  value={lastName}
                  onChange={(e) =>
                      setLastName( e.target.value )
                    }
              />
               {lastNameError ? (
                    <p
                      style={{
                        paddingLeft: "14px",
                        color: "red",
                        fontSize: "14px",
                      }}
                      color="red"
                    >
                      {lastNameError}
                    </p>
                  ) : null}
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth
                  value={email}
                  onChange={(e) =>
                      setEmail(e.target.value)
                    }
              />
               {emailError ? (
                    <p
                      style={{
                        paddingLeft: "14px",
                        color: "red",
                        fontSize: "14px",
                      }}
                      color="red"
                    >
                      {emailError}
                    </p>
                  ) : null}
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="Number" label="Mobile Number" variant="standard" fullWidth 
                  value={mobileNo && Math.max(0, mobileNo)}
                  onChange={(e) =>
                      setMobileNo( e.target.value )
                    }
                 
              />
                {mobileNoError ? (
                    <p
                      style={{
                        paddingLeft: "14px",
                        color: "red",
                        fontSize: "14px",
                      }}
                      color="red"
                    >
                      {mobileNoError}
                    </p>
                  ) : null}
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth 
                  value={password}
                  onChange={(e) =>
                      setPassword(e.target.value )
                    }
              />
                {passwordError ? (
                    <p
                      style={{
                        paddingLeft: "14px",
                        color: "red",
                        fontSize: "14px",
                      }}
                      color="red"
                    >
                      {passwordError}
                    </p>
                  ) : null}
                     </MDBox>
          
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" style={{backgroundColor:'#fab025',color:"white"}} fullWidth onClick={handleSubmit}>
                Sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <Toaster/>
    </CoverLayout>
    </div>

    </>
  );
}

export default SignUp;
