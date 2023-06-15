import React,{useState,useEffect} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { http } from '../../Config/axiosConfig.js';

const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'receipt', headerName: 'Receipt', width: 100 },
    { field: 'entity', headerName: 'Entity', width: 100 },
    { field: 'amount', headerName: 'Amount', width: 100 },
    { field: 'amount_paid', headerName: 'Amount Paid', width: 100 },
    { field: 'attempts', headerName: 'Attempts', width: 100 },
    { field: 'currency', headerName: 'Currency', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'created_at', headerName: 'Create At', width: 150 },
    { field: 'fee', headerName: 'Fee', width: 150 },
    // { field: 'offer_id', headerName: 'Offer Id', width: 100 },
  ]

function ViewPayments() {
    const [Orders, setOrders] = useState([]); 
    console.log(Orders);
       useEffect(() => {
      http.get("/payment/all").then((res)=>{
       setOrders(res.data.result.items);
      })
     },[])
     
 return (
   <div style={{ height: 700,width:"100%"}}>
   <DataGrid rows={Orders} columns={columns}  autoPageSize slots={{ toolbar: GridToolbar }} />
 </div>
 )
}

export default ViewPayments