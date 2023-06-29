import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            {/* <div className='fixed-bottom'> */}
            <div className='align-bottom'>
                <MDBFooter className='bg-light text-center'>
                    {/* <MDBContainer className='p-4 pb-0'>
                        <section className='mb-4'>
                            <Button
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#3b5998' }}
                                href='https://www.facebook.com/'
                                role='button'
                            >
                                <MDBIcon fab icon='facebook-f' />
                            </Button>

                            <Button
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#55acee' }}
                                href='https://www.twitter.com/'
                                role='button'
                            >
                                <MDBIcon fab icon='twitter' />
                            </Button>

                            <Button
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#dd4b39' }}
                                href='https://www.google.com/'
                                role='button'
                            >
                                <MDBIcon fab icon='google' />
                            </Button>

                            <Button
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#ac2bac' }}
                                href='https://www.instagram.com/'
                                role='button'
                            >
                                <MDBIcon fab icon='instagram' />
                            </Button>

                            <Button
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#0082ca' }}
                                href='https://www.linkedin.com/'
                                role='button'
                            >
                                <MDBIcon fab icon='linkedin-in' />
                            </Button>
                        </section>
                    </MDBContainer> */}

                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 Copyright:
                        <a className='text-white' href='http://localhost:3000/'>
                           Buddy_Shelter.com
                        </a>
                    </div>
                </MDBFooter>
            </div>
        </>
    );
}