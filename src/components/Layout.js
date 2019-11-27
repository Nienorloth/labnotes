import React from 'react';
import Navbar from './Navbar';

function Layout (props) {

    return (
        <div className='Layout'> 
        <Navbar />
        {props.children}
    </div>
    )
}

export default Layout;