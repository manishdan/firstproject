import React from 'react'
import './City.css'

const City = (props) => {
  return (
    <p>hello , I am in  {props.city} . it is {props.feature}</p>
  )
}

export default City