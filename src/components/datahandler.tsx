import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import * as data from '../../data/data.json';

let jsonData = data;
let censusTracts : any = jsonData.censusTracts

export const columns: GridColDef[] = [
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

let exampleRows: GridRowsProp = [
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

function searchCensus(updateKey: any, updateValue: any, key1: string, value1: any, key2="IGNORE", value2: any="IGNORE" ) {
  let key: any;
  for (key in censusTracts) {
    if (censusTracts[key as keyof typeof censusTracts][key1] == value1) {
      if (key2 != "IGNORE" && censusTracts[key as keyof typeof censusTracts][key2] == value2) {
        censusTracts[key as keyof typeof censusTracts][updateKey] = updateValue
      } else if (key2 == "IGNORE"){
        censusTracts[key as keyof typeof censusTracts][updateKey] = updateValue
      }
    }
  }
}

function updateCensus(info: Array<object>) {
  if (Object.keys(info[0]).length > 2) {
    for (let i=0; i < info.length; i++) {
      searchCensus(Object.keys(info[i])[0], Object.values(info[i])[0], Object.keys(info[i])[1], Object.values(info[i])[1], Object.keys(info[i])[2], Object.values(info[i])[2])
    }
  }  else if (Object.keys(info[0]).length == 2) {
    for (let i=0; i < info.length; i++) {
      searchCensus(Object.keys(info[i])[0], Object.values(info[i])[0], Object.keys(info[i])[1], Object.values(info[i])[1])
    }
  }
}

export function lastUpdateDate() {
  return jsonData.updateDate;
}

export function makeRows() {
  let rows = []
  let key: any;
  // UPDATE ALL POINT VALUES
  updateCensus(jsonData.mqctData);
  updateCensus(jsonData.nmqctData);
  updateCensus(jsonData.ddaData);
  updateCensus(jsonData.ruralData);
  updateCensus(jsonData.underservedData);
  updateCensus(jsonData.rentburdenData);
  updateCensus(jsonData.lihtcData);
  updateCensus(jsonData.activedevData);
  updateCensus(jsonData.hqjobsData);
  updateCensus(jsonData.socialvulnData);
  updateCensus(jsonData.drData);
  // END UPDATES
  for (key in censusTracts) {
    
    let value = censusTracts[key as keyof typeof censusTracts];
    let score = censusTracts[key as keyof typeof censusTracts].underserved + censusTracts[key as keyof typeof censusTracts].rentburden + censusTracts[key as keyof typeof censusTracts].lihtc + censusTracts[key as keyof typeof censusTracts].activedev + censusTracts[key as keyof typeof censusTracts].hqjobs + censusTracts[key as keyof typeof censusTracts].socialvuln + censusTracts[key as keyof typeof censusTracts].dr
    censusTracts[key as keyof typeof censusTracts].score = score;
    rows.push(value);
  }
  let gridRows: GridRowsProp = rows;

  if (gridRows.length > exampleRows.length) {
    return gridRows;
  } else {
    return exampleRows;
  }

}

export function getCityList() {
  return jsonData.cityList;
}

export function getCountyList() {
  return jsonData.countyList;
}

export function getCountyTractList() {
  return jsonData.countyTractList
}

export function getmqctData() { 
  return jsonData.mqctData
 }
   export function getnmqctData() { 
  return jsonData.nmqctData
 }
   export function getddaData() { 
  return jsonData.ddaData
 }
   export function getruralData() { 
  return jsonData.ruralData
 }
   export function getunderservedData() { 
  return jsonData.underservedData
 }
   export function getrentburdenData() { 
  return jsonData.rentburdenData
 }
   export function getlihtcData() { 
  return jsonData.lihtcData
 }
   export function getactivedevData() { 
  return jsonData.activedevData
 }
   export function gethqjobsData() { 
  return jsonData.hqjobsData
 }
   export function getsocialvulnData() { 
  return jsonData.socialvulnData
 }
   export function getdrData() { 
  return jsonData.drData
 }