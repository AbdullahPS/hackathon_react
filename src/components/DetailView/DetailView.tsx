import React from 'react'
import './Detail.css'
import IDetailViewProps from './interfaces'
export const DetailView = ({...props}:IDetailViewProps)=> {
  return (
    <div className='detail__container'>
      <h1 className='detail__text'>{props.child()}</h1>
    </div>
     )
}
