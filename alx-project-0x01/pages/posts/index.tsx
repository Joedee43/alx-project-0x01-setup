import React from "react"
import PostCard from "@/components/common/PostCard"

const PostsPage: React.FC = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <PostCard />
    </main>
  )
}

export default PostsPage
