import React from 'react';
import './Users.css';

// Destructuring used in the the function parameters.
// instead of passing props and defining them in a variable
// we can destructure and grab the users only. Very useful, but
// challenging concept.

const Users = ({ users, deleteUser }) => {
  const userList = users.map(user => {
    if (user.age) {
      return (
        <div className="user" key={user.id}>
          <div> id: {user.id} </div>
          <div> Name: {user.name} </div>
          <div> Age: {user.age} </div>
          <div> Email: {user.email} </div>
          <div> Website: {user.website} </div>
          <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
        </div>
      )
    } else {
      return null
    }
  })
  // const userList = users.map(user => {
  //   return user.age < 40 ? (
  //     <div className="user" key={user.id}>
  //       <div> id: {user.id} </div>
  //       <div> Name: {user.name} </div>
  //       <div> Age: {user.age} </div>
  //       <div> Email: {user.email} </div>
  //       <div> company: {user.company.name} </div>
  //       <div> Website: {user.website} </div>
  //     </div>
  //   ) : null
  // })
  return (
    <div className="users">
      {userList}
    </div>
  )
}

export default Users;
