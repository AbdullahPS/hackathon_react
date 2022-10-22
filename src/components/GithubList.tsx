import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-apollo-hooks';
import { Item, MasterDetail, Payload } from './MasterDetail';
import {fbQuery} from './queries/query'

interface IChild{
createdAt:Payload,
name:string

}
export const GitHubList: React.FC = () => {
//   const {data,loading,error}=useQuery(fbQuery)
//   const [searchData,setSearchData]=useState<{node:IChild}[]>([]);
//   useEffect(()=>{
// console.log(data,loading,error);
// data&&setSearchData(data.search.edges)

//   },[data])

//   useEffect(()=>{
// console.log(searchData)    
//       },[searchData])

//   if(searchData.length)
      
  return <div></div>
  {/* </><MasterDetail>
        {searchData.map((child: {node:IChild} )=><Item payload={child.node.createdAt}>{child.node.name}</Item>)}
        </MasterDetail>
  else if (loading)
  return 
  <div>Loading....</div>

  return <div>something wrong happened</div> */}
};
