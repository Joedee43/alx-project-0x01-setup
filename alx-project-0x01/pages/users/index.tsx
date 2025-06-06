import React from "react"
import { UserProps } from "@/interfaces"
import UserCard from "@/components/common/UserCard"

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

export default Users
