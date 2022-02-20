import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from "./ِAuthContext";
import Form from '../Form/Form';
export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    function login(e) {
        e.preventDefault();

        // @todo: send api request to validate data and get token

        if (password === '123') {
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({ token, email });
        } else {
            alert(' سجل الان  المستخدم غير موجود');
        }
    }

    return (
        <div className='container'>
            <form>
                <h2>تسجيل الدخول</h2>
                <div>
                <label for="email">عنوان البريد الإلكتروني</label>
                <input type="email"
                    className="form-control mt-3 "
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <br />
                <label for="password">كلمة المرور</label>
                <input type="password"
                    className="form-control mt-3"
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <br />
                <button className="btn btn-primary mb-1"
                    onClick={login}> دخول</button>
                    </div>
                <br />
             <Link to="/form">
                <button className="btn btn-success"> سجل الان</button>
                </Link>
            </form>
        </div>
    );
}