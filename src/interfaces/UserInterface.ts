export interface UserInterface {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export type NewUser = Omit<UserInterface, 'id'>;