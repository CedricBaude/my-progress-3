import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userService } from '../../../_services/user.service';

const User = () => {
    let navigate = useNavigate();
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })

            .catch(err => console.log(err))
    }, [])

    // const marcel = (userId) => {
    //     console.log('click');
    //     navigate("../edit/" + userId);
    // }
    return (
        <div className='User'>
            User liste
            {/* <button onClick={() => marcel(4)}> User 4</button> */}
            <table>
                <thead>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Created</th>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;