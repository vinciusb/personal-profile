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

//Pages
interface PageProps {
    className?: string;
}

type HomePageProps = PageProps;
type ProgressPageProps = PageProps;
type ClassesPageProps = PageProps;
type ContactMePageProps = PageProps;

// Redux
interface PageState {
    page: PageType;
}

export type { IconProp, PageProps, HomePageProps, ProgressPageProps, ClassesPageProps, ContactMePageProps, PageState };
