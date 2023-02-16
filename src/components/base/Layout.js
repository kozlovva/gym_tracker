import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './Navigation'

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#EAE1DF",
            light: "#f7f3f3",
            dark: "#be9d9d",
            contrastText: "#322E18"
        },
        secondary: {
            main: "#545E56",
            light: "#EAECEA",
            dark: "#A9B1A9"
        },
        background: {
            default: "#f7f3f3"
        }
    },
    shape: {
        borderRadius: '8px'
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});

const Layout = ({children}) => {
    const [scene, setScene] = useState("traning")
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        setScene(location.pathname.substring(1))
    }, [location])

    const handleChange = (event, newValue) => {
        console.log(scene)
        navigate(`/${newValue}`)
    };

    return <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', pb: 7, pt: 0 }}>
        <CssBaseline />
        <ThemeProvider theme={darkTheme}><Box component={"main"} sx={{ p: 1, width: '100%', height: '100%', overflowY: "scroll", pb: 10 }}>
            <Outlet />
            <Navigation activeScene={scene} handleChange={handleChange} />
        </Box>
        </ThemeProvider>
    </Box>
}

export default Layout;