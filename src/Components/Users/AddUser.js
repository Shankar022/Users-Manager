import React from 'react';

import styles from './AddUser.module.css'

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
    }
    return (
        <form onSubmit={addUserHandler} className={styles.input}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"/>
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUser;