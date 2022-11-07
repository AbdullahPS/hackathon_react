import React, { ReactElement, useState } from 'react';
import { defaultDetail, DetailContext, useDetailContext } from '../context/context';
import { DetailView } from './DetailView/DetailView';
import { Listitem } from './ListItem/Listitem';
import './MasterDetail.css'
export type Payload = Record<string, any>;

export interface ItemProps {
	payload: Payload;
}

export const Item: React.FC<ItemProps> = ({...props}) => {
 	return <Listitem content={props.children}/>;
}

export interface DetailProps {
	children: (payload: Payload) => JSX.Element;
}

export const Detail: React.FC<DetailProps> = ({...props}) => {
	const {detail}=useDetailContext();	
	return <DetailView child={()=>props.children(detail.payload)}/>
}

export interface MasterDetailProps {
	children?: (ReactElement<DetailProps> | ReactElement<ItemProps>)[];
}

export const MasterDetail: React.FC<MasterDetailProps> = ({ children = [] }) => {
	const [detail,setDetail]=useState<Payload>({...defaultDetail})
	const updateDetail=(newDetail:Payload)=>{
		setDetail(newDetail)
	  }

	return (
		<DetailContext.Provider value={{detail:detail}}>
		<div className='masterdetail__container'>
			<div className='masterdetail__list'>{children.filter(child => child.type === Item).map(child=><div onClick={()=>updateDetail(child.props)}>{child}</div>)}</div>
			<div className='masterdetail__detail'>{children.filter(child => child.type === Detail)[0]}</div>
		</div>
		</DetailContext.Provider>
	);
};
