import React, { useState } from 'react';
import { ClassesPageProps } from '../../../interfaces/interface';
import { useAppSelector } from '../../../Store/hook';
import { selectPeriods } from '../../../Store/slices/classes';
import DateSchedule from '../../DateSchedule/DateSchedule';
import TimeLine from '../../TimeLine/TimeLine';

import './ClassesPage.scss';

const ClassesPage: React.FC<ClassesPageProps> = ({ className }: ClassesPageProps) => {
    const { last, periods } = useAppSelector(selectPeriods);
    const [clicked, setClicked] = useState(last);

    const changePeriod = (id: number) => {
        if (id <= last) setClicked(id);
    };

    return (
        <div className={'classes-page ' + className}>
            <div className="periods secao">
                <TimeLine num={Object.keys(periods).length} last={last} clicked={clicked} setClicked={changePeriod} />
                <DateSchedule interval={[17, 21]} period={periods[clicked]} />
            </div>
        </div>
    );
};

export default ClassesPage;
