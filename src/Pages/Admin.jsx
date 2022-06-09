import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

export const Admin = ({children}) => {
  let navigate = useNavigate();
  const logout = () =>{
    localStorage.setItem('login', false);
    navigate("/login");
  }

  return (
    <div>
        <div className="d-flex">
            <aside className="flex-shrink-1 bg-primary">
                <div className="d-flex flex-column align-items-center my-2">
                    <div>
                        <i className="fa-solid fa-square fa-lg fa-white"></i>
                    </div>
                    <p></p>
                </div> 
                <Link to="/admin" className="d-flex flex-column align-items-center my-2">
                    <div>
                        <FiSettings style={{color: 'white'}}/>
                    </div>
                    <p className="text-white" style={{fontSize:10}}>Dashboard</p>
                </Link>

                <Link to="/admin/car" className="d-flex flex-column align-items-center my-2">
                    <div>
                        <FaCar style={{color: 'white'}}/> 
                    </div>
                    <p className="text-white" style={{fontSize:10}}>Cars</p>
                </Link>
            </aside>

            <div className="w-100">
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                    <div className="container-fluid">
                        <div className="navbar-brand" >
                            Admin
                            <i className="fa-solid fa-align-justify"></i>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">=</span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                            <form className="d-flex me-4">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="mx-2">Unis Badri</div>
                                <div onClick={logout} className="badge bg-success">Logout</div>
                            </div>
                        </div>
                    </div>
                </nav>
                    <main className="d-flex">
                        <div className="bg-white sidebar-inner px-3">
                            <p className="fw-bold my-3">Dashboard</p>
                            <p className="fw-bold my-1">List Car</p>
                        </div>
                        <div className="w-100 container p-5 bg-light">
                            {children}                   
                        </div>
                    </main>
            </div>
        </div>
    </div>
  )
}
