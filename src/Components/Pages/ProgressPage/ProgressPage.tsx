import React from 'react';
import { ProgressPageProps } from '../../../interfaces/interface';

import './ProgressPage.scss';

const ProgressPage: React.FC<ProgressPageProps> = ({ className }: ProgressPageProps) => {
    return <div className={'progress-page ' + className}></div>;
};

export default ProgressPage;
