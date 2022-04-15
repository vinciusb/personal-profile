import React from 'react';
import { PageType } from '../../interfaces/interface';
import { useAppSelector } from '../../Store/hook';
import { selectPage } from '../../Store/slices/pages';
import ClassesPage from '../Pages/ClassesPage/ClassesPage';
import HomePage from '../Pages/HomePage/HomePage';
import ProgressPage from '../Pages/ProgressPage/ProgressPage';

import './DashBoard.scss';

const DashBoard: React.FC = () => {
    const page = useAppSelector(selectPage);

    const pages: { [page: number]: JSX.Element } = {
        [PageType.Home]: <HomePage className="page" />,
        [PageType.Progress]: <ProgressPage className="page" />,
        [PageType.Classes]: <ClassesPage className="page" />,
    };
    return <div className="DashBoard">{pages[page]}</div>;
};

export default DashBoard;
