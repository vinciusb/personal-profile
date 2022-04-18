import React, { useEffect, useState } from 'react';
import { ClassesPageProps } from '../../../interfaces/interface';
import { useAppSelector } from '../../../Store/hook';
import { selectPeriods } from '../../../Store/slices/classes';
import DateSchedule from '../../DateSchedule/DateSchedule';
import TimeLine from '../../TimeLine/TimeLine';

import './ClassesPage.scss';

const ClassesPage: React.FC<ClassesPageProps> = ({ className }: ClassesPageProps) => {
    const { last, periods } = useAppSelector(selectPeriods);
    const [clicked, setClicked] = useState(last);
    const [timeRange, setTimeRange] = useState<[number, number]>([17, 17]);

    // Get the time range of the period
    useEffect(() => {
        let min = 25,
            max = 0;
        periods[clicked].classes.forEach((c) => {
            c.date.forEach((d) => {
                if (d.hour[0] < min) min = d.hour[0];
                if (d.hour[2] > max) {
                    if (d.hour[3] == 0) max = d.hour[2];
                    else max = d.hour[2] + 1;
                }
            });
        });
        setTimeRange([min, max]);
    }, [clicked]);

    const changePeriod = (id: number) => {
        if (id <= last) setClicked(id);
    };

    return (
        <div className={'classes-page ' + className}>
            <h1>College Classes per Semester</h1>
            <div className="periods secao">
                <TimeLine num={Object.keys(periods).length} last={last} clicked={clicked} setClicked={changePeriod} />
                <DateSchedule interval={timeRange} period={periods[clicked]} />
            </div>
        </div>
    );
};

export default ClassesPage;
