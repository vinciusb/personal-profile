import React, { useReducer } from 'react';
import { ProgressPageProps } from '../../../interfaces/interface';

import './ProgressPage.scss';

const N_PROJECTS = 3;

const ProgressPage: React.FC<ProgressPageProps> = ({ className }: ProgressPageProps) => {
    const [count, setCount] = useReducer((state: number, mode: boolean): number => {
        if (mode) {
            return state === N_PROJECTS - 1 ? 0 : state + 1;
        }
        return state === 0 ? N_PROJECTS - 1 : state - 1;
    }, 0);

    const renderPoints = (): JSX.Element => {
        return (
            <div className="progress-points">
                {Array.from(Array(N_PROJECTS), (_, id) => (
                    <div key={id} className={'point ' + (id === count ? 'highlighted' : '')}></div>
                ))}
            </div>
        );
    };

    return (
        <div className={'progress-page ' + className}>
            <div className="portfolio secao">
                <div id="past" className="transition-button" onClick={() => setCount(false)}>
                    {'<'}
                </div>
                <div className="main-frame"></div>
                <div id="next" className="transition-button" onClick={() => setCount(true)}>
                    {'>'}
                </div>
                {renderPoints()}
            </div>

            <div className="stacks secao"></div>
        </div>
    );
};

export default ProgressPage;
