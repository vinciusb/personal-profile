import React, { useState } from 'react';
import { ExperienceProps } from '../../interfaces/interface';
import './Experience.scss';

const Experience: React.FC<ExperienceProps> = ({
    title,
    subTitle,
    period,
    description,
    location,
    img,
}: ExperienceProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="experience" onClick={() => setExpanded(!expanded)}>
            <div>
                {img}
                <div className="infos">
                    <h2>{title}</h2>
                    <div className="subtitle">
                        <h4>{subTitle}</h4>
                        <h4>{period}</h4>
                    </div>
                    <h4>{`@ ${location}`}</h4>
                </div>
            </div>
            {expanded && (
                <ul>
                    {description.map((str, id) => (
                        <li key={id}>{str}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Experience;
