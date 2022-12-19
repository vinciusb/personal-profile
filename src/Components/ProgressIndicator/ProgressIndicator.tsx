import React from 'react';
import { ProgressIndicatorProps } from '../../interfaces/interface';
import './ProgressIndicator.scss';

const radius = 50 * Math.sqrt(2);

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
    children,
    title,
    className,
    angle,
    colors,
    nSec,
    percentage,
    dividerWidth,
}: ProgressIndicatorProps) => {
    const renderSections = (nSec: number) => {
        const a = angle / nSec;
        const b = angle / 2 - 90;
        return Array.from({ length: nSec + 1 }, (_, i) => (
            <div
                className="divider"
                style={{
                    transform: `rotate(${i * a - b}deg)`,
                    top: `calc(50% - ${dividerWidth} / 2)`,
                    height: `${dividerWidth}px`,
                }}
            ></div>
        ));
    };

    const listBetween = (start: number, end: number): string => {
        const options = [
            [0, 1],
            [0, 0],
            [1, 0],
            [1, 1],
        ];

        const sID = start > 225 ? 0 : start > 135 ? 1 : 2;

        const limits = [225, 135, 45, -45];

        let i = sID,
            acc = '';
        while (i < 4 && end < limits[i]) {
            acc += `${options[i][0] * 100}% ${options[i][1] * 100}%,`;
            i++;
        }

        return acc;
    };

    const nComplete = percentage > 1 ? nSec : percentage < 0 ? 0 : Math.floor((percentage * nSec) / 1);

    const anglePerColor = angle / colors.length;
    const shadeAngle = anglePerColor * 0.35;
    const gradient = `conic-gradient(from ${-angle / 2}deg,${colors.map(
        (color, id, self) =>
            ` ${color} ${id ? `${anglePerColor * id + shadeAngle}deg` : ''} ${
                anglePerColor * (id + 1) - (id === self.length - 1 ? 0 : shadeAngle)
            }deg`,
    )}, transparent ${angle}deg)`;

    const radAngle = (angle / 180) * Math.PI;
    const startAngle = (Math.PI + radAngle) / 2;
    const finalAngle = -(radAngle - Math.PI) / 2;
    const middleTerms = angle > 270 ? '0% 100%, 0% 0%, 100% 0%, 100% 100%,' : angle >= 90 ? '0% 0%, 100% 0%,' : '';
    const innerPath = `polygon(50% 50%, ${Math.cos(startAngle) * radius + 50}% ${
        -Math.sin(startAngle) * radius + 50
    }%, ${middleTerms} ${Math.cos(finalAngle) * radius + 50}% ${-Math.sin(finalAngle) * radius + 50}%)`;

    const finalInnerAngle = startAngle - ((nComplete * angle) / (nSec * 180)) * Math.PI;
    const outterMiddleTerms = listBetween(angle / 2 + 90, angle / 2 + 90 - (angle / nSec) * nComplete);
    const outterPath = `polygon(50% 50%, ${Math.cos(startAngle) * radius + 50}% ${
        -Math.sin(startAngle) * radius + 50
    }%, ${outterMiddleTerms} ${Math.cos(finalInnerAngle) * radius + 50}% ${-Math.sin(finalInnerAngle) * radius + 50}%)`;

    return (
        <>
            <div className="progress-indicator">
                <div className="inner-circle" style={{ clipPath: innerPath }}></div>
                <div className="outter-circle" style={{ background: gradient, clipPath: outterPath }}></div>
                <div className={`${className} center`}>{children}</div>
                {renderSections(nSec)}
                <span className="progress-title">{title}</span>
            </div>
        </>
    );
};

export default ProgressIndicator;
