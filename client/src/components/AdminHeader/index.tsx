import React from 'react';

import * as SC from "./styles";
import { ADMIN_ROUTES } from '../../constants/routes';

const AdminHeader = () => {
    return (
        <SC.Container>
            <SC.AdminHeaderLink to={ADMIN_ROUTES.home}>Users</SC.AdminHeaderLink>
            <SC.AdminHeaderLink to={ADMIN_ROUTES.products}>Products</SC.AdminHeaderLink>
        </SC.Container>
    );
}

export default AdminHeader;