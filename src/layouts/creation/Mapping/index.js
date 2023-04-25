import { CContainer, CFormText } from "@coreui/react";
import React, { useState, useEffect, useContext } from "react";
import CustomTable from "../../../custom/Table";
import CIcon from "@coreui/icons-react";
import { toast, Toaster } from "react-hot-toast";
import { cilArrowCircleLeft } from "@coreui/icons";
import { Box } from "@mui/material";
import "./styles.css";
import {
  getallRole,
  getallMenu,
  createRoleMenu,
  getRoleMenu,
  getAccessForMenu,
} from "../../../utility/apiService";
import CustomSelect from "../../../custom/Select";
import { FaEye } from "react-icons/fa";
import AccessModel from "./AccessModal";
import CustomSwitchButton from "../../../custom/CustomSwitchButton";
import Button from "@mui/material/Button";
// import { RoleMenuAccessContext } from /context/roleMenuContext";

const Mapping = (props) => {
  const { open, setOpen } = props;
  const [data, setData] = useState([]);             
  const [id, setId] = useState();
  const [gridModal, setGridModal] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [selectedOptionsRole, setSelectedOptionsRole] = useState();
  const [selectedOptionsMenu, setSelectedOptionsMenu] = useState();
  const [icon, setIcons] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);
  const [error, setError] = useState({
    roleError: "",
    menuError: "",
  });
  const [getAccess, setGetAccess] = useState(false);
  const [createAccess, setCreateAccess] = useState(false);
  const [updateAccess, setUpdateAccess] = useState(false);
  const [deleteAccess, setDeleteAccess] = useState(false);
  const [role, setRole] = useState("");
  const [menuDuplicate, setMenuDuplicate] = useState();
  const [getAccessAll, setGetAccessAll] = useState();
  const [menu, setMenu] = useState("");
  const [columns, setColumns] = useState([
    {
      Header: "SI No",
      id: "index",
      accessor: (row, index) => (
        <div style={{ textAlign: "center" }}>{index + 1}</div>
      ),
    },
    {
      Header: "Role Name",
      accessor: "roleName",
    },
    {
      Header: "Role Code",
      accessor: "roleCode",
    },
    {
      Header: "Status",
      accessor: "status",
      disableSortBy: true,
    },
  ]);
  let getWidth = window.innerWidth;

  // let roleMenuAccess = useContext(RoleMenuAccessContext);

  // useEffect(() => {
  //   let fetchData = async () => {
  //     try {
  //       let res = await getAccessForMenu(roleMenuAccess?.roleId, menuId);
  //       setGetAccessAll(res.data.data);
  //       if (!res.data.data?.isOwner && res.data.data?.get == false) {
  //         setColumns((pState) =>
  //           pState.filter((item) => item.Header != "Status")
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [menuId]);

  const reset = () => {
    setSelectedOptionsRole("");
    setSelectedOptionsMenu("");
    setGetAccess(false);
    setCreateAccess(false);
    setUpdateAccess(false);
    setDeleteAccess(false);
    setError({ roleError: "", menuError: "" });
  };
  const toggle = () => setOpen1(!open1);

  const toggleShow = (id) => {
    setId(id);
    setGridModal(!gridModal);
  };

  const handleRoleMenu = async () => {
    getallMenu()
      .then((data) => {
        let arr = [];
        data.data.data.map((item) => {
          arr.push({
            menuId: item._id,
            value: item.menuName,
            label: item?.menuName,
          });
        });
        setMenu(arr);
        setMenuDuplicate(arr);
        
      })
      .catch((e) => console.log("error " + e));

    const Role = await getallRole();
    const RoleData = Role.data?.data?.filter((item) => {
      return item.isBlock === false;
    });
    setRole(
      RoleData.map((item) => {
        return {
          value: item.roleName || "",
          label: item.roleName || "",
          roleId: item._id || "",
        };
      })
    );
  };

  useEffect(() => {
    handleRoleMenu();
    const roleData = async () => {
      try {
        let response = await getallRole();
        let arr = [];
        response.data.data?.map((item, index) => {
          if (item.isBlock == false) {
            arr.push({
              ...item,
              status: (
                <center>
                <FaEye
                  size={"20px"}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleShow(item?._id)}
                  fontSize="small"
                  onMouseEnter={setIcons(!icon)}
                ></FaEye></center>
              ),
            });
          }
        });
        setData(arr);
        
      } catch (error) {
        console.log(error);
      }
    };
    roleData();

    getRoleMenu()
      .then((data) => {
        setDataFromApi(data.data);
      })
      .catch((e) => console.log("error " + e));
  }, [open1]);

  useEffect(() => {
    let arr = [];
    try {
      dataFromApi?.data?.map((data) => {
        menuDuplicate?.map((item) => {
          if (selectedOptionsRole?.value == data.roleId.roleName) {
            if (data.menuId === item.menuId) {
              arr.push(item);
            }
          }
        });
      });
      let unMapArr = menuDuplicate?.filter(function (data) {
        return !arr?.find(function (item) {
          return data.menuId == item.menuId;
        });
      });
      setMenu(unMapArr);
    } catch (error) {
      console.log(error);
    }
    console.log("selectedOptionsRole", selectedOptionsRole);
  }, [selectedOptionsRole]);

  const handleSubmit = async () => {
    if (!selectedOptionsRole) {
      setError((prev) => ({ ...prev, roleError: "Role is required" }));
    } else setError((prev) => ({ ...prev, roleError: "" }));
    if (!selectedOptionsMenu) {
      setError((prev) => ({ ...prev, menuError: "Menu is required" }));
    } else setError((prev) => ({ ...prev, menuError: "" }));
    if (selectedOptionsMenu && selectedOptionsRole) {
      createRoleMenu({
        roleId: selectedOptionsRole.roleId,
        menuId: selectedOptionsMenu.menuId,
        get: getAccess,
        create: createAccess,
        update: updateAccess,
        delete: deleteAccess
      })
        .then((data) => {
          if (data.ok) {
            reset();
            toast.success(data.message);
            setOpen1(!open1);
          } else {
            toast.error(data.message);
          }
        })
        .catch((e) => console.log("error " + e));
    }
  };

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
        {!open1 ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  padding: "20px",
                  paddingRight: "5px",
                }}
              >
                Role & Menu
              </h1>
              {/* {getAccessAll?.isOwner || getAccessAll?.create  ?  */}
              <Button
                style={{
                  marginRight: "1rem",
                  color:'white'
                }}
                onClick={toggle}
                text={"Mapping"}
                color={"primary"}
                variant="contained"
              >
                Mapping
              </Button>
               {/* : null} */}
            </div>
            <CContainer fluid>
              <CustomTable columns={columns} data={data} />
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
                      width:'2rem',
                      height:'2rem'
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
                    Role Menu Mapping
                  </h1>
                </CContainer>
              </div>
              <Box sx={{ paddingLeft: "4%" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    mt={10}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      marginTop: "3rem",
                    }}
                  >
                    <Box className="cusInpRoleMenu">
                      <CustomSelect
                        widthForSelect="100%"
                        placeholder={"Select Role"}
                        option={role}
                        selectedOptions={selectedOptionsRole}
                        setSelectedOptions={setSelectedOptionsRole}
                        isSearchable={true}
                        isMulti={false}
                        star={"*"}
                        name="Select the Role"
                        width="300px"
                        required={true}
                      />

                      {error.roleError ? (
                        <p
                          style={{
                            paddingLeft: "14px",
                            color: "red",
                            fontSize: "14px",
                          }}
                        >
                          {error.roleError}
                        </p>
                      ) : null}
                    </Box>
                    <Box className="cusInpRoleMenu">
                      <CustomSelect
                        widthForSelect="100%"
                        placeholder={"Select Menu"}
                        option={menu}
                        selectedOptions={selectedOptionsMenu}
                        setSelectedOptions={setSelectedOptionsMenu}
                        isSearchable={true}
                        isMulti={false}
                        star={"*"}
                        disabled={selectedOptionsRole ? false : true}
                        name="Select the Menu"
                        width="300px"
                        required={true}
                      />
                      {error.menuError ? (
                        <p
                          style={{
                            paddingLeft: "14px",
                            color: "red",
                            fontSize: "14px",
                          }}
                        >
                          {error.menuError}
                        </p>
                      ) : null}
                    </Box>
                  </Box>
                  <Box
                    className="cusSwiRoleMenuCon"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className="cusSwiRoleMenuCon"
                      sx={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <CustomSwitchButton
                        name={"Get"}
                        checked={getAccess}
                        setchecked={setGetAccess}
                      />
                      <CustomSwitchButton
                        name={"Create"}
                        checked={createAccess}
                        setchecked={setCreateAccess}
                      />
                    </Box>
                    <Box
                      className="cusSwiRoleMenuCon"
                      sx={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <CustomSwitchButton
                        name={"Update"}
                        checked={updateAccess}
                        setchecked={setUpdateAccess}
                      />
                      <CustomSwitchButton
                        name={"Delete"}
                        checked={deleteAccess}
                        setchecked={setDeleteAccess}
                      />
                    </Box>
                  </Box>
                </Box>
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
                    sx={{ display: "flex", margin: "15px", alignSelf: "left",color:'black' }}
                    color="primary"
                    style={{color:'blue'}}
                    onClick={reset}
                  >
                    Reset
                  </Button>
                  <Button
                    variant="contained"
                    aria-label="fingerprint"
                    sx={{ display: "flex", margin: "15px", alignSelf: "left" }}
                    style={{color:'white'}}
                    color={"primary"}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </div>
          </>
        )}
      </div>
      <Toaster />
      {gridModal && (
        <AccessModel
          getAccessAll={getAccessAll}
          gridModal={gridModal}
          setGridModal={setGridModal}
          id={id}
          value={dataFromApi}
        />
      )}
    </>
  );
};

export default Mapping;
