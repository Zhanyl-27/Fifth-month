import React from "react";
import {WithData} from "../hoc-helpers";
import {useState} from "react";
import UserDetails from "../UserDetails";


const UsersList = ({users}) => 
{
    const [user,  setUser] = useState([]);
    function clickButton(e)
    {
        const id = e.target.dataset.id;
        users.forEach(function(elem) {
            if(elem.id == id)
            {
                setUser(elem);
            }
        });
    }

    const usersView = users.map(({name, username, email, id}) => (
        <li key={`user-${id}`}>
            {name} {username} ({email})
            <button  data-id={id} onClick={clickButton}>Details</button>
            </li>
    ));
    return  <><ul>{usersView}</ul>
   
    <UserDetails user={user}/></>;
};

export default WithData(UsersList);

