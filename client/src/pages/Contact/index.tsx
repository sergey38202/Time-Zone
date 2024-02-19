import React from 'react';

import Page from '../../layouts/Page';
import Main from './components/Main';
import Form from './components/Form';

import * as SC from "./styles";

const Contact = () => {
    return (
        <Page title="Contacts">
            <SC.Container>
                <Main />
                <Form />
            </SC.Container>
        </Page>
    );
}

export default Contact;