import React, { useEffect, useRef, useState } from 'react';
import { Box } from "@mui/system";
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { DatesIsEquals, GetDaysByRange } from '../../utils/DateUtils';

const id_prefix = "calendar-element"

const DateSelector = ({ startDaysCount, endDaysCount, selectedDate, onSelectDate }) => {
    const cellRefs = useRef([]);
    const sliderRef = useRef(null)
    const selectedDateRef = useRef(null)
    const theme = useTheme();
    const days = GetDaysByRange(startDaysCount, endDaysCount);

    const [triggerElementId, updateTriggerElementId] = useState(null)

    useEffect(() => {
        updateTriggerElementId(selectedDateRef.current.id)
    }, [selectedDate])

    useEffect(() => {
        if (triggerElementId != null)
            alignWeek();
    }, [triggerElementId])

    const alignWeek = () => {
        const element = selectedDate.getDay() == 0 ? cellRefs.current[6] : cellRefs.current[selectedDate.getDay() - 1]
        const triggerElement = document.getElementById(triggerElementId);
        console.log(cellRefs)
        console.log(triggerElement.offsetLeft)
        sliderRef.current.scrollTo(triggerElement.offsetLeft - element.offsetLeft, 0)
    }

    const onScroll = () => {
        const prevTrigger = cellRefs.current[0];
        const triggerElement = document.getElementById(triggerElementId);
        const index = triggerElementId.replace(/\D/g, "");

    }

    return <div>
        <Box sx={{
            p: 0,
            display: 'flex',
            width: "100%",
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            flexDirection: 'column',
            flexFlow: "row wrap"
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: "100%"
            }}>
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вск"].map((date, idx) => <Box key={idx} sx={{
                    display: 'flex',
                    p: 1,
                    width: "calc(100% / 7)",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography color="secondary">{date}</Typography>
                </Box>)}
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: "100%",
                height: "50px",
                position: "relative"
            }}>
                {[1, 2, 3, 4, 5, 6, 7].map((index, idx) => <Box ref={el => cellRefs.current[idx] = el} key={idx} sx={{
                    display: 'flex',
                    p: 1,
                    width: "calc(100% / 7)",
                    height: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                </Box>)}
                <Box ref={sliderRef}
                    onTouchEnd={alignWeek}
                    onScroll={onScroll}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        overflowX: "scroll",
                    }}>
                    {days.map((date, index) => <Box
                        id={`${id_prefix}-${index}`}
                        ref={(el) => {
                            if (DatesIsEquals(selectedDate, date))
                                selectedDateRef.current = el
                        }}
                        key={index}
                        sx={{
                            display: 'inline-block',
                            p: 1,
                            width: "calc(100% / 7)",
                            height: "100%",
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onClick={() => onSelectDate(date)}>
                        <Box
                            sx={{
                                display: 'flex',
                                height: "100%",
                                justifyContent: 'center',
                                alignItems: "center",
                                borderRadius: "50%",
                                backgroundColor: DatesIsEquals(selectedDate, date) ? theme.palette.secondary.dark : "transient"
                            }}>
                            <Typography color="secondary" variant='caption'>{date.getDate()}</Typography>
                        </Box>
                    </Box>)}
                </Box>
            </Box>
        </Box>
    </div>
}

export default DateSelector;