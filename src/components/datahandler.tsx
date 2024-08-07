import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import * as data from '../../data/data.json';
import fs from 'fs';
import path from 'path';
import os from 'os';

// MAKE FILE IF NECESSARY
export const storagePath = path.join(os.homedir(), 'iowataxcreditprogram');
export const downloadsPath = path.join(os.homedir(), 'Downloads')
const fileName = 'itcpdata.json';
export const dataFile = path.join(storagePath, fileName);

if (!fs.existsSync(storagePath)){
  try {
    fs.mkdirSync(storagePath);
  } catch (err) {
    console.log(err)
  }
}
if (!fs.existsSync(dataFile)){
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data));
  } catch (err) {
    console.log(err)
  }
} else {
  console.log("USING USER DATA");
}


// GET FILE
export var jsonData: any;

try {
  jsonData = JSON.parse(fs.readFileSync(dataFile, 'utf-8'))
} catch (err) {
  console.error('UNABLE TO READ DATA FILE, REVERTING TO JULY 2024 DATA: ' + err);
  jsonData = data;
}

// VALIDATE FILE
export function fileValidation(contentJSON: any) {
  console.log(contentJSON);
  const keysArray: Array<string> = ['updateDate', 'mqctData', 'nmqctData', 'ddaData', 'ruralData', 'underservedData', 'rentburdenData', 'lihtcData', 'activedevData', 'hqjobsData', 'socialvulnData', 'drData', 'censusTracts', 'countyList', 'cityList', 'countyTractList', 'default'];
  var checkArray: Array<string> = [];
  for (const key in JSON.parse(contentJSON)) {
    checkArray.push(key);
  }
  if (checkArray.length != keysArray.length) {
    console.error('Uploaded file was not properly formatted')
    return false;
  }
  for (const item of checkArray) {
    if (!keysArray.includes(item)) {
      console.error('Uploaded file did not match at key: ' + item)
      return false;
    }
  }
  return true;
}

export function updateData(contentJSON: any, key: any) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var todayString: string = mm + '/' + dd + '/' + yyyy;

  jsonData[key as keyof typeof jsonData] = contentJSON;
  jsonData.updateDate = todayString;
  //console.log(JSON.stringify(jsonData[key as keyof typeof jsonData]))
  // UPDATE CENSUSTRACTS to default values of the key
  fs.writeFileSync(dataFile, JSON.stringify(jsonData));
  jsonData = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
}

let censusTracts : any = jsonData.censusTracts

export const columns: GridColDef[] = [
  { field: 'census', headerName: 'Census Tract Code', width: 150 },
  { field: 'tract', headerName: 'Tract Name', width: 100},
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'county', headerName: 'County', width: 150 },
  { field: 'score', headerName: 'Score', width: 100, type: 'number'  },
  { field: 'mqct', headerName: 'Metro QCT', width: 100, type: 'boolean' },
  { field: 'nmqct', headerName: 'Non-Metro QCT', width: 100, type: 'boolean' },
  { field: 'dda', headerName: 'DDA', width: 100, type: 'boolean' },
  { field: 'rural', headerName: 'Rural', width: 100, type: 'boolean' },
  { field: 'underserved', headerName: 'Underserved', width: 100 },
  { field: 'rentburden', headerName: 'Rent Burdened', width: 100},
  { field: 'lihtc', headerName: 'LIHTC', width: 100 },
  { field: 'activedev', headerName: 'Active Development', width: 100 },
  { field: 'hqjobs', headerName: 'High Quality Jobs', width: 100  },
  { field: 'socialvuln', headerName: 'Social Vulnerability', width: 100  },
  { field: 'dr', headerName: 'Disaster Recovery', width: 100  },
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
  if (info == null || info == undefined) {
    return
  }
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

export function makeRows() {
  let rows = []
  let key: any;
  // UPDATE ALL POINT VALUES
  var ogData = data;
  jsonData.censusTracts = ogData.censusTracts;
  jsonData.mqctData.length > 0 ? updateCensus(jsonData.mqctData): console.log("mqctData empty");
  jsonData.nmqctData.length > 0 ? updateCensus(jsonData.nmqctData): console.log("nmqctData empty");
  jsonData.ddaData.length > 0 ? updateCensus(jsonData.ddaData): console.log("ddaData empty");
  jsonData.ruralData.length > 0 ? updateCensus(jsonData.ruralData): console.log("ruralData empty");
  jsonData.underservedData.length > 0 ? updateCensus(jsonData.underservedData): console.log("underservedData empty");
  jsonData.rentburdenData.length > 0 ? updateCensus(jsonData.rentburdenData): console.log("rentburdenData empty");
  jsonData.lihtcData.length > 0 ? updateCensus(jsonData.lihtcData): console.log("lihtcData empty");
  jsonData.activedevData.length > 0 ? updateCensus(jsonData.activedevData): console.log("activedevData empty");
  jsonData.hqjobsData.length > 0 ? updateCensus(jsonData.hqjobsData): console.log("hqjobsData empty");
  jsonData.socialvulnData.length > 0 ? updateCensus(jsonData.socialvulnData): console.log("socialvulnData empty");
  jsonData.drData.length > 0 ? updateCensus(jsonData.drData): console.log("drData empty");
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

export function lastUpdateDate() {
  return jsonData.updateDate;
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