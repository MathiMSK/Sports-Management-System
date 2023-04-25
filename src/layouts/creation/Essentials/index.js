import { cilArrowCircleLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer, CFormInput } from "@coreui/react";
import { Button, Box, Typography as Typography1 } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
// import CustomTable from "../../../../custom/Table";
import { toast, Toaster } from "react-hot-toast";
import { Card, Col, Form, FormGroup, Label, Row } from "reactstrap";
// import {
//   createAssetRequest,
//   getAccessForMenu,
//   getAllStoreAssets,
//   getAllUsers,
//   getUserAssetRequests,
//   getUserById,
//   updateAssetRequest,
// } from "src/utility/apiService";
import CustomSelect from "../../../custom/Select";
import Role from "./Role";
import Department from "./Department";
import jwt_decode from "jwt-decode";
// import { RoleMenuAccessContext } from "src/context/roleMenuAccessContext";

const Essentials = (props) => {
  const { open, setOpen } = props;
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [columns, setColumns] = useState([
    {
      Header: "SI No",
      id: "index",
      accessor: (row, index) => (
        <div style={{ textAlign: "center" }}>{index + 1}</div>
      ),
    },
    {
      Header: "Employee Name",
      accessor: "employeeName",
    },
    {
      Header: "Asset Type",
      accessor: "assetType",
    },
    {
      Header: "Reason",
      accessor: "appReason",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Status",
      accessor: "status",
      disableSortBy: true,
    },
  ]);

  const reset = () => {
    setSelected("");
    setReason("");
  };

  const toggle = () => setOpen1(!open1);


  return (
    <>
    
      <div
        style={{
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
        }}
      >
       
        {!modal1 ? (
          <>
            {!modal ? (
              <>
                {!open1 ? (
                  <>
                    <CContainer style={{ display: "contents" }}>
                      <CIcon
                        icon={cilArrowCircleLeft}
                        style={{
                          marginTop: "1rem",
                          marginLeft: "1rem",
                          cursor: "pointer",
                          height: "2rem",
                          width: "2rem",
                        }}
                        onClick={() => setOpen(!open)}
                      />
                      <h1
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          marginLeft: "3.8rem",
                          position: "absolute",
                          top: "13px",
                        }}
                      >
                        Owner Creation
                      </h1>
                      <CContainer style={{ marginTop: "3rem" }}>
                        <Row style={{ justifyContent: "center" }}>
                          <Col md={2} className={"box"} onClick={toggle}>
                            <Card className="box-request">
                              <Label className="in-box">Department</Label>
                            </Card>
                          </Col>
                          {/* {getAccess?.isOwner || getAccess?.update ? ( */}
                          <Col
                            md={2}
                            className={"box"}
                            onClick={() => setModal1(!modal1)}
                          >
                            <Card className="box-request">
                              <Label className="in-box">Role</Label>
                            </Card>
                          </Col>
                      
                         
                          
                        </Row>
                      </CContainer>
                    </CContainer>
                    <CContainer fluid>
                      {/* <Typography
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          display: "flex",
                        }}
                      >
                        Personal Request
                      </Typography> */}
                      {/* <CustomTable columns={columns} data={data} /> */}
                    </CContainer>
                  </>
                ) : (
                  <>
                    {/* <div> */}
                      <Department open={open1} setOpen={setOpen1} />
                      {/* <div
                        style={{
                          flexDirection: "row",
                          position: "relative",
                          display: "flex",
                          borderRadius: "20px",
                          marginLeft: "0.5rem",
                          alignItems: "center",
                        }}
                      >
                        <CContainer style={{ display: "contents" }}>
                          <CIcon
                            icon={cilArrowCircleLeft}
                            style={{
                              marginTop: "1rem",
                              marginLeft: "1rem",
                              cursor: "pointer",
                              height: "2rem",
                              width: "2rem",
                            }}
                            onClick={toggle}
                          />
                          <h1
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "600",
                              marginLeft: "3.8rem",
                              position: "absolute",
                              top: "13px",
                              paddingRight: "0px",
                            }}
                          >
                            Create Department
                          </h1>
                        </CContainer>
                      </div>
                      <div
                        className="cusInpFullCon"
                        style={{
                          position: "relative",
                          marginTop: "3rem",
                          marginRight: "5rem",
                        }}
                      >
                        <CContainer
                          className="cusInpFullWrap"
                          style={{ marginLeft: "3.2rem" }}
                        >
                          <Row>
                          
                            <Col
                              md={6}
                              className="cusInpCon"
                              style={{ minWidth: "300px", maxWidth: "300px" }}
                            >
                              <Label>
                                Department Name
                                <span
                                  style={{
                                    paddingLeft: "5px",
                                    color: "red",
                                    fontSize: "15px",
                                  }}
                                >
                                  *
                                </span>
                              </Label>
                              <CFormInput
                                id="exampleFormControlInput1"
                                placeholder="Enter Department Name"
                                // value={des}
                                onChange={(e) => setDepartment(e.target.value)}
                              />
                              {departmentError ? (
                                <Typography1
                                  style={{ color: "red", marginTop: "15px" }}
                                >
                                  {departmentError}
                                </Typography1>
                              ) : null}
                            </Col>
                          </Row>
                        </CContainer>
                      </div> */}
                      {/* <Box
                        mt={"30px"}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          justifyContent: "end",
                        }}
                      >
                        <Button
                          type="reset"
                          variant="outlined"
                          aria-label="fingerprint"
                          sx={{
                            display: "flex",
                            margin: "12px",
                            alignSelf: "left",
                          }}
                          color="primary"
                          onClick={reset}
                        >
                          Reset
                        </Button>
                        <Button
                          variant="contained"
                          aria-label="fingerprint"
                          sx={{
                            display: "flex",
                            margin: "12px",
                            alignSelf: "left",
                          }}
                          color={"primary"}
                          // onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </Box>
                    </div> */}
                  </>
                )}
              </>
            ) : null}
          </>
        ) : (
          <Role open={modal1} setOpen={setModal1} />
        )}
        
      </div>
      <Toaster />
      {/* {gridModal && (
        <AccessModel
          gridModal={gridModal}
          setGridModal={setGridModal}
          id={id}
          value={dataFromApi}
        />
      )} */}
    </>
  );
};

export default Essentials;