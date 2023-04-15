import React, { useState } from "react";
import { Container, Row, Col, Card, CardFooter } from "reactstrap";
import Department from "../../assets/images/logos/rvs.jpg";
import Sports from "../../assets/images/SigUpBG1.png";
import "./styles.css";
import OwnerCreation from "./Department/index";
import SportsCreation from "./Sports/FoodRequest";
const Creation = () => {
  const [creating, setCreating] = useState(false);
  const [sports, setSports] = useState(false);
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
                <img src={Sports} className={"cardImg"} style={{
                  width: "100%",
                  height: "100%",
                }} />
                <b
                  style={{
                    position: "absolute",
                    marginLeft: "32%",
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
                <img src={Department} className={"cardImg"} 
                style={{
                  width: "100%",
                  height: "50%",
                }}  />
                <b
                  style={{
                    position: "absolute",
                    marginLeft: "32%",
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
            {/* <Col md={4}>
              <Card
                onClick={() => setIt(!it)}
                onMouseOver={(e) => onMouseEnter(e)}
                onMouseLeave={(e) => onMouseLeave(e)}
                className={"cardout"}
              >
                <img src={It} className={"cardImg"}/>
                <b
                  style={{
                    position: "absolute",
                    marginLeft: "36%",
                    marginTop: "22%",
                    fontSize: 20,
                    padding: 2,
                  }}
                  className={"title"}
                >
                  IT Request
                </b>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
      {creating && <OwnerCreation open={creating} setOpen={setCreating}   />}
      {sports && <SportsCreation open={sports} setOpen={setSports}  />}
      {/* {it && <ItRequest open={it} setOpen={setIt} menuId={menuId} />} */}
    </>
  );
};

export default Creation;
