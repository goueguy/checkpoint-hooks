import React, { useState } from 'react';
import icon from '../assets/images/edit.svg'
const EditUser = (props)=> {
    const [name,setName] = useState(props.name)
    const handleChange=(event)=>{
        setName(event.target.value);
    }
    const handleUpdateUser=()=>{
        let user = {
            id:props.userId,
            name:name
        }
        props.saveUpdate(user);
    }   
    if(!props.show){
        return (
            
            <div>
                <div className="form-group mt-3 d-flex addForm">
                    <input type="text" className="form-control" placeholder="Modifier...." onChange={(e)=>handleChange(e)} value={name}/>
                    <a href="#">
                        <img src={icon} alt="icon edit" onClick={()=>handleUpdateUser()}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default EditUser;