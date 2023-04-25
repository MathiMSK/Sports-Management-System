import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import CustomTable from '../../../custom/Table';
import { getRoleMenuById } from '../../../utility/apiService';
import { Icon,Box } from '@mui/material';
import UpdateModal from './UpdateModal';
import {HiPencilSquare} from 'react-icons/hi2'
import { toast, Toaster } from "react-hot-toast";

export default function AccessModel({
  gridModal,
  setGridModal,
  id,
  getAccessAll
}) {
  const [toggleModal, setToggleModal] = useState(false);
  const [RoleMenu, setRoleMenu] = useState("");
  const [data, setData] = useState([]);

  const [columns,setColumns ]= useState([
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
      Header: "Menu Name",
      accessor: "menuName",
    },
    {
      Header: "Access",
      accessor: "access",
      disableSortBy: true,
    },
    {
      Header: "Edit",
      accessor: "edit",
      disableSortBy: true,
    },
  ]);

  // useEffect(()=>{
  //   if (!getAccessAll?.isOwner && getAccessAll?.update == false) {
  //     setColumns((pState) =>
  //       pState.filter((item) => item.Header != "Edit")
  //     );
  //   }
  // },[])

  const toggleShow = () => setGridModal(!gridModal);
  const toggleShowModel = (id) => {
    setRoleMenu(id);
    setToggleModal(!toggleModal);
  };

  useEffect(() => {
    const rolemenuData = async () => {
      try {
        let res = await getRoleMenuById(id);
        let rows = [];
        if (!res.ok) {
          toast.error(res.data.message);
          return;
        }
        res.data.data.map((item) => {
          let ass = "";
          item.get ? (ass = "Get") : null;
          item.create ? (ass = `${ass}/Create`) : null;
          item.update ? (ass = `${ass}/Update`) : null;
          item.delete ? (ass = `${ass}/Delete`) : null;
          rows.push({
            roleName: item.roleId.roleName,
            menuName: item.menuId.menuName,
            access: ass,
            edit: (
              <center> 
                <HiPencilSquare
              size={25}
              style={{cursor:"pointer"}}
              onClick={()=>toggleShowModel(item)}
            ></HiPencilSquare>
            </center>
            ),
          });
        });
        setData(rows);
      } catch (error) {
        console.log(error);
      }
    };
    rolemenuData();
  }, [toggleModal]);
  return (
    <>
      <MDBModal
        style={{ display: "flex", alignItems: "center", marginTop: "85px" }}
        show={gridModal}
        setShow={setGridModal}
      >
        <MDBModalDialog scrollable style={{ minWidth: "60%" }}>
          <MDBModalContent
            style={{ minHeight: "80%" }}
            className="modelRoleMenuTable"
          >
            <MDBModalHeader>
              <MDBModalTitle>Role Menu Access</MDBModalTitle>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "100%" }}>
                  <CustomTable columns={columns} data={data} />
                </Box>
              </Box>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {toggleModal && (
        <UpdateModal
          setToggleModal={setToggleModal}
          toggleShow={toggleShow}
          toggleModal={toggleModal}
          RoleMenu={RoleMenu}
        />
      )}
    </>
  );
}
