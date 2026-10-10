import type { UserInterface } from "./UserInterface";

export interface UserProps extends UserInterface {
  handleUpdateUser : (user : UserInterface) => void;
  handleDeleteUser : (id : number) => void;
}