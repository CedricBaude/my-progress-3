import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Error from '../../_utils/Error';

const AuthRouter = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};

export default AuthRouter;