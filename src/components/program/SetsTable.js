import { Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React from 'react';
import AddSetButton from '../base/AddSetButton';

const SetsTable = ({item, sets, handleChangeInput, handleChangeCompleted, addSet, disableWiegth, disableCompleted}) => {
    const theme = useTheme();

    return <Paper sx={{ p: 1, mb: 2, mt: 1, backgroundColor: theme.palette.primary.light }}>
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2, pr: 2 }}>
                <Typography>{item.title}</Typography>
                <Typography variant='caption'>{item.muscle}</Typography>
            </Box>
        </Box>

        <Divider />

        <Box>
            <TableContainer>
                <Table sx={{ width: "100%", tableLayout: 'fixed' }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Подход</TableCell>
                            <TableCell align='center'>Повторы</TableCell>
                            {!disableWiegth && <TableCell align='center'>Вес</TableCell>}
                            {!disableCompleted &&<TableCell>Выполнен</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sets.map((set, index) =>
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell align='center'>
                                    <TextField
                                        size='small'
                                        name="repeats"
                                        type={"number"}
                                        onChange={(e) => { handleChangeInput(e, item, index) }}
                                        fullWidth
                                        value={set.repeats} />
                                </TableCell>
                                {!disableWiegth && <TableCell align='center'>
                                    <TextField
                                        size='small'
                                        name="wieght"
                                        type={"number"}
                                        onChange={(e) => { handleChangeInput(e, item, index) }}
                                        fullWidth
                                        value={set.wieght} />
                                </TableCell>}
                                {!disableCompleted && <TableCell align='right'>
                                    <Checkbox
                                        name="completed"
                                        color='secondary'
                                        checked={set.completed}
                                        onChange={(e) => handleChangeCompleted(e, item, index)} />
                                </TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
                <AddSetButton text="Добавить подход" onClick={e => addSet(item)} />
            </Box>
        </Box>
    </Paper>
}

export default SetsTable;