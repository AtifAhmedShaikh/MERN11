import axios from "axios"
import { useEffect, useState } from "react"
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts(res.data)
    })
  }, []);
  return (
    <div className="flex justify-center  flex-col gap-3 w-full items-center">
      Posts
      {/* {posts.map(post => {
        return <div key={post.id} className="px-3 bg-gray-100 flex w-fit flex-col rounded-md hover:animate-pulse hover:">
          <p className="">
            Title : {post.title}
          </p>
          <p>
            Body : {post.body}
          </p>
        </div>
      })} */}

    </div>
  )
}

export default Posts