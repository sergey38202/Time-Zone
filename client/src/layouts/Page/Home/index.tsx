import React, { FC } from 'react';

import { IHomeProps } from './types';
import * as SC from "./styles";

const Home: FC<IHomeProps> = (props) => {
    const { title } = props;

    return (
        <SC.Container>
            <SC.MainBlock>
                <SC.Title>{ title }</SC.Title>
            </SC.MainBlock>
        </SC.Container>
    );
}

export default Home;