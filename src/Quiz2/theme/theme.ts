import { createTheme } from "@mui/material";
import { darken } from "polished";

const theme=createTheme({
    palette: {
        primary: {
            main: "#00796b" // Teal
        },    
        secondary: {
            main: "#ffab00" // Amber
        },  
        error: {
            main: "#d32f2f" // Red
        }, 
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    background:'#00796b',
                    color: '#ffffff',
                    '&:hover': {background: darken(0.15, '#00796b')}, 
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    background:'#004d40',
                    color: '#ffffff',
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                    background: '#00796b',
                    color: ' #ffffff', 
                    border: '2px solid #ffab00', 
                    '&:hover': {background: darken(0.15, '#ffab00')},
                }
            }
        }
    },
    typography: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        body1: {
            fontSize: '16px',
        },
        h1: {
            fontWeight: 500,
        },
        h2: {
            fontWeight: 500,
        },
    },
});

export default theme; 



