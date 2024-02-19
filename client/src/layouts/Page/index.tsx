import React, { FC } from 'react';

import Home from './Home';

import { IPagesProps } from './types';
import * as SC from "./styles";

const Page: FC<IPagesProps> = (props) => {
    const { title, children } = props;

    return (
        <SC.Container>
            <Home title={title} />
            { children }
        </SC.Container>
    );
}

export default Page;