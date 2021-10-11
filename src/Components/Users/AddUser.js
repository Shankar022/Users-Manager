import React, {useState} from 'react';

import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid  name and age  (non-empty values).'
            })
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title:'Invalid Age',
                message:'Please enter  a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    const errorHandler=()=>{
        setError(null);
    }
    return (
        <>
            {error  && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>},
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUserName} type="text" onChange={userNameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;