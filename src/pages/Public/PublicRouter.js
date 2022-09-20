import React from 'react';
import Error from '../../_utils/Error';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home, Service, Contact } from "../../pages/Public"

const PublicRouter = () => {
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

export default PublicRouter;