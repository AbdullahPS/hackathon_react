import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-apollo-hooks';
import { Detail, Item, MasterDetail, Payload } from './MasterDetail';
import {fbQuery} from './queries/query'

interface INode{
createdAt:Payload,
name:string

}
interface IChild{
  node:INode
}
export const GitHubList: React.FC = () => {
  const {data,loading,error}=useQuery(fbQuery)
  const [searchData,setSearchData]=useState<IChild[]>([]);
  useEffect(()=>{
data&&setSearchData(data.search?.edges)


  },[data])

  if(searchData.length){
  return  (
  
  <MasterDetail>
    {[...searchData.map(child=><Item payload={{content:child.node.createdAt}} >{child.node.name}</Item>),<Detail>
      {(payload) => payload.content}</Detail>].map(child=>child)}
  
      </MasterDetail>
      
);}
 

 
  else if (loading)
  return <div>Loading....</div>

 else  return <div>something wrong happened</div>
};
