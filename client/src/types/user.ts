export type TUserRole = 'admin' | 'user';

export interface IUserDTO {
    _id: string;
    username: string;
    email: string;
    role: TUserRole;
}