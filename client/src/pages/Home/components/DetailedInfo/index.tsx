import React from 'react';

import WatchInfoImage1 from "../../../../assets/choce_watch1.png.webp";
import WatchInfoImage2 from "../../../../assets/choce_watch2.png.webp";
import WatchInfo from '../WatchInfo';

import * as SC from "./styles";

const DetailedInfo = () => {
    return (
        <SC.Container>
            <WatchInfo
             title="Watch of Choice"
             description="Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
             image={WatchInfoImage1}
            />
            <WatchInfo
             title="Watch of Choice"
             description="Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
             image={WatchInfoImage2}
            />
        </SC.Container>
    );
}

export default DetailedInfo;