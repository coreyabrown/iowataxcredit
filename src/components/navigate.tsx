import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Edit, Save, DeleteForever, Check, Cancel } from "@mui/icons-material";
import { clearData } from "./datahandler";
import { Fragment, useState } from "react";

export function Entrybutton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/entry');
    }

    return (
    <Button
            onClick={() => handleClick()}
            component="label"
            variant="outlined"
            startIcon={<Edit />}
            sx={{ marginRight: "1rem" }}
          >
            Edit Data
          </Button>
    );
}

export function Homebutton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
        window.location.reload();
    }

    return (
    <Button
            onClick={() => handleClick()}
            component="label"
            variant="outlined"
            startIcon={<Save />}
            sx={{ marginRight: "1rem" }}
          >
            Save
          </Button>
    );
}

export function ClearAllButton() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
      setOpen(false);
      clearData();
      navigate('/');
      window.location.reload();
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        component="label"
        variant="outlined"
        startIcon={<DeleteForever />}
        sx={{ marginLeft: "1rem", float: "right" }}
      >
        Clear All Data
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"⚠️ Warning"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove all data from selections?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button 
            onClick={handleClick}  
            startIcon={<Check />}
            variant="outlined"
          >
            Yes, delete the data
          </Button>
          <Button 
            onClick={handleClose} 
            startIcon={<Cancel />}
            variant="outlined"
            autoFocus
          >
            No, keep the data
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}