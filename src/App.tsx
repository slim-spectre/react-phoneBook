import './App.css'
import { useState } from 'react'
import type { NewUser } from './interfaces/UserInterface';
import PhoneBook from './components/PhoneBook';
import { type UserInterface } from './interfaces/UserInterface';
import UserList from './components/UserList';
import { useRef } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [currentValue,setCurrentValue] = useState<string>("");
  const nextId = useRef<number>(1);
  const filteredUsers = users.filter(u => u.surname.toLowerCase().startsWith(currentValue.toLowerCase()))

  const addUserHandler = (user : NewUser) => {
    const newUser : UserInterface = {
      ...user,
      id : nextId.current
    }
    setUsers([...users, newUser])
    nextId.current += 1;
  }

  const updateUserHandler = (user : UserInterface) => {
    setUsers(users.map(u => u.id === user.id ? user : u))
  }
  const deleteUserHandler = (id : number) => {
    setUsers(users.filter(u => u.id !== id));
  }

  const handleChangeValue = (value : string) => {
    setCurrentValue(value)
  }


  return (
    <>
    <div className='bg-emerald-500 min-h-screen flex flex-col items-center'>
      <PhoneBook handleAddButton={addUserHandler}></PhoneBook>
      <SearchBar setNewValue={handleChangeValue}></SearchBar>
      <UserList handleDelete={deleteUserHandler} handleUpdate={updateUserHandler} users={filteredUsers}></UserList>
    </div>
    </>
  )
}

export default App
