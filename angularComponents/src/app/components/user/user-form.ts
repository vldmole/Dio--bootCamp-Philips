import { User } from "./model/user.model";

export interface IUserForm
{
   setCurrentUser(user: User): void;
   getCurrentUser(): User;
   reset(): void;
}