import React from 'react'

function User(props) {
    const UserData = props.userData;
    console.log(UserData);
  return (
    <>
    <h1>User Component</h1>
        {UserData?.map((data,i)=>{
            return (
            <div key={i}>
                <img src={`http://localhost:1000/${data.photo}`} alt="" height={50}/>
                {data.name}
                {data.mobile}
            </div>
        );
        })}

    </>
  )
}

export default User