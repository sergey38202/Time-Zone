import React from 'react';

import { BENEFITS } from './constants';
import Benefit from '../Benefit';

import * as SC from "./styles";

const Benefits = () => {
    return (
        <SC.Container>
            {BENEFITS.map((benefit) => (
                <Benefit 
                  key={benefit.id}
                  image={benefit.image} 
                  title={benefit.title} 
                  description={benefit.description} 
                />
            ))}
        </SC.Container>
    );
}

export default Benefits;