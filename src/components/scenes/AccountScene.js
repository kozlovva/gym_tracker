import { Button, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountScene = () => {
    const navigation = useNavigate();
    return <div>
        <Typography>Аккаунт</Typography>
        <Button fullWidth variant='contained' onClick={() => navigation("/debug")}>Debug</Button>
    </div>
}
 
export default AccountScene;