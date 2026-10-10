import { useState } from 'react'
import type { NewUser } from '../interfaces/UserInterface'
import { type PhoneBookProps } from '../interfaces/PhoneBookProps'
import { validateEmail } from '../utils/validateEmail'
import { validateName } from '../utils/validateName'
import { validateSurname } from '../utils/validateSurname'
import { validatePhone } from '../utils/validatePhone'

const PhoneBook = ({ handleAddButton }: PhoneBookProps) => {
  const [formData, setFormData] = useState<NewUser>({
    name: '',
    surname: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isNameValid = validateName(formData.name)
    const isSurnameValid = validateSurname(formData.surname)
    const isEmailValid = validateEmail(formData.email)
    const isPhoneValid = validatePhone(formData.phone)

    const isFormValid = isNameValid && isSurnameValid && isEmailValid && isPhoneValid

    if (isFormValid) {
      handleAddButton(formData)
      setFormData({
        name: '',
        surname: '',
        email: '',
        phone: '',
      })
      setErrors({
        name: '',
        surname: '',
        email: '',
        phone: '',
      })
    } else {
      setErrors({
        name: !isNameValid ? 'Invalid name' : '',
        surname: !isSurnameValid ? 'Invalid surname' : '',
        email: !isEmailValid ? 'Invalid email' : '',
        phone: !isPhoneValid ? 'Invalid phone' : '',
      })
    }
  }
  return (
    <>
      <div className=" p-4 m-5 ">
        <form className="flex gap-4 " onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your name"
          />
          {errors.name && <p>{errors.name}</p>}
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your surname"
          />
          {errors.surname && <p>{errors.surname}</p>}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your email"
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border-amber-300 rounded-xl p-2 text-black bg-green-200"
            placeholder="Enter your phone"
          />
          {errors.phone && <p>{errors.phone}</p>}
          <button type="submit" className="p-4 bg-amber-950 border-none rounded-xl cursor-pointer text-white">
            Add user
          </button>
        </form>
      </div>
    </>
  )
}

export default PhoneBook
