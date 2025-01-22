import React, { useState } from 'react'

function Demo() {
  const [data,setData] = useState("Welcome To My Site");  
  const [search,setSearch] = useState();  
  console.log(search)
  const Submit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
    <div>Demo {search} </div>
    
    <form onSubmit={Submit} method="post">
        <input type="search" onChange={(e)=>{setSearch(e.target.value)}} name="search" id="search" />
        <button type='submit' >Submit</button>
    </form>

    <button onClick={()=>{setData("VIT")}}>Change</button>
    </>
  )
}

export default Demo