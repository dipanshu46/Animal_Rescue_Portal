//login form one 

import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBFooter, MDBNavbar, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom'
import { loginCall } from '../scripts/auth';

function Login() {

    const history = useHistory()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (localStorage.getItem('AuthToken')) {
            history.push('/')
        }
    }, [])

    const handleLogin = async (e) => {
        const data = {
            email: username,
            password: password
        }
        const res = await loginCall(data);
        localStorage.setItem("AuthToken", res.data.user)
        alert("Login successfull")
        history.push("/home")
    }

    return (
        <MDBContainer fluid className="p-3 my-0 h-custom">
            <MDBNavbar>
                <MDBRow>
                    <MDBCol >
                        <img
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            src="/assets/loginImage.png"

                            class="img-fluid"
                            alt="Sample image"
                            width="450" height="50"
                        />
                    </MDBCol>
                    <MDBCol col='4' md='6'>
                        <div className="d-flex flex-row align-items-center justify-content-center">
                            {/* <p className="lead fw-normal mb-0 me-3">Sign in with</p> */}
                            {/* <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>
                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>
                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn> */}
                        </div>
                        {/* <>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-2 mb-0"><h1>Buddy Shelter</h1></p>
                            </div>
                            <MDBInput wrapperClass='mb-4' onChange={(e) => { setUsername(e.target.value) }} value={username} label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' onChange={(e) => { setPassword(e.target.value) }} value={password} label='Password' id='formControlLg' type='password' size="lg" />

                            <div className="d-flex justify-content-between mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>
                            <div className='text-center text-md-start mt-4 pt-2'>
                                <Button className="mb-0 px-5" onClick={handleLogin} size='lg'>Login</Button>
                                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <NavLink to="/register" className="link-danger" >Register</NavLink></p>
                            </div>
                        </> */}
                        <MDBCard className='m-5' style={{ maxWidth: '600px', height: '500px' }}>
                            <MDBCardHeader className='px-5 mb' style={{ backgroundColor: '', color: ' ' }}>
                                <h2 className="text-uppercase text-center mb-3 my-3">Create an account</h2>
                            </MDBCardHeader>
                            <MDBCardBody className='px-5' style={{ backgroundColor: ' ' }}>
                                <MDBInput wrapperClass='mb-4' onChange={(e) => { setUsername(e.target.value) }} value={username} label='Email address' id='formControlLg' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4' onChange={(e) => { setPassword(e.target.value) }} value={password} label='Password' id='formControlLg' type='password' size="lg" />
                                <div className='d-flex flex-row justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                                </div>
                             </MDBCardBody>
                            <MDBCardFooter className='px-5' style={{ backgroundColor: ' ', color: ' ' }}>
                                <Button className="mb-2 w-100 gradient-custom-4 my-3" onClick={handleLogin} size='lg'>Login</Button>
                                <p className="small fw-bold mt-2 pt-0 mb-0">Don't have an account? <NavLink to="/register" className="link-danger" >Register</NavLink></p>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol >
                        <img
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            src="/assets/login2.png"

                            class="img-fluid"
                            alt="Sample image"
                            width="450" height="100"
                        />
                    </MDBCol>
                </MDBRow>
            </MDBNavbar>


            <MDBFooter>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Buddy Shelter We are here to Help for all Pets
                    </div>
                    <div>
                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='facebook-f' size="md" />
                        </MDBBtn>
                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='twitter' size="md" />
                        </MDBBtn>
                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='google' size="md" />
                        </MDBBtn>
                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='linkedin-in' size="md" />
                        </MDBBtn>
                    </div>
                </div>
            </MDBFooter>

        </MDBContainer>
    );
}
export default Login;