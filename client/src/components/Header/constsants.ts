import { PUBLIC_ROUTES } from '../../constants/routes';
import { IHeaderPaths } from '../types';

export const HEADER_LINKS: IHeaderPaths[] = [
    { id: 1, title: 'Home', path: PUBLIC_ROUTES.home, },
    { id: 2, title: 'Shop', path: PUBLIC_ROUTES.shop },
    { id: 3, title: 'About', path: PUBLIC_ROUTES.about },
    { id: 4, title: 'Contact', path: PUBLIC_ROUTES.contact },
];