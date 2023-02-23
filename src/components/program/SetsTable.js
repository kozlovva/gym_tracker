import { Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React from 'react';
import AddSetButton from '../base/AddSetButton';
import { MuscleGroupsInfo } from '../Constants';

const SetsTable = ({ item, sets, handleChangeInput, handleChangeCompleted, addSet, disableWeigth, disableCompleted, infoMode, inputMode }) => {
    const theme = useTheme();
    console.log(sets);

    return <Paper sx={{ p: 1, mb: 2, mt: 1, backgroundColor: theme.palette.primary.light }}>
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2, pr: 2 }}>
                <Typography>{item.title}</Typography>
                <Typography variant='caption'>{MuscleGroupsInfo[item.muscle].locale}</Typography>
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
                            {!disableWeigth && <TableCell align='center'>Вес</TableCell>}
                            {!disableCompleted && <TableCell>Выполнен</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sets.map((set, index) =>
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell align='center'>
                                    {inputMode && <TextField
                                        inputProps={{
                                            sx: { textAlign: "center" }
                                        }}
                                        size='small'
                                        name="repeats"
                                        type={"number"}
                                        onChange={(e) => { handleChangeInput(e, item, index) }}
                                        fullWidth
                                        value={set.repeats} />}
                                    {infoMode && set.repeats}
                                </TableCell>
                                {!disableWeigth && <TableCell align='center'>
                                    {inputMode && <TextField
                                        inputProps={{
                                            sx: { textAlign: "center" }
                                        }}
                                        size='small'
                                        name="weight"
                                        type={"number"}
                                        onChange={(e) => { handleChangeInput(e, item, index) }}
                                        fullWidth
                                        value={set.weight} />}
                                    {infoMode && set.weight}
                                </TableCell>}
                                {!disableCompleted && <TableCell align='right'>
                                    <Checkbox
                                        disabled={infoMode}
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
            {inputMode && <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
                <AddSetButton text="Добавить подход" onClick={e => addSet(item)} />
            </Box>}
        </Box>
    </Paper>
}

export default SetsTable;