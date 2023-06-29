import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { registerCall } from '../scripts/auth';
import { useHistory } from 'react-router-dom'
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBCardFooter,
    MDBCardHeader
} from 'mdb-react-ui-kit';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('AuthToken')) {
            history.push('/')
        }
    }, [])

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const data = {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }
            await registerCall(data).then((data) => {
                alert("User Registered successfully")
                history.push('/login')
            });
        } else {
            alert("password does not match")
        }

    }

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: 'black', backgroundImage: '' }}>
            <div className='mask gradient-custom-3'>
                <img
                    className="backGround_Image"
                    width="1000" height="700"
                    src="/assets/colorfulDog.JPG"
                />
            </div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardHeader className='px-5 mb' style={{ backgroundColor: 'black', color: 'white' }}>
                    <h2 className="text-uppercase text-center mb-3 my-3">Create an account</h2>
                </MDBCardHeader>
                <MDBCardBody className='px-5' style={{ backgroundColor: 'grey' }}>
                    <MDBInput wrapperClass='mb-1' value={name} onChange={(e) => { setName(e.target.value) }} label='Name' size='lg' id='form1' placeholder='Enter your name' type='text' />
                    <MDBInput wrapperClass='mb-1' value={email} onChange={(e) => { setEmail(e.target.value) }} label='Email' size='lg' id='form2' placeholder='Enter your email' type='email' />
                    <MDBInput wrapperClass='mb-1' value={password} onChange={(e) => { setPassword(e.target.value) }} label='Password' size='lg' id='form3' placeholder='Enter your password' type='password' />
                    <MDBInput wrapperClass='mb-1' value={confirmPassword} label='Re-enter your password' onChange={(e) => { setConfirmPassword(e.target.value) }} size='lg' id='form4' placeholder='Re-enter your password' type='password' />
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div>
                    {/* <Button className='mb-4 w-100 gradient-custom-4' size='lg'>Register</Button> */}
                </MDBCardBody>
                <MDBCardFooter className='px-5' style={{ backgroundColor: 'black', color: 'white' }}>
                    <Button style={{}} onClick={handleRegister} className='mb-4 w-100 gradient-custom-4 my-3' size='lg'>Register</Button>
                </MDBCardFooter>
            </MDBCard>
        </MDBContainer>
    );
}

export default App;

// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function RegistrationForm() {
//     return (
//         <div className="container-fluid registration-container">
//             <div className="row">
//                 <div className="col-md-6 col-sm-12 registration-form">
//                     <Form>
//                         <Form.Group controlId="formBasicName">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter name" />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" />
//                             <Form.Text className="text-muted">
//                                 We'll never share your email with anyone else.
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default RegistrationForm;
