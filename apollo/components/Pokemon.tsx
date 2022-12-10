import { useQuery, gql } from "@apollo/client"

const Query = gql `
  query getContribution {
    user(login: "kento-yoshidu") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
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
    <h1>成功!</h1>
  )
}

export default Pokemon
