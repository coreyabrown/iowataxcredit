import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { makeRows, columns } from './datahandler';

export default function Grid() {
    return(
      <div style={{ height: '80vh', width: '100%' }}>
        <DataGrid rows={makeRows()} columns={columns} />
      </div>
    )
  }