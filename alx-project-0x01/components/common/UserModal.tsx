import React, { useState } from "react"
import { UserData, UserModalProps } from "@/interfaces"

const emptyUser: UserData = {
  id: Date.now(),
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>(emptyUser)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    onSubmit(formData)
    setFormData(emptyUser)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 font-semibold">Add New User</h2>
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <input name="username" placeholder="Username" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <input name="website" placeholder="Website" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded text-gray-700">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  )
}

export default UserModal
