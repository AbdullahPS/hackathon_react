import React, { ReactElement, useState } from 'react';
import './Masterdetail.css'

export type Payload = Record<string, any>;

export interface ItemProps {
	payload: Payload;
}

export const Item: React.FC<ItemProps> = (props) => {
	return <h1>{props.children}</h1>;
}

export interface DetailProps {
	children: (payload: Payload) => JSX.Element;
}

export const Detail: React.FC<DetailProps> = (props) => {
	return <></>
}

export interface MasterDetailProps {
	children?: ( ReactElement<ItemProps>)[];
}

export const MasterDetail: React.FC<MasterDetailProps> = ({ children = [] }) => {
	const [detail,setDetail]=useState('');
	const displayDetail=()=>{
		if(detail!=='')
		return detail;
		else return 'please click something '
	}

	return (
		<div className='container'>
			<div className='list'>{children.filter(child => child.type === Item).map(child=><div onClick={()=>setDetail(child.props.payload.content)}>{child}</div>)}</div>
			<div className='detail'>{displayDetail()}</div>
		</div>
	);
};
