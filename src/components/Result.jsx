import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import {fetchData} from '../actions/tabledata';
function Result() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tabledata);
  
  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])


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
    </div>
  )
}

export default Result