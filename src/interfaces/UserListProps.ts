import type { UserInterface } from './UserInterface';

export interface UserListProps {
  users: UserInterface[];
  handleUpdate: (user: UserInterface) => void;
  handleDelete : (id : number) => void;
}