import { useContext,createContext } from "react";
import { Payload } from "../components/MasterDetail";
export type TDetailContext={
    detail:Payload
} 
export const defaultDetail={payload:{content:'Hello'}}
export const DetailContext=createContext<TDetailContext>({
    detail:defaultDetail
})

export const useDetailContext=()=>useContext(DetailContext);
