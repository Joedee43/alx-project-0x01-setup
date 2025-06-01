import React from "react"
import { UserProps } from "@/interfaces"

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded-md shadow hover:shadow-lg transition-all bg-white w-full max-w-md">
      <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
      <p className="text-gray-700 mb-1">@{user.username}</p>
      <p className="text-sm text-gray-600 mb-2">{user.email}</p>
      <p className="text-sm">
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
      <p className="text-sm"><strong>Phone:</strong> {user.phone}</p>
      <p className="text-sm"><strong>Website:</strong> {user.website}</p>
      <p className="text-sm"><strong>Company:</strong> {user.company.name}</p>
    </div>
  )
}

export default UserCard
