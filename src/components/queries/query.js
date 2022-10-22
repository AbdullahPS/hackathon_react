import { gql } from "apollo-boost";
export const fbQuery=gql`
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