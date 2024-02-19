import React, { FC } from 'react';

import Benefits from './components/Benefits';
import Navigation from './components/Navigation';
import Info from './components/Info';

import { IFooterProps } from "./types";
import * as SC from "./styles";

const Footer:FC<IFooterProps> = (props) => {
    const { showAdBlock = true } = props;

    return (
        <SC.Container>
            { showAdBlock && <Benefits /> }
            <Navigation />
            <Info />
        </SC.Container>
    );
}

export default Footer;