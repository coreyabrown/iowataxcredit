import Box from '@mui/material/Box';
import { lastUpdateDate } from './datahandler'


export default function BoxBasic() {
    return (
        <Box component="section" paddingTop={2}>
            Last Updated: {lastUpdateDate()}
        </Box>
    )
}