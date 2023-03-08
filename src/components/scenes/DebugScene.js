import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DebugScene = () => {
    const navigate = useNavigate();
    const reboot = () => {
        navigate("/");
        window.location.reload(true);
    }

    return <div>
        <Button fullWidth color="secondary" onClick={reboot}>Перезагрузить</Button>
        <Button fullWidth color="secondary">Отчистить кеш</Button>
        <Button fullWidth color="secondary">Отчистить данные</Button>
    </div>
}
 
export default DebugScene;