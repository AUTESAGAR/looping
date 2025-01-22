import React, { useEffect, useState } from 'react'
import User from './User'
import Demo from './Demo';

function App() {
  const [data,setData] = useState([]);
  console.log(data);
  useEffect(()=>{
    fetch("http://localhost:1000")
    .then((data)=>{ return data.json()})
    .then((users)=>{setData(users.userData);})
  },[])

  return (
    <>
    App
      <User userData={data} />
      <Demo />
    </>
  )
}

export default App