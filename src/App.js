import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";


const App = () => {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}]
        })
    }
    return (
        <>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </>
    );
}

export default App;
