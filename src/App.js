import React from 'react';
import AddUser from './components/USER/AddUser';
import UserList from './components/USER/UserList';
import { useState } from 'react';
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandeler = (uName, uAge) => {
    setUserList((prevUserList) =>{
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandeler} />
      <UserList users = {userList} />
    </div>
  );
}
export default App;
