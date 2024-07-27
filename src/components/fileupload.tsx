import { UploadFile } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { Button } from "@mui/material";

export default function FileUpload() {
    const [filename, setFilename] = useState("");

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
          return;
        }
        const file = e.target.files[0];
        const { name } = file;
        if (name != undefined) {
            setFilename(name);
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