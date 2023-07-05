import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import Wraper from '../Helper/Wraper';
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error, setError] = useState();
  const addUserHandeler = (event) => {
    event.preventDefault()
    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid user name and age (non empty values)'
      })
      return;
    }
    if(+enteredUserAge < 1){
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age greater 0'
      })
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge('');
    setEnteredUserName('');
  };
const userNameChangeHandler = (event) => {
     setEnteredUserName(event.target.value); 
}
const userAgeChangeHandler = (event) => {
  setEnteredUserAge(event.target.value); 
}
const errorHandeler = () => {
  setError(null);
}
   return (
    <Wraper>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandeler} />};
      <Card className={classes.input}>
        <form onSubmit={addUserHandeler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card> 
    </Wraper> 
   );
};
export default AddUser;