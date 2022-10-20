import { gql } from "apollo-boost";

export const getFaceBookRepos=gql`
query { 
    search(query:"/facebook/" type:REPOSITORY, first:10){
      edges{
        node{
          ...on Repository{
            name
            url
            createdAt
          }
        }
      }
    }
  }
`