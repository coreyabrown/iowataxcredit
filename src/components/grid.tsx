import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { makeRows, columns } from './datahandler';


  export default function Grid() {
    return(
        <div style={{ height: 600, width: '80%', margin: '0 auto' }}>
      <DataGrid rows={makeRows()} columns={columns} />
      </div>
    )
  }