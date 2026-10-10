import {type UserListProps } from "../interfaces/UserListProps"
import User from "./User"

const UserList = ({users, handleUpdate, handleDelete} : UserListProps) => {
  return (
    <>
    {users.map(user => <User 
    key={user.id}
    {...user}
    handleUpdateUser={handleUpdate}
    handleDeleteUser={handleDelete}></User>)}
    </>
  )
}

export default UserList