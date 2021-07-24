import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend
    const friendStyle = {
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'yellow'
    }
    const btnStyle = {
        height: '20px',
        width: '150px',
        backgroundColor: 'black',
        borderRadius: '10px',
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`friend/${id}`}>
            <button style={btnStyle}> View Profile</button></Link>
        </div>
    );
};

export default Friend;