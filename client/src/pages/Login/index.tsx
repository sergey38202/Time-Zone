import React from 'react';

import Page from '../../layouts/Page';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

import * as SC from "./styles";

const Login = () => {
    return (
        <Page title="Login">
            <SC.Container>
                <LeftSide />
                <RightSide />
            </SC.Container>
        </Page>
    );
}

export default Login;