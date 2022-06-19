import React from 'react';
import Users from "./Users";

const UsersList =({users,deleteUser,editUserForm})=> {
    return (
        <div className="users mt-4">
            {
                users.map(item=>
                    <Users key={item.id} id={item.id} name={item.name} position={item.position} picture={item.picture} deleteUser={deleteUser} editUserForm={editUserForm}/>
                )
            }
        </div>
    );
}

export default UsersList;