import React from 'react';

import WatchAdVideo from "../../../../assets/watch-ad.mp4";

import * as SC from "./styles";

const Video = () => {
    return (
        <SC.Container>
            <video width="100%" height="700" controls>
             <source src={WatchAdVideo} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
        </SC.Container>
    );
}

export default Video;