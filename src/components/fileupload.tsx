import { UploadFile, Download } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { Button } from "@mui/material";
import { dataFile, fileValidation, downloadsPath } from "./datahandler";
import fs from 'fs';
import path from 'path';

export function FileUpload() {
    const [filename, setFilename] = useState("");

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
          return;
        }
        const file = e.target.files[0];
        
        if (file != undefined) {
            const { name } = file;
            setFilename(name);

            const fileContent = fs.readFileSync(file.path, 'utf-8');
            if (fileValidation(fileContent)){
              fs.copyFileSync(file.path, dataFile)
              window.location.reload()
            }
            
        } else {
          setFilename('')
        }
    }

    return (
        <>
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFile />}
            sx={{ marginLeft: "1rem", float: "right" }}
          >
            Upload Data
            <input type="file" accept=".json" hidden onChange={handleFileUpload} />
          </Button>
          </>
    );
}

export function FileDownload() {

  const dlFile = () => {
    fs.copyFileSync(dataFile, path.join(downloadsPath,'IowaTaxCredit_Export.json'));
    alert('A file titled "IowaTaxCredit_Export.json" has been downloaded to your Downloads folder.');
  }

  return (
    <>
      <Button
            component="label"
            variant="outlined"
            onClick={() => dlFile()}
            startIcon={<Download />}
            sx={{ marginLeft: "1rem", float: "right" }}
          >
            Download Data
          </Button>
      </>
);
}