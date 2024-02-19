import React from 'react';

import Button from '../../../../components/Button';
import { PUBLIC_ROUTES } from '../../../../constants/routes';

import * as SC from "./styles";

const LeftSide = () => {
    return (
        <SC.Container>
            <SC.Wrapper>
              <SC.Title>New to our Shop?</SC.Title>
              <SC.Info>There are advances being made in science and technology everyday, and a good example of this is the</SC.Info>
              <Button to={PUBLIC_ROUTES.signUp} size="LARGE">CREATE AN ACCOUNT</Button>
            </SC.Wrapper>
        </SC.Container>
    );
}

export default LeftSide;