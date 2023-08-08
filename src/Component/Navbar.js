import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function () {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark" style={{backgroundColor:"#000"}}>
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="./images/logo.png" alt="" width="80" height="80"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Firstcomponent">DAY1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Counter">DAY2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Rating">DAY3</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Demo22">DAY4</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Task1">DAY5</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Task2">DAY6</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
