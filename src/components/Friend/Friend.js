import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const navigate = useNavigate();
    const {id,name,username} = props.friend;
    const handleId = (id)=>{
        navigate(`/friend/${id}`);
    }
    return (
        <div>
            <h1>{name}</h1>
            <Link to={`/friend/${id}`}>Clicked</Link>
            <button onClick={()=>handleId(id)}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;