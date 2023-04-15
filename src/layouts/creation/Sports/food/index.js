import { CContainer } from "@coreui/react";
import { Button, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { HiCheckCircle } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { FcRedo } from "react-icons/fc";
import CustomTable from "../../../../custom/Table";
import { format } from 'date-fns';
// import {
//   getAllFoodRequest,
//   updateFoodRequest,
// } from "src/utility/apiService";
import jwt_decode from "jwt-decode";

const FoodTable = ({getAccess,useage,openRefresh}) => {
  const [store, setStore] = useState([]);
  const [changeAction, setChangeAction] = useState(false);
  const [column, setColumn] = useState([
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
      disableSortBy: true,
      filter: "equals",
    },
    {
      Header: "Meal Category",
      accessor: "mealCategory",
    },
    {
      Header: "Meal Type",
      accessor: "mealType",
    },
    {
      Header: "Shop Name",
      accessor: "shopName",
    },
     {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Staus",
      accessor: "status",
    },
    {
      Header: "Action",
      accessor: "Action",
    },
  ]);

  let token=JSON.parse(localStorage.getItem('hrmsv2-token'))
  let decoded = jwt_decode(token);

  const update = async (id,action) => {
    let obj = { status: action };
    let res = await updateFoodRequest(id, obj);
    if (!res.ok) {
      toast.error(res.data.message);
    }
    action=="Pending"?null:toast.success(res.data.message);
    setChangeAction(!changeAction);

  };
  let date = new Date().toLocaleDateString();

  useEffect(()=>{
    let action=()=>{
      if ( useage == "single" ) {
        setColumn((pState) =>
          pState.filter((item) => item.Header != "Action")
        );
      }
    }
    action()
  },[getAccess])

  const getAllrequest = async () => {
    let arr = [];
    let FoodRequest = await getAllFoodRequest();
    FoodRequest?.data?.foodRequests.map((i) => {
      if (format(new Date(), 'dd/M/yyyy') == i.Date) {
        arr.push({
          ...i,
          employeeName: i.userId.firstName + " " + i.userId.lastName,
          mealCategory: i.categoryId.foodcategory,
          mealType: i.mealType,
          shopName: i.shopId.shopName,
          date: i.Date,
          status: (
            <center>
              <h6 style={{color:i.status=="Pending"?"orange":i.status=="Approved"?"green":"red"}} >
                {i.status}
                </h6>
            </center>
          ),
          Action: (
            <center style={{ display: "flex", justifyContent: "space-evenly" }}>
              {i.status?.toLowerCase() == "pending" ? (
                <>
                  <MdCancel
                    size={"23px"}
                    style={{ cursor: "pointer", color: "red" }}
                    fontSize="small"
                    onClick={() => update(i._id,"Rejected")}
                  ></MdCancel>
                  <HiCheckCircle
                    size={"23px"}
                    style={{ cursor: "pointer", color: "green" }}
                    fontSize="small"
                    onClick={() => update(i._id,"Approved")}
                  ></HiCheckCircle>
                </>
              ) : (
                <FcRedo cursor="pointer"  onClick={()=>update(i._id,"Pending")} size={25}></FcRedo>
              )}
            </center>
          ),
        });
      }
      
      let arr2=[]
      arr?.filter((item)=> {
        if(item.userId?._id==decoded?.id){
          arr2.push(item)
        }
      })
      return useage=="single"?setStore(arr2):setStore(arr);
    });

  };
  useEffect(() => {
    getAllrequest();
  }, [changeAction,getAccess,openRefresh]);

  return (
    <>
      <CContainer fluid>
        <CustomTable columns={column} data={store} />
      </CContainer>
      <Toaster />
    </>
  );
};
export default FoodTable;
