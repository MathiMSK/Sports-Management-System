import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import { Box } from '@mui/material';
import CustomButton from '../../../components/MDButton';
import { updateRoleMenuById } from '../../../utility/apiService';
import { toast, Toaster } from "react-hot-toast";
import CustomSwitchButton from '../../../custom/CustomSwitchButton';


const UpdateModal=({toggleModal,setToggleModal,RoleMenu,menuId})=> {
  const [getAccess, setGetAccess] = useState(RoleMenu.get);
  const [createAccess, setCreateAccess] = useState(RoleMenu.create);
  const [updateAccess, setUpdateAccess] = useState(RoleMenu.update);
  const [deleteAccess, setDeleteAccess] = useState(RoleMenu.delete);


  const handleSubmit=()=>{
    let obj={get:getAccess,create:createAccess,update:updateAccess,delete:deleteAccess,menuId}
    updateRoleMenuById(RoleMenu._id,obj).then((res)=>{
      toast.success(res.message);
    }).catch((e)=>{
      console.log("error "+e);
    })
    setToggleModal(!toggleModal)
  }

  return (
    <>
      <MDBModal show={toggleModal} setShow={setToggleModal} tabIndex='-1' >
        <MDBModalDialog centered style={{padding:"17px"}} >
          <MDBModalContent >
            <MDBModalHeader>
              <MDBModalTitle>{RoleMenu.roleId.roleName} - {RoleMenu.menuId.menuName
              }</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleModal(!toggleModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>
                    <CustomSwitchButton
                      name={"Create"}
                      checked={createAccess}
                      setchecked={setCreateAccess}
                    />
                    <CustomSwitchButton
                      name={"Get"}
                      checked={getAccess}
                      setchecked={setGetAccess}
                    />
                </Box>
                <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>
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
              <Box mt={"30px"} sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"end"}}>
                <CustomButton   
                text={"Cancel"}
                  color={"danger"}
                   style={{display:"flex",margin:"15px",alignSelf:"left"}}  onClick={() => setToggleModal(!toggleModal)} >
                  Cancel
                </CustomButton>
                <CustomButton   
                text={"Submit"}
                  color={"success"} style={{display:"flex",margin:"15px",alignSelf:"left"}}  onClick={handleSubmit} >
                  Submit
                </CustomButton>
              </Box>
            </MDBModalBody>
            
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <Toaster />
    </>
  );
}

export default UpdateModal