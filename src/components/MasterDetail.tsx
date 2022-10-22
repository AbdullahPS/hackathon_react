import React, { Dispatch, ReactElement,SetStateAction } from 'react';
import './Masterdetail.css';
import { useDetailContext } from '../components/context/context';

export type Payload = Record<string, any>;

export interface ItemProps {
	payload: Payload;
}

export const Item: React.FC<ItemProps> = (props) => {
	return <div className='listItem'><h1>{props.children}</h1></div>;
}
export interface DetailProps {
	children: (payload: Payload) => JSX.Element;
}

export const Detail: React.FC<DetailProps> = (props) => {
	const {detail}=useDetailContext()
	console.log(detail)
	return <div>{props.children(detail.payload)}</div>
}

export interface MasterDetailProps {
	children?: (ReactElement<DetailProps> | ReactElement<ItemProps>)[];
	setDetail:Dispatch<SetStateAction<Payload>>
	detail:Payload

}

export const MasterDetail: React.FC<MasterDetailProps> = ({ children = [] }) => {
	const {updateDetail}=useDetailContext();
	console.log(children[0].props)

	return (
		<div className='container'>
			<div className='list'>{children.filter(child => child.type === Item).map(child=><div onClick={()=>updateDetail(child.props)}>{child}</div>)}</div>
			<div className='detail'>{children.filter(child => child.type === Detail)[0]}</div>
		</div>
	);
};
