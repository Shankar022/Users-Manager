import React from 'react';

import styles from './AddUser.module.css'
import Card from "../UI/Card";

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
}

export default AddUser;