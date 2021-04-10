/* eslint-disable react/prop-types */
import React from 'react';

export default function Users({ users,openUser,setOpenUser }){
  
    return (
      <div>
      {users.map(user =>{
        console.log(user)
        return (
          <div className="user-account" key={user.userId}>
            <img className="user-image" src={user.image} />
            <h3>{user.name}</h3>
            <button onClick={() => setOpenUser(!openUser)}>Open</button>
          </div>
       )})}
      </div>

    );
}