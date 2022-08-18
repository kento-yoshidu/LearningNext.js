import type { NextPage } from 'next'

import { useQuery } from '@apollo/client'
import { POST_QUERY } from './api/gql'

const Home: NextPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <h1>Next.js</h1>
    </>

  )
}

export default Home

export const getServerSideProps = () => {
  const { loading, error, data } = useQuery(POST_QUERY);

  return {
    props: { data }
  }
}
