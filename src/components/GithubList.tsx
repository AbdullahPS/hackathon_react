import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { getFaceBookRepos } from '../queries/facebook';
import { Item, MasterDetail } from './Masterdetail/MasterDetail';
export const GitHubList: React.FC = () => {

  const {data,error,loading}= useQuery(getFaceBookRepos)
  const [repos,setRepos]=useState([])
  interface repo{
    name:string,
    createdAt:string
  }
  useEffect(()=>{
    data&&setRepos(data.search.edges)
  },[data])
  if(loading)
  return <div>Loading......</div>
  else if (repos)
  return <MasterDetail>
    {
      repos.map((repo: { node: repo })=><Item payload={{content:repo.node.createdAt}}>{repo.node.name}</Item>)
    }
  </MasterDetail>;
  else {
    return <div>Something wrong occured</div>
  }
};
