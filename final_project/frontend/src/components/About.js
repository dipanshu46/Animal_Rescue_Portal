import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBFooter
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import { Button } from 'react-bootstrap';
import Footer from './Footer';

function About() {

    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };

    return (
        <>
            <Navbar />
            <div className='container mt-3'>
                <MDBTabs fill className='mb-3'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                            Dog Food
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                            Dog Accessories
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                            Dog Care
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={fillActive === 'tab1'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt-2 mb-3 g-4'>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/pedigree.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Pedigree Adult Dry Dog Food </MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/3LbUw6y" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/purepet.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Purepet Meat and Rice Adult Dog Food</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/jjR8MzQ" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/royalcanin.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Royal Canin Mini Adult Pellet Dog Food</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/fHjClax" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/treat.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Chicken Flavour Real Chicken Dog Biscuit</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/a0FhdGt" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/ndfood.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>FARMINA N&D Dry Dog Food</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/7bts0OR" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>
                    <MDBTabsPane show={fillActive === 'tab2'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt-2 mb-3 g-4'>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/bowl.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Pets Empire Stainless Steel Dog Bowl</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/e3qMlXp" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/toy.webp'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Dog Rope Combo of 4 Chewing Toy </MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/3duSVRh" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/belt.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Dog Harness with Safety,Chest Belt</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/a7XE439" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/folder.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Folding Dog Poop Scooper</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://amzn.eu/d/8KTZIK9" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Buy</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>
                    <MDBTabsPane show={fillActive === 'tab3'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt-2 mb-3 g-4'>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/vet.png'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Vets Near Me</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://www.google.com/search?q=vets+near+me" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Visit</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol><MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        src='/assets/Pharmacy.jpg'
                                        alt='...'
                                        position='top'
                                        width="180" height="280"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>Pet Medical Shops Near Me</MDBCardTitle>
                                        <MDBCardText>
                                            <Button className='text-center'><a href="https://www.google.com/search?q=vets+medical+shop+near+me" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Visit</a></Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
            <Footer />
        </>
    );
}

export default About;