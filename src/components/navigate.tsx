import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Edit, Save } from "@mui/icons-material";

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
            Update Data
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