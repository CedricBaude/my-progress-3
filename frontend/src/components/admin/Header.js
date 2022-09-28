import React from 'react';
import { accountService } from '../../_services/account.service';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();
    const logOut = () => {
        accountService.logOut();
        navigate('/');
    }
    return (
        <div className='AHeader'>
            Header Admin
            <button onClick={logOut}>Logout</button>
        </div>
    );
};

export default Header;