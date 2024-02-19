import { IUserDTO } from '../../../types/user'

export interface IUserState {
    data: {
        user: IUserDTO;
        token: string;
    } | null;
    users: IUserDTO[] | null;
    status: string;
    error: string | null;
}