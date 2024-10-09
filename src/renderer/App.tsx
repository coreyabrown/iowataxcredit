import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FileUpload, FileDownload } from '../components/fileupload';
import { ClearAllButton, Entrybutton, Homebutton } from '../components/navigate';
import Grid from '../components/grid'
import BoxBasic from '../components/box';
import { MQCTSelector, NMQCTSelector, DDASelector, RuralSelector, UnderservedSelector, RentBurdenSelector, LIHTCZeroSelector, LIHTCOneSelector, ActiveDevSelector, HQJobsTwoSelector, HQJobsOneSelector, SocialVulnSelector, DRSelector, UnderservedSelectorOne, DRSelectorOne, ThrivingSelector } from '../components/tabletransfer'

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
      <ClearAllButton />
      <div> &nbsp; </div>
      <div className='scrollable'>
        <MQCTSelector />
        <NMQCTSelector />
        <DDASelector />
        <RuralSelector />
        <UnderservedSelector />
        <UnderservedSelectorOne />
        <RentBurdenSelector />
        <LIHTCZeroSelector />
        <LIHTCOneSelector />
        <ActiveDevSelector />
        <HQJobsTwoSelector />
        <HQJobsOneSelector />
        <SocialVulnSelector />
        <DRSelectorOne />
        <DRSelector />
        <ThrivingSelector />
        <div> &nbsp; </div>
      </div>
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
