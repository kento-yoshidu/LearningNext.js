import { useQuery, gql } from "@apollo/client"

const Query = gql `
  query {
    pokemon(name: "Pikachu") {
      id
      name
    }
  }
`

const Pokemon = () => {
  const { data, loading, error } = useQuery(Query)

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (error) {
    return (
      <h1>Error has ocurred!!!</h1>
    )
  }

  return (
    <h1>Pokemon is {data.pokemon.name} !</h1>
  )
}

export default Pokemon
