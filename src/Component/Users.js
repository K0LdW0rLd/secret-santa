import React, { useState } from 'react';

function Users() {
    const [userList, setUserList] = useState([]);

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        let formObject = Object.fromEntries(formData.entries())
        addUsersToList(formObject.user)
    }

    function addUsersToList(user) {
        setUserList(user);
        console.log(userList);
        document.getElementById("userList").innerHTML = user
    }


    return (
        <>
            <h1>Secret Santa</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user" aria-labelledby='user'>add secret users</label><br />
                <input type="text" id="user" name="user" placeholder="user" /><br />
                <input type="submit" value="Submit" />
            </form>

            <div id="userList"></div>
        </>
    );
}

export default Users;