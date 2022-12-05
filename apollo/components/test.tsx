import { use } from "react"

import client from "../apollo-client"
import { gql } from "@apollo/client"

async function getData() {
  const { data } = await client.query({
    query: gql`
      query {
        pokemon(name: "Pikachu") {
          id
        }
      }
    `
  })

  return data
}

const Test = () => {
  const data = use(getData())

  return (
    <>
      <h1>test</h1>

      <p>{data.pokemon.id}</p>
    </>
  )
}

export default Test
