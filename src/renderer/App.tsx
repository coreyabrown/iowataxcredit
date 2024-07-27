import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as React from 'react'
import FileUpload from '../components/fileupload';
import Grid from '../components/grid'

function Hello() {
  return (
    <div>
      <FileUpload />
      <div> &nbsp; </div>
      <Grid />
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
