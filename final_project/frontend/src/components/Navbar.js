import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const state = useSelector((state) => state.HandleCart)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('AuthToken')) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('AuthToken');
    alert("Logged out successfully")
    setIsLoggedIn(false)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container">
          <div>
            <NavLink className="navbar-brand fw-bold fs-4" to="#"><img src='/assets/animal.jpg' width={90} height={60} className='mx-4'></img>BUDDY SHELTER</NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">Adopt Me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Drop">Donate Pet</NavLink>
              </li><li className="nav-item">
                <NavLink className="nav-link" to="/About">Care</NavLink>
              </li>
            </ul>
            <div className='button'>
              {
                !isLoggedIn ?
                  <NavLink to="/login" className="btn btn-outline-dark me-2">
                    <i className="fa fa-sign-in me-2"></i>Login
                  </NavLink>
                  :
                  <button className="btn btn-outline-dark me-2" onClick={handleLogout}>Logout</button>
              }

              {
                !isLoggedIn ?

                  <NavLink to="/register" className="btn btn-outline-dark me-2 ms-2">
                    <i className="fa fa-user-plus me-2"></i>Register
                  </NavLink>
                  : <></>
              }
              <NavLink to="/cart" className="btn btn-outline-dark me-2 ms-2">
                <i className="fa fa-shopping-cart me-2"></i>Basket
              </NavLink>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar