import React from 'react';

import Main from './components/Main';
import Arrivals from './components/Arrivals';
import Images from './components/Images';
import PopularItems from './components/PopularItems';
import Video from './components/Video';
import DetailedInfo from './components/DetailedInfo';

import * as SC from "./styles";

const Home = () => {
    return (
        <SC.Container>
            <Main />
            <Arrivals />
            <Images />
            <PopularItems />
            <Video />
            <DetailedInfo />
        </SC.Container>
    );
}

export default Home