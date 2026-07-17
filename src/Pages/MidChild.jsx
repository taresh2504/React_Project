import React from 'react'
import Usercontext from './Context'
import { useContext } from 'react'

// Midchild.jsx

const MidChild = () => {
    let data = useContext(Usercontext)
  return (
    <>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.city}</h1>
    </>
  )
}

export default MidChild



