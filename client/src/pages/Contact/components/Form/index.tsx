import React from 'react';

import Button from '../../../../components/Button';
import FormInfo from '../FormInfo';

import { FORM_INFO } from './constants';
import * as SC from "./styles";

const Form = () => {
    return (
        <SC.Container>
            <SC.Title>Get in Touch</SC.Title>
            <SC.FormWrapper>
                <SC.Form>
                    <SC.TextArea placeholder="Enter you message"></SC.TextArea>
                    <SC.InputWrapper>
                        <SC.Input type="text" placeholder="Enter your name" />
                        <SC.Input type="email" placeholder="Email" />
                    </SC.InputWrapper>
                    <SC.Input type="text" placeholder="Enter subject" />
                </SC.Form>
                <div>
                { FORM_INFO.map((formInfo) => (
                    <FormInfo 
                      key={formInfo.id} 
                      image={formInfo.image} 
                      title={formInfo.title} 
                      info={formInfo.info} 
                    />
                )) }
                </div>
            </SC.FormWrapper>
            <Button type="submit" variant="SECONDARY" size="SMALL">SEND</Button>
        </SC.Container>
    );
}

export default Form;