export interface ILinkData {
    id: number;
    title: string;
    path: string;
}

export interface INavigationRowProps {
    mainTitle: string;
    links: ILinkData[];
}