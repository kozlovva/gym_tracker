import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './Navigation'
import { RootState } from '../../redux/Store';
import { ThemePalette } from '../../reduxTypes';

const darkTheme = createTheme({
    palette: {
        mode: "dark",
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
        }
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

const lightTheme = createTheme({
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
        }
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

const Layout = () => {
    const [scene, setScene] = useState("traning")
    const location = useLocation();
    const navigate = useNavigate();
    const palette: ThemePalette = useSelector((state: RootState) => state.themePalette.palette)
    useEffect(() => {
        const path = location.pathname.substring(1);
        if (path.length == 0 || path.includes('workout-process')) {
            setScene("traning")
        } else {
            setScene(path)
        }
    }, [location])

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        navigate(`/${newValue}`)
    };

    return <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', pb: 7, pt: 0 }}>
        <CssBaseline />
        <ThemeProvider theme={palette === ThemePalette.light ? lightTheme : darkTheme}>
            <Box component={"main"} sx={{ p: 1, width: '100%', height: '100%', overflowY: "scroll", pb: 10,  bgcolor: 'background.default', color: 'text.primary', }}>
                <Outlet />
                <Navigation activeScene={scene} handleChange={handleChange} />
            </Box>
        </ThemeProvider>
    </Box>
}

export default Layout;