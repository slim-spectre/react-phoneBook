import type { UserInterface } from '../interfaces/UserInterface'
import { type UserProps } from '../interfaces/UserProps'
import { useState } from 'react'

const User = ({ id,
  name,
  surname,
  email,
  phone,
  handleUpdateUser,
  handleDeleteUser}: UserProps) => {
  const [formData, setFormData] = useState({ name, surname, email, phone, })
  const [isUpdating, setIsUpdating] = useState<boolean>(false)

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  const handleUpdate = () => {
    const newUser : UserInterface = {
      id : id,
      ...formData
    }
    handleUpdateUser(newUser)
    setIsUpdating(false);
  }

  const handleCancel = () => {
    setFormData({ name, surname, email, phone, })
    setIsUpdating(false)
}

const handleDelete = () => {
  handleDeleteUser(id);
}

  return (
    <div className="bg-emerald-950 p-5 m-5 rounded-3xl text-white flex gap-4">
      {!isUpdating ? (
        <div className='flex gap-4 items-center'>
          <p className="">Name : {name}</p>
          <p className="">Surname : {surname}</p>
          <p className="">Email : {email}</p>
          <p className="">Phone : {phone}</p>
          <button className="p-4 bg-amber-950 border-none rounded-xl cursor-pointer text-white" onClick={() => setIsUpdating(true)}>Update</button>
          <button
          onClick={handleDelete}
          className="p-4 bg-amber-950 border-none rounded-xl cursor-pointer text-white">
            Delete
          </button>
        </div>
      ) : (
        <div className='flex gap-4'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your name"
          />
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your surname"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your email"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your phone"
          />
          <button className="p-4 bg-amber-950 border-none rounded-xl cursor-pointer text-white" onClick={handleUpdate}>Submit</button>
          <button className="p-4 bg-amber-950 border-none rounded-xl cursor-pointer text-white" onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default User
