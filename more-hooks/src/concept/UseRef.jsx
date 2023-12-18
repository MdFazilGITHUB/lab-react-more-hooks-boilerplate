import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [count1,setCount] = useState(0)
    const count = useRef(0)

    useEffect(()=>{
        count.current += 1
    })

    

  return (
    <>
    
    <h1>No. of rerenders: {count.current} </h1>
    <button onClick={()=>{
        setCount(count1+1)
    }}>Count: {count1}</button>
    </>
  )
}

export default UseRef