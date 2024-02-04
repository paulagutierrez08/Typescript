import theme from './theme';
import { Box, Button, Chip, Paper } from "@mui/material";
interface persona{
    name: string;
    age?: string;
}
function Components({name, age}:persona) {
    return (
        <Box >
        <Paper sx={{ width:'2000px', padding:'20px'}}>
            <Chip label={name}/>
            <Chip label={age}/>
            <div style={{color: theme.palette.primary.main}}>
                <h2>Color principal</h2>
            </div>
            <div style={{color: theme.palette.secondary.main}}>
                <h2>Color secundario</h2>
            </div>
            <div style={{color: theme.palette.error.main}}>
                <h2>error</h2>
            </div>
            <Button>Click me</Button>
        </Paper>
        </Box>
    )
};

export default Components