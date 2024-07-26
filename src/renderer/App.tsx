import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import * as React from 'react'

const rows: GridRowsProp = [
  { id: 1, census: '19153010703', city: 'Altoona', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 2, census: '19153010705', city: 'Altoona', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 3, census: '19153010706', city: 'Altoona', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 4, census: '19169000200', city: 'Ames', county: 'Story', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 5, census: '19169000300', city: 'Ames', county: 'Story', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 6, census: '19169000400', city: 'Ames', county: 'Story', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 7, census: '19169000500', city: 'Ames', county: 'Story', score: 4, mqct: true,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 8, census: '19169000600', city: 'Ames', county: 'Story', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 9, census: '19169000700', city: 'Ames', county: 'Story', score: 4, mqct: true,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 10, census: '19169000800', city: 'Ames', county: 'Story', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 11, census: '19169000900', city: 'Ames', county: 'Story', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 12, census: '19169001000', city: 'Ames', county: 'Story', score: 4, mqct: true,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 13, census: '19169001100', city: 'Ames', county: 'Story', score: 4, mqct: true,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 14, census: '19169001200', city: 'Ames', county: 'Story', score: 4, mqct: true,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 15, census: '19169001301', city: 'Ames', county: 'Story', score: 4, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 16, census: '19169001302', city: 'Ames', county: 'Story', score: 4, mqct: true,  nmqct: false, dda: false, rural: false, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 17, census: '19153010203', city: 'Ankeny', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 18, census: '19153010207', city: 'Ankeny', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 19, census: '19153010208', city: 'Ankeny', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 20, census: '19153010209', city: 'Ankeny', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 21, census: '19153010205', city: 'Ankeny', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 22, census: '19153010211', city: 'Ankeny', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 23, census: '19153010212', city: 'Ankeny', county: 'Polk', score: 3, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 0},
  { id: 24, census: '19163013706', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 25, census: '19163013703', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 26, census: '19163013705', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 27, census: '19163013600', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 28, census: '19163013500', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 29, census: '19163013200', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 30, census: '19163013300', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 31, census: '19163013400', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 32, census: '19163010102', city: 'Bettendorf', county: 'Scott', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 0, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 0, dr: 2},
  { id: 33, census: '19057000200', city: 'Burlington', county: 'Des Moines', score: 7, mqct: false,  nmqct: false, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 34, census: '19057000300', city: 'Burlington', county: 'Des Moines', score: 6, mqct: false,  nmqct: true, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 1, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 35, census: '19057000400', city: 'Burlington', county: 'Des Moines', score: 7, mqct: false,  nmqct: true, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 36, census: '19057000500', city: 'Burlington', county: 'Des Moines', score: 7, mqct: false,  nmqct: false, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 37, census: '19057000600', city: 'Burlington', county: 'Des Moines', score: 7, mqct: false,  nmqct: false, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 38, census: '19057000700', city: 'Burlington', county: 'Des Moines', score: 7, mqct: false,  nmqct: false, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 39, census: '19057000900', city: 'Burlington', county: 'Des Moines', score: 7, mqct: false,  nmqct: false, dda: false, rural: true, underserved: 0, rentburden: 1, lihtc: 2, activedev: 1, hqjobs: 2, socialvuln: 1, dr: 0},
  { id: 40, census: '19013002200', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
  { id: 41, census: '19013002304', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
  { id: 42, census: '19013002301', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
  { id: 43, census: '19013002303', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
  { id: 44, census: '19013002400', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
  { id: 45, census: '19013002500', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
  { id: 46, census: '19013002601', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
  { id: 47, census: '19013002603', city: 'Cedar Falls', county: 'Black Hawk', score: 5, mqct: false,  nmqct: false, dda: false, rural: false, underserved: 1, rentburden: 1, lihtc: 2, activedev: 0, hqjobs: 0, socialvuln: 1, dr: 0},
];

const columns: GridColDef[] = [
  { field: 'census', headerName: 'Census Tract', width: 150 },
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
