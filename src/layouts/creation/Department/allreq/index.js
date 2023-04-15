import React, { useState, useEffect } from "react";
import CustomTable from "../../../../custom/Table";
import { HiCheckCircle } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { FcRedo } from "react-icons/fc";
import { toast, Toaster } from "react-hot-toast";
// import { getAllAssetRequest, updateAssetRequest } from "src/utility/apiService";
import { CContainer } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilArrowCircleLeft } from "@coreui/icons";
const Allreq = (props) => {
    const { open, setOpen } = props;
    const [changeAction, setChangeAction] = useState(false);
    const [data, setData] = useState([]);
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
          Header: "Status",
          accessor: "status",
          disableSortBy: true,
        },
        {
          Header: "Action",
          accessor: "Action",
          disableSortBy: true,
        },
      ]);
    

    // const update = async (id,action) => {
    //     let obj = { status: action };
    //     let res = await updateAssetRequest(id, obj);
    //     if (!res.ok) {
    //       toast.error(res.data.message);
    //     }
    //     action=="Pending"?null:toast.success(res.data.message);
    //     setChangeAction(!changeAction);
    //   };
// useEffect(() => {
    
//     const getAssetreq = async () => {
//         try {
//           let response = await getAllAssetRequest();
         
//           let arr = [];
//           response.data.data?.map((item, index) => {
//               arr.push({
//                 ...item,
//                 employeeName: item?.userId?.firstName + " " + item?.userId?.lastName,
//                 assetType: item?.storeId?.assetsName,
//                 status: (
//                   <center>
//                     <h6 style={{color:item.status=="Pending"?"orange":item.status=="Approved"?"green":"red"}} >
//                       {item.status}
//                       </h6>
//                   </center>
//                 ),
//                 Action: (
//                   <center style={{ display: "flex", justifyContent: "space-evenly" }}>
//                     {item.status?.toLowerCase() == "pending" ? (
//                       <>
//                         <MdCancel
//                           size={"23px"}
//                           style={{ cursor: "pointer", color: "red" }}
//                           fontSize="small"
//                           onClick={() => update(item._id,"Rejected")}
//                         ></MdCancel>
//                         <HiCheckCircle
//                           size={"23px"}
//                           style={{ cursor: "pointer", color: "green" }}
//                           fontSize="small"
//                           onClick={() => update(item._id,"Approved")}
//                         ></HiCheckCircle>
//                       </>
//                     ) : (
//                       <FcRedo cursor="pointer"  onClick={()=>update(item._id,"Pending")} size={25}></FcRedo>
//                     )}
//                   </center>
//                 ),
//               });
//           });
//           setData(arr);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       getAssetreq();
//     }, [changeAction])
  return (
    <>
    <div
      style={{
        width: "95%",
        minHeight: "calc(100vh - 190px)",
        backgroundColor: "white",
        borderRadius: "20px",
        position: "absolute",
        top: 0,
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
          onClick={() => setOpen(!open)}
        />
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight:'600',
            marginLeft: "3.8rem",
            position: "absolute",
            top: "13px",
          }}
        >
          Role Creation
        </h1>
      </CContainer>
          <CContainer fluid>
            {/* <CustomTable columns={columns} data={data} /> */}
          </CContainer>
          </div>
        </>
  )
  }
export default Allreq