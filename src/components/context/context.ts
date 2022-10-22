import {createContext,useContext } from 'react'
import { Payload } from '../MasterDetail';
interface IContext{
    detail:Payload;
    updateDetail:React.Dispatch<React.SetStateAction<Payload>>
  }

  export const defaulstate={
    detail:{payload:{content:'hello'}},
  }

  export const DetailContext=createContext<IContext>({detail:defaulstate.detail,updateDetail:()=>{}})

  export const useDetailContext = () => useContext(DetailContext)
  