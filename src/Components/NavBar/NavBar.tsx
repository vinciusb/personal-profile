import React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconProp } from '../../interfaces/interface';

import './NavBar.scss';
import { changePage, selectPage } from '../../Store/slices/pages';
import { useAppDispatch, useAppSelector } from '../../Store/hook';

const icons: IconProp[] = [
    { title: 'Home', name: 'home' },
    { title: 'Progress', name: 'flow-linear' },
    { title: 'Classes', name: 'book' },
];

const NavBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(selectPage);

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        const btID = Number(e.currentTarget.attributes[0].value);
        dispatch(changePage(btID));
    };

    const renderIcons = (): JSX.Element[] => {
        const list: JSX.Element[] = [];
        icons.forEach((icon, id) => {
            list.push(
                <Icon
                    id={String(id)}
                    key={id}
                    className={`icon ${page === id ? 'current-icon' : ''}`}
                    icon={icon.name}
                    htmlTitle={icon.title}
                    onClick={handleClick}
                />,
            );
        });
        return list;
    };

    return (
        <div className="NavBar">
            <div className="logo">VBF</div>
            <div className="dashboard-icons">{renderIcons()}</div>
            <Icon className="icon" icon="cog" htmlTitle="Settings" onClick={() => null} />
        </div>
    );
};

export default NavBar;
