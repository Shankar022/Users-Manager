import React,{useState} from 'react';

import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');

    const  userNameChangeHandler= (event)=>{
        setEnteredUserName(event.target.value);
    }
    const  ageChangeHandler= (event)=>{
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length=== 0  ||enteredAge.trim().length === 0)
            return;
        if(+enteredAge < 1)
            return;
        setEnteredUserName('');
        setEnteredAge('');
        console.log(enteredUserName,enteredAge);
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" value={enteredUserName} type="text" onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;