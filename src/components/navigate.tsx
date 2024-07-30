import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Edit, Home } from "@mui/icons-material";

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
    }

    return (
    <Button
            onClick={() => handleClick()}
            component="label"
            variant="outlined"
            startIcon={<Home />}
            sx={{ marginRight: "1rem" }}
          >
            Home
          </Button>
    );
}