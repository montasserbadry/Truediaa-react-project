import React, { useContext } from 'react'
import Login from '../Login/login';
import { AuthContext } from '../Login/ِAuthContext';

function Home() {
    const authContext = useContext(AuthContext);

    return (
        <div>
            {authContext.auth.email ? 'مرحبا' : <Login />}
           
        </div>
    )
}

export default Home;