import React from 'react';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import Error from '../../_utils/Error';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRoute;