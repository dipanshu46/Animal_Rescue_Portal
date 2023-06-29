import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Sidebar() {
    return (
        <div className='container-fuild'>
            <div className='row'>
                <div className='bg-dark col-auto col-md-6 min-vh-100'>
                    <a className='text-decoration-none text-white d-flex align-itemcenter'>
                        {/* <i className='fs-4 bi bi-speedometer'></i> */}
                        <span className='ms-1 my-2 fs-4'>Animal</span>
                    </a>
                    <ul class='nav nav-pills flex-column'>
                        <li class="nav-item text-white fs-4">
                            <a href='#' class='nav-link text-white fs-5' aria-current='page'>
                                <i className='bi bi-speedometer2 text-white fs-4'></i>
                                <span className='ms-2'>Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href='#' class='nav-link text-white fs-5' aria-current='page'>
                                <i className='bi bi-house'></i>
                                <span className='ms-2'>Home</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href='#' class='nav-link text-white fs-5' aria-current='page'>
                                <i className='bi bi-table'></i>
                                <span className='ms-2'>Order</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;