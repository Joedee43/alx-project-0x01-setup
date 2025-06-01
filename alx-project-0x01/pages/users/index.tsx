import React from "react"
import Button from "@/components/common/Button"

const UsersPage: React.FC = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <Button title="View Profile" styles="rounded-md" />
    </main>
  )
}

export default UsersPage
