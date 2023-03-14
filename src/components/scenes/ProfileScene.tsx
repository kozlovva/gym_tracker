import { Button, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemText, Switch, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/Store';
import { ThemePalette } from '../../reduxTypes';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changePalette } from '../../redux/ThemeSlice';

const AccountScene = () => {
    const navigation = useNavigate();
    const palette: ThemePalette = useSelector((state: RootState) => state.themePalette.palette)
    const dispatch = useDispatch();
    return <div>
        <Typography>Аккаунт</Typography>
        <Button fullWidth variant='contained' onClick={() => navigation("/debug")}>Debug</Button>
        <FormGroup>
            <FormControlLabel
                control={<Switch checked={palette === ThemePalette.dark} onChange={() => dispatch(changePalette())}/>}
                label="Темная тема" />
        </FormGroup>
    </div>
}

export default AccountScene;