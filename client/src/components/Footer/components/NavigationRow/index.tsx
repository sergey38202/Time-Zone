import React, { FC } from 'react';

import { INavigationRowProps } from './types';
import * as SC from "./styles";

const NavigationRow: FC<INavigationRowProps> = (props) => {
    const { mainTitle, links } = props;

    return (
        <SC.Container>
            <SC.Title>{ mainTitle }</SC.Title>
            <SC.LinkWrapper>
                {links.map((link) => (
                    <SC.NavigationLink key={link.id} to={link.path}>
                        { link.title }
                    </SC.NavigationLink>
                ))}
            </SC.LinkWrapper>
        </SC.Container>
    );
}

export default NavigationRow;