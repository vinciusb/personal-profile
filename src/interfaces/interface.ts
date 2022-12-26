import { IconName } from '@blueprintjs/core';

//enum
export enum PageType {
    Home,
    Progress,
    Classes,
}

// Icons
interface IconProp {
    title: string;
    name: IconName;
}

// TimeLine
interface TimeLineProps {
    num: number;
    last: number;
    clicked: number;
    setClicked: (id: number) => void;
}

// Date Schedule
interface DateScheduleProps {
    interval: [number, number];
    period: Period;
}

//Pages
interface PageProps {
    className?: string;
}

type HomePageProps = PageProps;
type ProgressPageProps = PageProps;
type ClassesPageProps = PageProps;

// Redux
interface PageState {
    page: PageType;
}

// Classes
interface Class {
    name: string;
    date: {
        day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri';
        hour: [number, number, number, number];
    }[];
}

interface Period {
    semester: `202${number}/${1 | 2}`;
    classes: Class[];
}

interface ClassState {
    last: number;
    periods: {
        [order: number]: Period;
    };
}

// Progress Indicator
interface ProgressIndicatorProps {
    children: JSX.Element;
    title: string;
    className: string;
    angle: number;
    colors: string[];
    nSec: number;
    percentage: number;
    dividerWidth: number;
}

// Stack
interface StackProps {
    children: JSX.Element;
    level: number;
}

// Experience
interface ExperienceProps {
    title: string;
    subTitle: string;
    period: string;
    description: string[];
    location: string;
    img: JSX.Element;
}

export type {
    IconProp,
    PageProps,
    HomePageProps,
    TimeLineProps,
    DateScheduleProps,
    ProgressPageProps,
    ClassesPageProps,
    PageState,
    ClassState,
    ProgressIndicatorProps,
    StackProps,
    ExperienceProps,
};
