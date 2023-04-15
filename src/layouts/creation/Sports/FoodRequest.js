import { cilArrowCircleLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer } from "@coreui/react";
import { Button } from "@material-ui/core";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Row, Col, Input, FormGroup, Label, Card } from "reactstrap";
import CustomSelect from "../../../custom/Select";
// import {
//   createFoodRequest,
//   getAccessForMenu,
//   getAllFoodCategory,
//   getAllFoodshop,
// } from "src/utility/apiService";
import FoodTable from "./food";
import Shop from "./Shop";
// import AllRequest from "./FoodView/index";
import "./Styles.scss";
import EmployeeRequest from "./EmployeeRequest";

const FoodRequest = (props) => {
  const { open, setOpen } = props;
  const [modal, setModal] = useState(false);
  const [empRequest, setEmpRequest] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [shop, setShop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedShopName, setSelectedShopName] = useState("");
  const [time, setTime] = React.useState(new Date());
  const [getAccess, setGetAccess] = useState();
  const [tokenTime, setTokenTime] = React.useState("");
  const toggleShow = () => {
    setModal1(!modal1);
  };

  const [localTime, setLocalTime] = React.useState("");
  let today = new Date();
  let currentTime = today.getHours();
  const toggle = () => {
    setOpen(!open);
  };
  const [meal, setMeal] = useState([]);

  const [shopName, setShopName] = useState([]);

  // const getCategory = async () => {
  //   let response = await getAllFoodCategory();
  //   try {
  //     if (response.ok) {
  //       setMeal(
  //         response.data?.data?.map((i, index) => {
  //           return {
  //             label: i.foodcategory,
  //             value: i.foodcategory,
  //             id: i._id,
  //           };
  //         })
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getShop = async () => {
  //   let response = await getAllFoodshop();
  //   let typeOfHotel = [];
  //   response.data?.data?.filter((i) => {
  //     if (selectedCategory?.value === i.categoryId?.foodcategory) {
  //       typeOfHotel.push({ label: i.shopName, value: i.shopName, id: i._id });
  //     }
  //   });
  //   return setShopName(typeOfHotel);
  // };

  // const getTime=()=>{
  //   if(currentTime < "11"){
  //     setTokenTime("BreakFast")
  //   }
  //   else if(currentTime>"11"){
  //     setTokenTime("Lunch")
  //   }
  //   if(currentTime>"14"){
  //     setTokenTime("Eveing")
  //   }
  // };

  // let roleMenuAccess = useContext(RoleMenuAccessContext);

  // useEffect(() => {
  //   let fetchData = async () => {
  //     try {
  //       let res = await getAccessForMenu(roleMenuAccess?.roleId, menuId);
  //       setGetAccess(res.data.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [menuId]);

  // const handelSubmit = async () => {
  //   let obj = {
  //     categoryId: selectedCategory?.id,
  //     shopId: selectedShopName?.id,
  //     mealType: tokenTime,
  //     status: "Pending",
  //   };
  //   let response = await createFoodRequest(obj);
  //   try {
  //     if (response.ok) {
  //       toast.success(response.data?.message);
  //       setModal(!modal);
  //     } else toast.error("Sorry " + "" + response.data?.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getShop();
  //   getCategory();
  //   setInterval(() => {
  //     setTime(new Date());
  //     setLocalTime(
  //       time.toLocaleString("en-US", { timeStyle: "medium", hour12: true })
  //     );
  //   }, 1000);
  //   getTime();
  // }, [selectedCategory, shop, currentTime, getAccess]);
  return (
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
        height: "100%",
      }}
      className={"mainbox"}
    >
      {/* {!modal1 ? (
        <> */}
          {" "}
          {!shop ? (
            <>
              {!modal ? (
                <CContainer style={{ display: "contents", maxHeight: "100%" }}>
                  <div
                    className="deptHeader"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <CIcon
                        icon={cilArrowCircleLeft}
                        style={{
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
                          fontWeight: "500",
                          padding: "20px",
                          paddingRight: "5px",
                          wordWrap: "break-word",
                        }}
                      >
                        Food request
                      </h1>
                    </div>

                    <Button
                      className="createBtn"
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        // right: "10px",
                      }}
                      // onClick={toggle}
                      onClick={() => setModal(!modal)}
                      color="primary"
                      variant="contained"
                    >
                      Request
                    </Button>
                  </div>

                  <CContainer style={{ marginTop: "3rem" }} className={"abc"}>
                    <Row
                      style={{ justifyContent: "center" }}
                      className={"outbox"}
                    >
                      {getAccess?.isOwner || getAccess?.update ? (
                        <Col md={2} className={"box"}>
                          <Card
                            className="box-request"
                            onClick={() => setEmpRequest(!empRequest)}
                          >
                            <Label className="in-box">User Request</Label>
                          </Card>
                        </Col>
                      ) : null}
                      {getAccess?.isOwner || getAccess?.update ? (
                        <Col md={2} className={"box"}>
                          <Card className="box-request" onClick={toggleShow}>
                            <Label className="in-box">All Request</Label>
                          </Card>
                        </Col>
                      ) : null}
                      {getAccess?.isOwner || getAccess?.update ? (
                        <Col md={2} className={"box"}>
                          <Card
                            className="box-request"
                            onClick={() => setShop(!shop)}
                          >
                            <Label className="in-box">Create Shop</Label>
                          </Card>
                        </Col>
                      ) : null}
                    </Row>
                  </CContainer>
                  {/* <FoodTable getAccess={getAccess} useage={"single"} openRefresh={empRequest} /> */}
                </CContainer>
              ) : (
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
                    onClick={() => setModal(!modal)}
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
                    Create Request
                  </h1>
                  <Container style={{ position: "absolute", top: "165px" }}>
                    <Row className="request">
                      <Col>
                        <Label>Meal Category</Label>
                        <CustomSelect
                          widthForSelect="100%"
                          placeholder={"Select Meal Category"}
                          option={meal}
                          selectedOptions={selectedCategory}
                          setSelectedOptions={setSelectedCategory}
                          isSearchable={true}
                          isMulti={false}
                          star={"*"}
                          required={true}
                        />
                      </Col>
                      <Col>
                        <Label>Shop Name</Label>
                        <CustomSelect
                          widthForSelect="100%"
                          placeholder={"Select Shope Name"}
                          option={shopName}
                          selectedOptions={selectedShopName}
                          setSelectedOptions={setSelectedShopName}
                          isSearchable={true}
                          isMulti={false}
                          star={"*"}
                          required={true}
                        />
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label>Token Type</Label>
                          <Input
                            style={{ marginTop: "12px" }}
                            disabled
                            value={tokenTime}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      variant="contained"
                      style={{
                        marginRight: "2rem",
                        float: "right",
                        marginTop: "10rem",
                      }}
                      // onClick={handelSubmit}
                      color={"primary"}
                    >
                      Submit
                    </Button>
                  </Container>
                </CContainer>
              )}
            </>
          ) : (
            <Shop open={shop} setOpen={setShop} />
          )}
        {/* </>
      ) : (
        <AllRequest open={modal1} setOpen={setModal1} />
      )} */}
      {empRequest ? (
        <EmployeeRequest open={empRequest} setOpen={setEmpRequest} />
      ) : null}
      <Toaster />
    </div>
  );
};

export default FoodRequest;
