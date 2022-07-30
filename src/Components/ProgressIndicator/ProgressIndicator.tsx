import React from 'react';
import { ProgressIndicatorProps } from '../../interfaces/interface';
import './ProgressIndicator.scss';

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
    children,
    title,
    className,
}: ProgressIndicatorProps) => {
    return (
        <>
            <div className="progress-indicator">
                <div className="outter-circle"></div>
                <div className={`${className} center`}>{children}</div>
            </div>
            {/* <span>{title}</span> */}
        </>
    );
};

export default ProgressIndicator;
