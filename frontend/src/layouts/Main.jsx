import React from 'react'
import { Navbar } from '../components';
import { Outlet } from 'react-router';

function Main() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Main