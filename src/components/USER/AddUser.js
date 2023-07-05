import { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import Wraper from '../Helper/Wraper';
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collageNameInputRef = useRef();
  const [error, setError] = useState();
  const addUserHandeler = (event) => {
    
    event.preventDefault()
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollageName = collageNameInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid user name and age (non empty values)'
      })
      return;
    }
    if(+enteredAge < 1){
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age greater 0'
      })
      return;
    }
    props.onAddUser(enteredName, enteredAge, enteredCollageName);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collageNameInputRef.current.value = '';
  };

const errorHandeler = () => {
  setError(null);
}
   return (
    <Wraper>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandeler} />};
      <Card className={classes.input}>
        <form onSubmit={addUserHandeler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <label htmlFor="collagename">CollageName</label>
          <input id='collagename' type="text" ref={collageNameInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card> 
    </Wraper> 
   );
};
export default AddUser;