import Layout from '../components/layout'
import Post from "../components/Post"
import type { POST } from '../types/types'
import { getAllPostsData } from '../lib/fetch'
import { GetStaticProps } from 'next'

const BlogPage = ({ posts }: { posts: POST[] }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-10">Blog Page</p>

      <ul>
        {posts && posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()

  return {
    props: {
      posts
    }
  }
}
