import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import {fetchQ1Data, fetchQ2Data, fetchQ3Data, fetchQ4Data, fetchQ5Data} from '../actions/tabledata';
import { Typography } from '@mui/material';
import TableRowsIcon from '@mui/icons-material/TableRows';
import toast, { Toaster } from 'react-hot-toast';

function Result() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tabledata);
  const q = useSelector((state) => state.query)
  console.log(q);
  React.useEffect(() => {
    if(q === "" || q.query === "SELECT * from users;"){
      dispatch(fetchQ1Data());
      toast.success('Query compiled successfully',{position: "bottom-center"});
    }
    else if(q.query==="SELECT * from users where gender=\"Male\";"){
      dispatch(fetchQ2Data());
      toast.success('Query compiled successfully',{position: "bottom-center"});
    }
    else if(q.query==="SELECT * from users where gender=\"Female\";"){
      dispatch(fetchQ3Data());
      toast.success('Query compiled successfully',{position: "bottom-center"});
    }
    else if(q.query==="SELECT * from users where ip_address=\"86.228.202.112\" OR ip_address=\"125.47.224.245\";"){
      dispatch(fetchQ4Data());
      toast.success('Query compiled successfully',{position: "bottom-center"});
    }
    else if(q.query==="SELECT * from users where id BETWEEN 401 AND 525;"){
      dispatch(fetchQ5Data());
      toast.success('Query compiled successfully',{position: "bottom-center"});
    }
    else{
      toast.error('Query not defined',{position: "bottom-center"});
    }
  }, [dispatch,q])


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'first_name',
      headerName: 'First name',
      width: 300,
    },
    {
      field: 'last_name',
      headerName: 'Last name',
      width: 300,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 300,
    },
    {
      field: 'ip_address',
      headerName: 'IP Address',
      width: 300,
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <div style={{display: 'flex', marginBottom: '15px', gap: '5px'}}>
      <TableRowsIcon/>
      <Typography>`users`</Typography>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          filter: {
            filterModel: {
              items: [{ columnField: '', operatorValue: '>', value: '' }],
            },
          },
        }}
      />
      <Toaster/>
    </div>
  )
}

export default Result