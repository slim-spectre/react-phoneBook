import type { NewUser } from "./UserInterface";

export interface PhoneBookProps {
  handleAddButton : (user : NewUser) => void;
}