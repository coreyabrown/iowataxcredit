import { UploadFile } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { Button } from "@mui/material";
import path from 'path';

export default function FileUpload() {
    const [filename, setFilename] = useState("");

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
          return;
        }
        const file = e.target.files[0];
        
        if (file != undefined) {
            const { name } = file;
            setFilename(name);
            console.log(file.path)

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
            sx={{ marginRight: "1rem", marginLeft: 22 }}
          >
            Upload Appendices PDF
            <input type="file" accept=".pdf" hidden onChange={handleFileUpload} />
          </Button>
          <span style={{color: "black"}}>{filename}</span>
          </>
    );
}