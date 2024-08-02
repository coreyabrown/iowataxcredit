import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as React from 'react'
import { FileUpload, FileDownload } from '../components/fileupload';
import { Entrybutton, Homebutton } from '../components/navigate';
import Grid from '../components/grid'
import BoxBasic from '../components/box';
import { MQCTSelector, NMQCTSelector, DDASelector, RuralSelector, UnderservedSelector, RentBurdenSelector, LIHTCZeroSelector, LIHTCOneSelector, ActiveDevSelector, HQJobsTwoSelector, HQJobsOneSelector, SocialVulnSelector, DRSelector } from '../components/tabletransfer'

const entryRoute = "/entry"
const homeRoute = "/"

function Display() {
  return (
    <div className='padded'>
      <Entrybutton />
      <FileUpload />
      <FileDownload />
      <div> &nbsp; </div>
      <Grid />
      <BoxBasic />
    </div>
  );
}

function Entry() {
  return (
    <div className='padded'>
      <Homebutton />
      <div> &nbsp; </div>
      <MQCTSelector />
      <NMQCTSelector />
      <DDASelector />
      <RuralSelector />
      <UnderservedSelector />
      <RentBurdenSelector />
      <LIHTCZeroSelector />
      <LIHTCOneSelector />
      <ActiveDevSelector />
      <HQJobsTwoSelector />
      <HQJobsOneSelector />
      <SocialVulnSelector />
      <DRSelector />
      <div> &nbsp; </div>
      <Homebutton />
      <div> &nbsp; </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={homeRoute} element={<Display />} />
        <Route path={entryRoute} element={<Entry />} />
      </Routes>
    </Router>
  );
}
