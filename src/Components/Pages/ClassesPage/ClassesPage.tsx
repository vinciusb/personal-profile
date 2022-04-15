import React from 'react';
import { ClassesPageProps } from '../../../interfaces/interface';

import './ClassesPage.scss';

const ClassesPage: React.FC<ClassesPageProps> = ({ className }: ClassesPageProps) => {
    return <div className={'classes-page ' + className}></div>;
};

export default ClassesPage;
