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
import Allreq from "./allreq";
import jwt_decode from "jwt-decode";
// import { RoleMenuAccessContext } from "src/context/roleMenuAccessContext";

const AssetRequest = (props) => {
  const { open, setOpen } = props;
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const [assetType, setAssetType] = useState("");
  const [reason, setReason] = useState("");
  const [selected, setSelected] = useState();
  const [getAccess, setGetAccess] = useState();
  const [open1, setOpen1] = useState(false);

  const [assetTypeError, setAssetTypeError] = useState("");
  const [reasonError, setReasonError] = useState("");
  const [user, setUser] = useState("");

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

  // let roleMenuAccess = useContext(RoleMenuAccessContext);

  // useEffect(() => {
  //   let fetchData = async () => {
  //     try {
  //       let res = await getAccessForMenu(roleMenuAccess?.roleId);
  //       setGetAccess(res.data.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const aNameData = async () => {
  //   try {
  //     let response = await getAllStoreAssets();
  //     let arr = [];
  //     response?.data?.map((item, index) => {
  //       arr.push({
  //         id: item._id,
  //         value: item.assetsName,
  //         label: item.assetsName,
  //       });
  //       setAssetType(arr);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // let token = JSON.parse(localStorage.getItem("hrmsv2-token"));
  // var decoded = jwt_decode(token);

  // const userData = async () => {
  //   try {
  //     let response = await getAllUsers();
  //     let arr = [];
  //     response.data?.data.map((item) => {
  //       if (item._id == decoded.id) {
  //         arr.push({
  //           id: item._id,
  //           value: item.firstName + " " + item.lastName,
  //           label: item.firstName + " " + item.lastName,
  //         });
  //       }
  //       setUser(arr);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   aNameData();
  //   userData();

  //   const getAssetreq = async () => {
  //     try {
  //       let response = await getUserAssetRequests();
  //       const user = await getUserById(decoded.id);

  //       let arr = [];
  //       response.data.data?.map(async (item, index) => {
  //         arr.push({
  //           ...item,
  //           employeeName:
  //             user.data.data.firstName + " " + user.data.data.lastName,
  //           assetType: item?.storeId?.assetsName,
  //           date: (
  //             <center>{new Date(item.createdAt).toLocaleDateString()}</center>
  //           ),
  //           status: (
  //             <center>
  //               <h6
  //                 style={{
  //                   color:
  //                     item.status == "Pending"
  //                       ? "orange"
  //                       : item.status == "Approved"
  //                       ? "green"
  //                       : "red",
  //                 }}
  //               >
  //                 {item.status}
  //               </h6>
  //             </center>
  //           ),
  //         });
  //       });
  //       setData(arr);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAssetreq();
  // }, [modal1, open1,getAccess]);

  // const handleSubmit = async () => {
  //   if (!selected) {
  //     setAssetTypeError("Asset Type is required!");
  //   } else {
  //     setAssetTypeError("");
  //   }
  //   if (!reason) {
  //     setReasonError("Reason is required!");
  //   } else {
  //     setReasonError("");
  //   }
  //   if (!selected && !reason) {
  //     console.log("error");
  //   } else {
  //     let obj = {
  //       storeId: selected?.id,
  //       appReason: reason,
  //       status: "Pending",
  //       menuId,
  //     };
  //     let response = await createAssetRequest(obj);
  //     try {
  //       if (response.ok) {
  //         toast.success(response.data?.message);
  //         setOpen1(!open1);
  //       } else toast.error(response.data?.message);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 190px)",
          backgroundColor: "white",
          borderRadius: "20px",
          position: "absolute",
          top: "0",
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
                          {/* ):null} */}
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
                    <div>
                      <div
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
                            Create Request
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
                              {" "}
                              <FormGroup>
                                <Label>
                                  User
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

                                <CustomSelect
                                  widthForSelect="100%"
                                  placeholder={"User"}
                                  selectedOptions={user}
                                  isSearchable={true}
                                  isMulti={false}
                                  disabled={true}
                                  star={"*"}
                                  width="300px"
                                />
                              </FormGroup>
                            </Col>
                            <Col
                              md={6}
                              className="cusInpCon"
                              style={{ minWidth: "300px", maxWidth: "300px" }}
                            >
                              {" "}
                              <FormGroup>
                                <Label>
                                  Select the Asset Type
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

                                <CustomSelect
                                  option={assetType}
                                  selectedOptions={selected}
                                  setSelectedOptions={setSelected}
                                  isSearchable={true}
                                  isMulti={false}
                                  placeholder={"Select The Asset Type"}
                                  style={{ marginButtom: "0.5rem" }}
                                />
                              </FormGroup>
                              {assetTypeError ? (
                                <Typography1 style={{ color: "red" }}>
                                  {assetTypeError}
                                </Typography1>
                              ) : null}
                            </Col>

                            <Col
                              md={6}
                              className="cusInpCon"
                              style={{ minWidth: "300px", maxWidth: "300px" }}
                            >
                              <Label>
                                Reason
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
                                placeholder="Enter Reason"
                                // value={des}
                                onChange={(e) => setReason(e.target.value)}
                              />
                              {reasonError ? (
                                <Typography1
                                  style={{ color: "red", marginTop: "15px" }}
                                >
                                  {reasonError}
                                </Typography1>
                              ) : null}
                            </Col>
                          </Row>
                        </CContainer>
                      </div>
                      <Box
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
                    </div>
                  </>
                )}
              </>
            ) : null}
          </>
        ) : (
          <Allreq open={modal1} setOpen={setModal1} />
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

export default AssetRequest;
