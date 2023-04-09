import React from 'react';
import {Link} from 'react-router-dom';

const Layout = () => {
    return(
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/hsse">HSSE Library</Link>
                </li>
                <li>
                    <Link to="/libraries">Main Library Display</Link>
                </li>
            </ul>
        </nav>
    </>
    );
}

export default Layout;