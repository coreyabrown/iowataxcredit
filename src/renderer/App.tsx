import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as React from 'react'
import FileUpload from '../components/fileupload';
import Grid from '../components/grid'
import BoxBasic from '../components/box';
import { Padding } from '@mui/icons-material';

function Hello() {
  return (
    <div className='padded'>
      <FileUpload />
      <div> &nbsp; </div>
      <Grid />
      <BoxBasic />
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
