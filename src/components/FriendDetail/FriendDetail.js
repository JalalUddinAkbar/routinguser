import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const [detail, setDetail] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data) )

    }, [])

    let {friendID} = useParams()
    return (
        <div>
            <h1>Profile of {detail.name}</h1>
            <h2>Name: {detail.name}</h2>
            <p>Phone: {detail.phone}</p>
            <p>Email: {detail.email}</p>
            <p>Website: {detail.website}</p>
        </div>
    );
};

export default FriendDetail;