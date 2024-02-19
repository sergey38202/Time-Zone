import React from 'react';

import Button from '../../../../components/Button';
import WatchImage from "../../../../assets/watch.png.webp";

import * as SC from "./styles";
import { PUBLIC_ROUTES } from '../../../../constants/routes';

const Main = () => {
    return (
        <SC.Container>
            <SC.TextWrapper>
                <SC.Title>Select Your New Perfect Style</SC.Title>
                <SC.Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</SC.Text>
                <Button to={PUBLIC_ROUTES.shop}>SHOW NOW</Button>
            </SC.TextWrapper>
            <SC.ImageWrapper>
                <img src={WatchImage} width={370} height={1034} />
            </SC.ImageWrapper>
        </SC.Container>
    )
}

export default Main;