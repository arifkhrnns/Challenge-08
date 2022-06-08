import Logins from '../Assets/Img/Login.png';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const Auth = async (e) => {
        if(role === 'admin'){
            navigate("/admin");
        }else{
            navigate("/");
        }
    }

  return (
    <div>
        <div className="row">
            <div className="col-7">
                <div className="images">

                    <img src={Logins} alt="" style={{height: `100%`}}/>
                </div>
            </div>
            <div className="col-5 d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-center align-content-center" style={{width:`18rem`}}>
                    <h4 className="mb-5 fw-bold">Welcome,Admin BCR</h4>
                    <form onSubmit={Auth}>
                    <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Role</label><br></br>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="role" value="admin" onChange={(e) => setRole(e.target.value)} id="inlineRadio1" />
                                <label className="form-check-label" for="inlineRadio1">admin</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="role" value="user" onChange={(e) => setRole(e.target.value)} id="inlineRadio2" />
                                <label className="form-check-label" for="inlineRadio2">user</label>
                            </div>
                        </div>
                        <div className="row px-3">
                            <button type="submit" className="btn btn-primary">Sign In</button>
                            <button className="btn btn-outline-primary btn-sm mt-2">Sign In with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
