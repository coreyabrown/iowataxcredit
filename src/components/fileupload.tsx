import { UploadFile, Download } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { Button, Snackbar, SnackbarCloseReason, Alert, AlertProps } from "@mui/material";
import { dataFile, fileValidation, downloadsPath } from "./datahandler";
import fs from 'fs';
import path from 'path';

export function FileUpload() {
    const [filename, setFilename] = useState("");
    const [sev, setSev] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

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
              setSev('success');
              setMessage('File successfully uploaded')
              setOpen(true)
            } else {
              setSev('error');
              setMessage('Incorrect file format')
              setOpen(true)
            }
            
        } else {
          setFilename('')
          setSev('error');
          setMessage('An error occurred during the file upload process')
          setOpen(true)
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
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open = {open}
            autoHideDuration={5000}
            onClose = {handleClose} >
              <Alert
                onClose = {handleClose}
                severity= {sev as AlertProps["severity"]}
                variant="filled"
                > {message}
              </Alert>
          </Snackbar>
          </>
    );
}

export function FileDownload() {
  const [open, setOpen] = useState(false);

  const dlFile = () => {
    fs.copyFileSync(dataFile, path.join(downloadsPath,'IowaTaxCredit_Export.json'));
    setOpen(true);
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open = {open}
        autoHideDuration={5000}
        onClose = {handleClose} >
          <Alert
            onClose = {handleClose}
            severity="success"
            variant="filled"
            >IowaTaxCredit_Export.json can be found in your Downloads folder
          </Alert>
      </Snackbar>
    </>
);
}