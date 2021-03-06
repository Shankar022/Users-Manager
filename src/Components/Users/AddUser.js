import React, {useState, useRef} from 'react';

import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const enteredName = useRef();
    const enteredAge = useRef();
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        const name = enteredName.current.value;
        const age = enteredAge.current.value;
        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid  name and age  (non-empty values).'
            })
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter  a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(name, age);
        enteredName.current.value = '';
        enteredAge.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>},
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username"
                           type="text"
                           ref={enteredName}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age"
                           type="number"
                           ref={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;