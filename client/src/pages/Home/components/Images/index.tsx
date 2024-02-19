import React from 'react';

import * as SC from "./styles";

const Images = () => {
    return (
        <SC.Container>
                <SC.Image1 />
                <SC.Image2 />
            <SC.ImageGroup>
                <SC.Image3 />
                <SC.Image4 />
            </SC.ImageGroup>
        </SC.Container>
    );
}

export default Images;