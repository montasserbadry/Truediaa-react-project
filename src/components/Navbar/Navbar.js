import React, { useContext } from 'react'
import { AuthContext } from "../Login/ِAuthContext";
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    const authContext = useContext(AuthContext);

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        authContext.setAuth({});
    }
    return (
        < nav class="navbar navbar-expand-lg navbar-light  mt-2 mb-5">
            <div class="container-fluid " >
                <h1 class="navbar-brand Width 25% p-2 fs-" >Truediaa</h1>
                <div class="collapse navbar-collapse ml-5 h-25 " id="navbarNav">
                    <ul class="navbar-nav p-20 d-flex justify-content-start ">
                        <li class=" btn nav-item ml-5">
                            <NavLink class="nav-link active " aria-current="page" to="/">الصفحة الرئيسية</NavLink>
                        </li>
                        <li class=" btn nav-item">
                        <NavLink class="nav-link" to="/about">من نحن</NavLink>
                        </li>
                        <li class=" btn nav-item">
                           <NavLink class="nav-link" to="/contact">اتصل بنا</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {authContext.auth.email ? <div>
                        {authContext.auth.email}
                        {' '}
                        <button className="btn btn-danger btn-sm" onClick={logout} >خروج</button>
                    </div> : 'انت تحتاج الى تسجيل الدخول'}
                </div>
            </div>
        </nav>)
}
