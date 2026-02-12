import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Practice = () => {

    let [traindata,settraindata] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/smallroutes')
        .then((res)=>{
            settraindata(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <>
        <table border={1}>
            <thead>
                <th>Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Price</th>
            </thead>
            {traindata.map((item)=>{
                return(
            <tbody>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.source}</td>
                    <td>{item.destination}</td>
                    <td>{item.price}</td>
                </tr>
            </tbody>
             )})}
        </table>
    </>
  )
}

export default Practice


