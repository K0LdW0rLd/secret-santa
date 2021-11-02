import React, {useState} from 'react';

function Users() {
    const [userList, setuserList] = useState([]);


    return (
        <>
            <div>"Something"</div>
            <form>
                <label htmlFor="user" aria-labelledby='user'>add secret users</label><br/>
                <input type="text" id="user" name="user" placeholder="user"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}

export default Users;