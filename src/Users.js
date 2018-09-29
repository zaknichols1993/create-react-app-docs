import React from 'react';

// Destructuring used in the the function parameters.
// instead of passing props and defining them in a variable
// we can destructure and grab the users only. Very useful, but
// challenging concept.

const Users = ({users}) => {
    const userList = users.map(user => {
      return (
      <div className="user" key={user.id}>
        <div> id: {user.id} </div>
        <div> Name: {user.name} </div>
        <div> Email: {user.email} </div>
        <div> company: {user.company.name} </div>
        <div> Website: {user.website} </div>
      </div>
      )
    })
    return(
      <div className="users">
        {userList}
      </div>
    )
  }


export default Users;
