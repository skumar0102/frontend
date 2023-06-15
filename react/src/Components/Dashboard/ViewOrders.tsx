import React,{useState,useEffect,useContext} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { http } from '../../Config/axiosConfig.js';
import { ThemeContext } from '../../Context/Theme';
import { Theme,ThemesColors } from '../../Context/Enums';

const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'receipt', headerName: 'Receipt', width: 100 },
    { field: 'entity', headerName: 'Entity', width: 100 },
    { field: 'amount', headerName: 'Amount', width: 100 },
    { field: 'amount_paid', headerName: 'Amount Paid', width: 100 },
    { field: 'attempts', headerName: 'Attempts', width: 100 },
    { field: 'currency', headerName: 'Currency', width: 100 },
    { field: 'status', headerName: 'Status', width: 100,color:'red' },
    { field: 'created_at', headerName: 'Create At', width: 150 },
    // { field: 'offer_id', headerName: 'Offer Id', width: 100 },
  ]

function ViewOrders() {
    const [Orders, setOrders] = useState([]); 
  const { theme, setTheme } = useContext(ThemeContext);
        useEffect(() => {
       http.get("/payment/orders").then((res)=>{
        setOrders(res.data.result.items);
       })
      },[])
      
  return (
    <div style={{ height: 700,width:"100%"}}>
    <DataGrid checkboxSelection sx={{backgroundColor: theme === Theme.Light ? ThemesColors.light.BgData : ThemesColors.dark.BgData}} rows={Orders} columns={columns}  autoPageSize slots={{ toolbar: GridToolbar }} />
  </div>
  )
}

export default ViewOrders