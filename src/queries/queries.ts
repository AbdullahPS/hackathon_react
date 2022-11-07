import { gql } from "apollo-boost";
export const fbQuery=gql`
query { 
    search(query:"/facebook/ is:public" type:REPOSITORY, first:15){
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