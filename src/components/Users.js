import React, { useState } from 'react';
const Users = (props)=> {
    const [name,setName] = useState("")
    const [show,setShow]= useState(true);

    const handleDeleteUser=(id)=>{
        props.deleteUser(id);
    }
    const showEditForm=(id)=>{
        props.editUserForm(id);
    }
    
    return (
        <div className="card">
            <div className="user-card">
                <img src={props.picture} alt="picture" style={{height:"50px",width:"50px",borderRadius:"10px"}}/>
                <div className="card-item">
                    <div>{props.name}</div>
                    <div>{props.position}</div>
                    <a href="#" onClick={() => handleDeleteUser(props.id)}>Supprimer</a>
                    <a href="#" onClick={() => showEditForm(props.id)}>Modifier</a>
                </div>
            </div>
        </div>
    );
}

export default Users;