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
// import Shop from "./Shop";
// import AllRequest from "./FoodView/index";
import "./Styles.scss";

const EmployeeRequest = (props) => {
  const { open, setOpen } = props;
  const [modal, setModal] = useState(false);
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

  // const getTime = () => {
  //   if (currentTime < "11") {
  //     setTokenTime("BreakFast");
  //   } else if (currentTime >= "11") {
  //     setTokenTime("Lunch");
  //     if (currentTime > "3") {
  //       setTokenTime("Eveing");
  //     }
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
        // marginRight: "30px",
        maxWidth: "-webkit-fill-available",
        zIndex: "5", 
      }}
    >
      <CContainer style={{ display: "contents", maxHeight: "100%" }}>
        <div
          className="deptHeader"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CIcon
            icon={cilArrowCircleLeft}
            size="xl"
            style={{
              marginLeft: "1rem",
              cursor: "pointer",
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
            Employee Food request
          </h1>
        </div>

        {/* <FoodTable getAccess={getAccess}  useage={"multi"} /> */}
      </CContainer>

      <Toaster />
    </div>
  );
};

export default EmployeeRequest;
