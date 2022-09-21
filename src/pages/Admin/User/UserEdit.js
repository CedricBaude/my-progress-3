import React from 'react';
import { useParams } from 'react-router-dom';

const UserEdit = () => {

    let params = useParams();
    console.log(params);

    return (
        <div className='UserEdit'>
            User Edit
        </div>
    );
};

export default UserEdit;