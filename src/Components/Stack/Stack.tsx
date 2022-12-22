import React from 'react';
import { StackProps } from '../../interfaces/interface';
import './Stack.scss';

const Stack: React.FC<StackProps> = ({ children, level }: StackProps) => {
    return (
        <div className="stack">
            {children}
            <div className="level">
                <div className={`${level === 1 ? 'low' : level === 2 ? 'medium' : 'high'}`}></div>
            </div>
        </div>
    );
};

export default Stack;
