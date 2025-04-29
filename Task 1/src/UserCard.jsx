import React from 'react'

const UserCard = (props) => {
  return (
    <div className='bg-blue-100 w-100 h-60 flex flex-col items-center justify-center rounded-2xl'>
        <img className='w-20 rounded-full mb-10' src={props.avatar}></img>
        <span>Name : {props.name}</span>
        <span>Age : {props.age}</span>
        <span>Location : {props.location}</span>
    </div>
  )
}

export default UserCard;