import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import * as React from 'react'

const rows: GridRowsProp = [
  { id: 1, city: 'Altoona', county: 'Polk', score: 2, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 1, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 2, city: 'Ames', county: 'Story', score: 4, mqct: true,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 3, city: 'Ankeny', county: 'Polk', score: 1, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 0, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 4, city: 'Bettendorf', county: 'Scott', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 1, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 5, city: 'Burlington', county: 'Des Moines', score: 6, mqct: false,  nmqct: true, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 1, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 6, city: 'Cedar Falls', county: 'Black Hawk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 0, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
];

const columns: GridColDef[] = [
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

function Hello() {
  return (
    <div>
      <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Upload Document
          </button>
      </a>
      <div> &nbsp; </div>
      <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
