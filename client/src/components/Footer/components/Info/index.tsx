import React from 'react';

import HeartIcon from "../../../../assets/heart-filled.svg";
import TwitterIcon from "../../../../assets/twitter.svg";
import FacebookIcon from "../../../../assets/facebook.svg";
import LinkedinIcon from "../../../../assets/linked-in.svg";
import InstagramIcon from "../../../../assets/instagram.svg";
import useGetCurrentYear from '../../../../hooks/useGetCurrentYear';

import * as SC from "./styles";

const Info = () => {
    const currentYear = useGetCurrentYear();

    return (
        <SC.Container>
                <SC.Text>
                    Copyright ©{ currentYear } All rights reserved | This template is made with
                    <img src={HeartIcon} width={15} height={15} />
                    by
                    <SC.InfoLink>Sergey Khachikyan</SC.InfoLink>
                </SC.Text>
            <SC.SocialNetworkWrapper>
                <img src={TwitterIcon} width={25} height={25} alt="Twitter" />
                <img src={FacebookIcon} width={25} height={25} alt="Facebook" />
                <img src={LinkedinIcon} width={25} height={25} alt="Linkedin" />
                <img src={InstagramIcon} width={25} height={25} alt="Instagram" />
            </SC.SocialNetworkWrapper>
        </SC.Container>
    );
}

export default Info;