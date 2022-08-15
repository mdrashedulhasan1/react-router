import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    })
    return (
        <div>
           <h1>Name:{friend.name}</h1> 
           <h1>City:{friend.address?.city}</h1>
           <h2>{friend.company?.bs}</h2>
           <p>{friend.address?.geo?.lat}</p>
        </div>
    );
};

export default FriendDetail;