import React from 'react';
import { TimeLineProps } from '../../interfaces/interface';

import './TimeLine.scss';

const TimeLine: React.FC<TimeLineProps> = ({ num, last, clicked, setClicked }: TimeLineProps) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const btID = Number(e.currentTarget.attributes[0].value);
        setClicked(btID);
    };

    const renderTimeLine = (): JSX.Element[] => {
        const list: JSX.Element[] = [];
        let isDisabled;
        for (let i = 1; i < num + 1; i++) {
            isDisabled = i > last;
            list.push(
                <div
                    key={i}
                    id={String(i)}
                    className={`node ${i === clicked ? 'clicked' : ''} ${isDisabled ? 'disabled' : ''}`}
                    onClick={handleClick}
                >
                    <span>{i}</span>
                    {!isDisabled && (
                        <>
                            <div className="large-circle" />
                            {/* <div className="thick-circle" /> */}
                        </>
                    )}
                </div>,
            );
            if (i !== num) list.push(<div className={`link ${i > last ? 'disabled' : ''}`}></div>);
        }
        return list;
    };

    return (
        <div className="time-line">
            <div className="opacity-overflow" />
            {renderTimeLine()}
            <div className="opacity-overflow" />
        </div>
    );
};

export default TimeLine;
