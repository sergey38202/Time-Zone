import React from 'react';

import NavigationRow from '../NavigationRow';

import { FOOTER_ROUTES } from './constants';
import * as SC from "./styles";

const Navigation = () => {
    return (
        <SC.Container>
            <SC.TextWrapper>
                <SC.Title>Time Zone</SC.Title>
                <SC.Info>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</SC.Info>
            </SC.TextWrapper>
            <SC.LinkWrapper>
                { FOOTER_ROUTES.map((el) => (
                    <NavigationRow mainTitle={el.title} links={el.links} />
                )) }
            </SC.LinkWrapper>
        </SC.Container>
    );
}

export default Navigation;