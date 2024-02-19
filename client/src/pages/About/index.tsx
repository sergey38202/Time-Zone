import React from 'react';

import Page from '../../layouts/Page';
import Info from './components/Info';
import { INFO } from './constants';

import * as SC from "./styles";

const About = () => {
    return (
        <Page title="About Us">
            <SC.Container>
                { INFO.map((info) => (
                    <Info key={info.id} title={info.title} text1={info.text1} text2={info.text2} />
                )) }
            </SC.Container>
        </Page>
    );
}

export default About;