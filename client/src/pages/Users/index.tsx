import React, { FC, useEffect } from 'react';

import * as SC from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/features/user';
import { RootState } from '../../store';

const Users: FC = () => {
    const users = useSelector((state: RootState) => state.user.users);
    const status = useSelector((state: RootState) => state.user.status);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchUsers() as any);
        }
      }, [dispatch, status]);
    
      if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error: Unable to fetch users</div>;
      }

      console.log('users', users);

    return (
        <SC.Container>
            <SC.Description>Users:</SC.Description>
            {users?.map((user) => <SC.Title key={user._id}>{ user.username }</SC.Title>)}
        </SC.Container>
    );
};

export default Users;