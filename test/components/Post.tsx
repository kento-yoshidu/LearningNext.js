import Link from "next/link"
import type { POST } from "../types/types"

const Post = ({ id, title }: POST) => {
  return (
    <div>
      <span>{id}</span>

      {' : '}

      <Link href={`/posts/${id}`}>
        <a className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
          {title}
        </a>
      </Link>

    </div>
  )
}

export default Post
