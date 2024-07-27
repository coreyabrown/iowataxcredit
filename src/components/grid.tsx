import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { exampleRows } from '../../data/data';

const columns: GridColDef[] = [
    { field: 'census', headerName: 'Census Tract Code', width: 150 },
    { field: 'tract', headerName: 'Tract Name', width: 100},
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'county', headerName: 'County', width: 150 },
    { field: 'score', headerName: 'Score', width: 100 },
    { field: 'mqct', headerName: 'Metro QCT', width: 100 },
    { field: 'nmqct', headerName: 'Non-Metro QCT', width: 100 },
    { field: 'dda', headerName: 'DDA', width: 100 },
    { field: 'rural', headerName: 'Rural', width: 100 },
    { field: 'underserved', headerName: 'Underserved', width: 100 },
    { field: 'rentburden', headerName: 'Rent Burdened', width: 100 },
    { field: 'lihtc', headerName: 'LIHTC', width: 100 },
    { field: 'activedev', headerName: 'Active Development', width: 100 },
    { field: 'hqjobs', headerName: 'High Quality Jobs', width: 100 },
    { field: 'socialvuln', headerName: 'Social Vulnerability', width: 100 },
    { field: 'dr', headerName: 'Disaster Recovery', width: 100 },
  ];

  export default function Grid() {
    return(
        <div style={{ height: 600, width: '80%', margin: '0 auto' }}>
      <DataGrid rows={exampleRows} columns={columns} />
      </div>
    )
  }