import IListItemProps from './Interfaces'
import './ListItem.css'

export const Listitem = ({...props}:IListItemProps)=> {
  return (
    <div className='ListItem' >
        <h1 className='ListItem___text'>{props.content}</h1>
    </div>
  )
}
