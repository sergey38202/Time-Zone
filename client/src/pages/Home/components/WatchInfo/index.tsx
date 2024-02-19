import React, { FC } from 'react';

import Button from '../../../../components/Button';

import { IWatchInfoProps } from './types';
import * as SC from "./styles";

const WatchInfo: FC<IWatchInfoProps> = (props) => {
    const { title, description, image } = props;

    return (
        <SC.Container>
            <SC.TextWrapper>
                <SC.Title>{ title }</SC.Title>
                <SC.Description>{ description }</SC.Description>
                <Button variant="SECONDARY" size="MEDIUM" to="/">SHOW WATCHES</Button>
            </SC.TextWrapper>
            <SC.ImageWrapper>
                <img src={image} height={549} width={555} alt="Watch" />
            </SC.ImageWrapper>
        </SC.Container>
    );
}

export default WatchInfo;