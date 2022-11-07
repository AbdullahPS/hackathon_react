import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { fbQuery } from '../queries/queries';
import { Detail, Item, MasterDetail } from './MasterDetail';
export const GitHubList: React.FC = () => {


  interface node{
    node:searchArray
  }

  interface searchArray{
    createdAt:string,
    name:string,
    url:string

  }

  const {data,loading,error}=useQuery(fbQuery)
  const [fbList,setfbList]=useState<node[]>([]);

  useEffect(()=>{
data && setfbList(data.search.edges)
  },[data])

if(data&& fbList.length &&!error)
  return <MasterDetail>
     
    {[...fbList.map(child=><Item payload={{content:`URL:${child.node.url} Created At:${child.node.createdAt}`}}>{child.node.name}</Item>),<Detail>{(payload) => payload.content}</Detail>].map(child=>child)}
  </MasterDetail>

if(loading)
  return <div>Loading....</div>

else
 return <div>Ooops.... something went wrong</div>

};


