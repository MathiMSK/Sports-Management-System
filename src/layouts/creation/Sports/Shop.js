import { cilArrowCircleLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer } from "@coreui/react";
import { Row, Col, Input, Label, FormGroup } from "reactstrap";
import React from "react";
import CustomSelect from "../../../custom/Select";
import "./Styles.scss";
import { Button } from "@material-ui/core";
import { toast, Toaster } from "react-hot-toast";
// import { createFoodShop, getAllFoodCategory } from "src/utility/apiService";
import CustomSwitchButton from "../../../custom/CustomSwitchButton";
const Shop = (props) => {
  const { open, setOpen } = props;
  const [category, setCategory] = React.useState([]);
  const [shopName, setShopName] = React.useState("");
  const [morning, setMorning] = React.useState(false);
  const [afternoon, setAfternoon] = React.useState(false);
  const [evening, setEvening] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const toggle = () => {
    setOpen(!open);
  };
  // let obj = {
  //   shopName: shopName,
  //   morning: morning,
  //   lunch: afternoon,
  //   evening: evening,
  // };
  // const getCategory = async () => {
  //   let response = await getAllFoodCategory();
  //   try {
  //     if (response.ok) {
  //       setCategory(
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

  // const handelSubmit=async()=>{
  //   let id=selectedCategory?.id
  //   let response = await createFoodShop(id,obj)
  //   try {
  //     if(response.ok){
  //       toast.success(response.data?.message)
  //       setOpen(!open)
  //     }
  //     else toast.error(response.data?.message)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // React.useEffect(() => {
  //   getCategory();
  // }, []);
  return (
    <div
      style={{
        width: "100%",
        minHeight: "calc(100vh - 190px)",
        backgroundColor: "white",
        borderRadius: "20px",
      }}
    >
      <CContainer style={{ display: "contents" }}>
        <CIcon
          icon={cilArrowCircleLeft}
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
            cursor: "pointer",
            height:"2rem",
            width:"2rem"
          }}
          onClick={toggle}
        />
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            marginLeft: "3.8rem",
            position: "absolute",
            top: "13px",
          }}
        >
          Create Shop
        </h1>
        <CContainer style={{ marginTop: "100px" }}>
          <Row style={{ marginLeft: "3%" }}>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Shop Name{""}
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
                <Input
                  type="text"
                  name="shopName"
                  id="shopName"
                  placeholder="Shop Name"
                  style={{ marginTop: "13px" }}
                  onChange={(e) => setShopName(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={4} className="CreateEmpInpCon">
              <FormGroup>
                <Label>
                  Category{" "}
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
                  option={category}
                  selectedOptions={selectedCategory}
                  setSelectedOptions={setSelectedCategory}
                  isSearchable={true}
                  isMulti={false}
                  styles={{ marginTop: "-13px" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <FormGroup className="checkbox">
                <CustomSwitchButton
                  name={"Morning"}
                  checked={morning}
                  setchecked={setMorning}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup className="checkbox">
                <CustomSwitchButton
                  name={"AfterNoon"}
                  checked={afternoon}
                  setchecked={setAfternoon}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup className="checkbox">
                <CustomSwitchButton
                  name={"Evening"}
                  checked={evening}
                  setchecked={setEvening}
                />
              </FormGroup>
            </Col>
          </Row>
          {/* <Row> */}
          <Button
            variant="contained"
            style={{
              marginRight: "2rem",
              float: "right",
              marginTop: "1.2rem",
            }}
            color={"primary"}
            // onClick={handelSubmit}
          >
            Submit
          </Button>
          {/* </Row> */}
        </CContainer>
      </CContainer>
      <Toaster />
    </div>
  );
};

export default Shop;
