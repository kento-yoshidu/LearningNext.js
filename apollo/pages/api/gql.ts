import { gql } from "@apollo/client"

export const POST_QUERY = gql`
  query {
    pokemon(name: "Pikachu") {
      id
      name
    }
  }
`
