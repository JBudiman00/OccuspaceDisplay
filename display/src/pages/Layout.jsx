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
                    <Link to="/walc">WALC Library</Link>
                </li>
                <li>
                    <Link to="/parrish">Parrish Library</Link>
                </li>
                <li>
                    <Link to="/MATH">MATH Library</Link>
                </li>
                <li>
                    <Link to="/HICKS">Hicks Library</Link>
                </li>
                <li>
                    <Link to="/av">AV Library</Link>
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