import { randomInt } from 'crypto';
import React, { useEffect, useState } from 'react';
import { DateScheduleProps } from '../../interfaces/interface';

import './DateSchedule.scss';

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

const colors = [
    [
        [0, 102, 255],
        [96, 192, 255],
    ],
    [
        [255, 38, 0],
        [255, 120, 96],
    ],
    [
        [0, 255, 21],
        [154, 255, 96],
    ],
    [
        [255, 187, 0],
        [255, 239, 96],
    ],
    [
        [234, 0, 255],
        [210, 96, 255],
    ],
    [
        [0, 255, 234],
        [96, 236, 255],
    ],
];

const dayConverter = (day: string): number => {
    switch (day) {
        case 'mon':
            return 2;
        case 'tue':
            return 3;
        case 'wed':
            return 4;
        case 'thu':
            return 5;
        case 'fri':
            return 6;
        default:
            return -1;
    }
};

const getRGBString = (id: number, gradID: number) => {
    return `rgb(${colors[id][gradID][0]},${colors[id][gradID][1]},${colors[id][gradID][2]})`;
};

const DateSchedule: React.FC<DateScheduleProps> = ({ interval, period }: DateScheduleProps) => {
    const dif = interval[1] - interval[0];

    const renderDays = (): JSX.Element[] => {
        const list: JSX.Element[] = [];
        days.forEach((d, i) => {
            list.push(<th style={{ gridRow: 1, gridColumn: 3 + i }}>{d}</th>);
        });
        return list;
    };

    const renderHours = (): JSX.Element[] => {
        const list: JSX.Element[] = [];
        for (let a = 0, i = interval[0]; i <= interval[1]; i++, a++) {
            list.push(<h1 style={{ gridRow: 2 + 7 * a, gridColumn: 1, alignSelf: 'center' }}>{`${i}:00`}</h1>);
            list.push(<div className="hour-div" style={{ gridRow: 2 + 7 * a, gridColumn: '2 / -1' }} />);
        }
        return list;
    };

    const renderClasses = (): JSX.Element[] => {
        const list: JSX.Element[] = [];
        period.classes.forEach((c, cID) => {
            c.date.forEach((date, dID) => {
                const dayIndex = dayConverter(date.day);
                const fRow = (date.hour[0] - interval[0]) * 7 + 2;
                const lRow = (date.hour[2] - interval[0]) * 7 + (date.hour[3] - date.hour[1]) / 10 + 3;

                list.push(
                    <div
                        className="class"
                        style={{
                            gridColumn: dayIndex + 1,
                            gridRow: `${fRow} / ${lRow}`,
                            backgroundImage: `linear-gradient(to right, ${getRGBString(cID, 0)}, ${getRGBString(
                                cID,
                                1,
                            )})`,
                        }}
                    >
                        {c.name}
                    </div>,
                );
            });
        });
        return list;
    };

    return (
        <div
            className="date-schedule"
            style={{ gridTemplateRows: `40px repeat(${dif}, 3px auto auto auto auto auto auto) 3px` }}
        >
            <th>HOUR</th>
            {renderDays()}
            {renderHours()}
            {renderClasses()}
        </div>
    );
};

export default DateSchedule;
