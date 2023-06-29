import Products from './Products'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "./Navbar"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel  >
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="500" height="700"
            src="/assets/Beautiful.JPG"
            alt="First slide"
          />
          {/* <Carousel.Caption className='text-dark'>
            <h1>BUDDY SHELTER</h1>
            <p><h3>HOME FOR STEET DOGS,WITH GOOD PARENTS</h3></p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="/assets/cutepuppy.JPG"
            alt="Second slide"
            width="500" height="700"
          />

          {/* <Carousel.Caption className='text-dark'>
            <h1>BUDDY SHELTER</h1>
            <p><h3>HOME FOR STEET DOGS,WITH GOOD PARENTS</h3></p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/image2.JPG"
            alt="Third slide"
            width="500" height="700"
          />

          {/* <Carousel.Caption className='text-dark'>
            <h1>BUDDY SHELTER</h1>
            <p><h3>HOME FOR STEET DOGS,WITH GOOD PARENTS</h3></p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/Puppy.JPG"
            alt="Third slide"
            width="500" height="700"
          />

          {/* <Carousel.Caption className='text-dark'>
            <h1>BUDDY SHELTER</h1>
            <p><h3>HOME FOR STEET DOGS,WITH GOOD PARENTS</h3></p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <div>
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
          <MDBContainer className='p-4'>
            <MDBRow>
              <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Root Cause</h5>

                <p>
                  A stray animal is a term used for free roaming animals in public areas such as housing areas or parks and usually,
                  this animal does not belong to anyone.
                </p>
                <p>
                  A stray animal can be a problem because it may be carrying a disease that can pass to humans and other animals.
                  One example of the disease is Rabies.This stray animal can also cause a road accident,
                  damage property, and pollute the environment.
                </p>
                <p>
                  There are 2 categories of animal cruelty or abuse which are neglect and intentional cruelty.
                </p>
                <p>
                  Intentional cruelty involved physical harm or injury to the animals. Most of the cases being heard were beaten, burned, poisoned, and stabbed to death.
                </p>
                <p>
                  It is necessary to stop such animal cruelty and abuse. For this monitoring and controlling on their vaccination and their proper nurture is necessary.
                </p>
              </MDBCol>

              <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Our Objective</h5>

                <p>
                  Creating a pet adoption website serves multiple motives. The primary objective is to promote pet adoption by providing a centralized platform for potential adopters by showcasing comprehensive profiles.
                </p>
                <p>
                  Furthermore, the website aims to increase awareness about the importance of adopting and the plight of homeless animals. It serves as a powerful tool to educate the public on the vast number of animals living in shelters and facing euthanasia.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-dark' href='http://localhost:3000/'>
              BuddyShelter.com
            </a>
          </div>
        </MDBFooter>

      </div>
    </div>
  );
};
export default Home

  // <div className='card'>
    //   {/* <div className="card text-white border-0">
    //     <img src="/assets/animal.jpg" className="card-img" alt="Background"
    //       height="600px" />
    //     <div className="card-img-overlay d-flex flex-column justify-content-center">
    //       <div className='container'>
    //         <h5 className="card-title display-3 fw-bolder mb-0 text-dark">Animal Rescue</h5>
    //         <p className="card-text fs-2 text-dark">JSPM(Rajarshi Shahu College of Engineering).</p>

    //       </div>
    //     </div>
    //   </div> */}
    //   {/* <Products /> */}

    // </div>