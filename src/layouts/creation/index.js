import React, { useState } from "react";
import { Container, Row, Col, Card, CardFooter } from "reactstrap";
import Department from "../../assets/images/logos/rvs.jpg";
import Sports from "../../assets/images/logos/sports.jpg";
import Map from "../../assets/images/logos/map.jpg";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import "./styles.css";
import OwnerCreation from "./Essentials/index";
import SportsCreation from "./Sports/index";
import RMMapping from "./Mapping/index"
const Creation = () => {
  const [creating, setCreating] = useState(false);
  const [sports, setSports] = useState(false);
  const [map, setMap] = useState(false);
  const onMouseEnter = (e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.transition = "all 0.3s ease-in-out";
  };
  const onMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "all 0.3s ease-in-out";
  };
  
  return (
    <>
     <DashboardLayout>
        <DashboardNavbar />
       <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 190px)",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            padding: "20px",
            paddingRight: "5px",
            wordWrap: "break-word",
          }}
        >
          Creation
        </h1>
        <Container style={{ paddingTop: "10%" }}>
          <Row style={{justifyContent:"space-evenly"}} className={"imgBox"}>
            <Col md={4}>
              <Card
                onClick={() => setCreating(!creating)}
                onMouseOver={(e) => onMouseEnter(e)}
                onMouseLeave={(e) => onMouseLeave(e)}
                className={"cardout"}
             
                
              >
                     <img src={Department} className={"cardImg"} />
               
                <b
                  style={{
                    position: "absolute",
                    marginLeft: "34%",
                    marginTop: "22%",
                    fontSize: 20,
                    padding: 2,
                    color:'black'
                  }}
                  className={"title"}
                >
                 Essentials
                </b>
                {/* <CardFooter style={{height:40,textAlign:"center"}}>
              Food Request
            </CardFooter> */}
              </Card>
            </Col>
            <Col md={4}>
              <Card
                onClick={() => setSports(!sports)}
                onMouseOver={(e) => onMouseEnter(e)}
                onMouseLeave={(e) => onMouseLeave(e)}
                className={"cardout"}
              >
               <img src={Sports} className={"cardImg"}  />
                <b
                  style={{
                    position: "absolute",
                    marginLeft: "40%",
                    marginTop: "22%",
                    fontSize: 20,
                    padding: 2,
                    color:'black'
                  }}
                  className={"title"}
                >
                  Sports
                </b>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                onClick={() => setMap(!map)}
                onMouseOver={(e) => onMouseEnter(e)}
                onMouseLeave={(e) => onMouseLeave(e)}
                className={"cardout"}
              >
                <img src={Map} className={"cardImg"} 
                />
                <b
                  style={{
                    position: "absolute",
                    marginLeft: "38%",
                    marginTop: "22%",
                    fontSize: 20,
                    padding: 2,
                    color:'black'
                  }}
                  className={"title"}
                >
                  Mapping
                </b>
              </Card>
            </Col>
          
          </Row>
        </Container>
      </div>
      {creating && <OwnerCreation open={creating} setOpen={setCreating}   />}
      {sports && <SportsCreation open={sports} setOpen={setSports}  />}
      {map && <RMMapping open={map} setOpen={setMap}  />}
      </DashboardLayout>
    </>
  );
};

export default Creation;
