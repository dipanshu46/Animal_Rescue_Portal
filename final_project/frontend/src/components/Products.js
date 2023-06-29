import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import { addToCart, getPets } from '../scripts/pets';
import Footer from "./Footer";
import Navbar from "./Navbar"

function Products() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // const handleClose = () => setShow(false);
  // const handleShow = (id) => {
  //   setShow(true);
  //   setSelectedId(id)
  // }'

  useEffect(() => {
    loadPets()
  }, [])

  const loadPets = async () => {
    await getPets().then((data) => {
      setData(data.data.data);
      setLoading(false)
    })
  }

  const handleAddToCart = async (id) => {
    const data = {
      cartItem: {
        pet: id,
      }
    }
    await addToCart(data).then((data) => {
      loadPets()
    })
  }

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  // const filterProduct = (y) => {
  //   const updatedList = data.filter((x) => x.category === y)
  //   setFilter(updatedList);
  // }

  const ShowProducts = () => {

    return (
      <>
        {/* <div className='buttons d-flex justify-content-center mb-5 pb-2'>
          <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("")}> Dog For sale and Adoption</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("")}>Cats For sale and Adoption</button>
        </div> */}
        {/* {
          filter.map((product) => {
            return (
              <>
                <div className='col-md-3 mb-4'>
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{product.title}</h5>
                      <p className="card-text fw-bold">${product.price}</p>
                      <NavLink to={`/Products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                    </div>
                  </div>
                </div>
              </>
            )
          })} */}
      </>
    )
  }

  if (loading) {
    return Loading;
  } else {
    return (
      <><div className='h-100'>
        <Navbar />
        <div>
          <div className="container my-4 border-bottom border-dark ">
            <div className='row'>
              <div className='col-12 '>
                <h1 className='display-6 fw-bolder text-center'>Animal Rescue</h1>
              </div>
            </div>
            {/* <div className='row justify-content-center '>
    {loading ? <Loading /> : <ShowProducts />}
  </div> */}
          </div>
        </div>

        <div className='container border border-dark col-12 my-3 '>
          {/* <Card className='mx-2' style={{ width: '18rem' }}>
    <Card.Img className='my-2' variant="top" src="./assets/animal.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        <a><b>name</b>:- reo</a><br></br>
        <a><b>age</b>:- 4years</a><br></br>
        <a><b>breed</b>:- lab</a><br></br>
        <a><b>discription</b>:- it is a very good dog ,, and well trained ,decipline and well manner</a>
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>add</Button>
    </Card.Body>
  </Card> */}
          {/* <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Adobtion form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Full name </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>mobile Number </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>cancel</Button>
      <Button variant="primary" onClick={handleAddToCart}>add to cart</Button>
    </Modal.Footer>
  </Modal> */}
          <Table striped bordered hover className='my-2 mx-2 mb-2 '>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age (months)</th>
                <th>Colour</th>
                <th>Breed</th>
                <th>Description</th>
                {/* <th><img src=''></img></th> */}
                <th>Add to basket</th>
              </tr>
            </thead>
            <tbody>
              {data.map((pet) => {
                return (
                  <tr key={pet.id}>
                    <td>{pet.petName}</td>
                    <td>{pet.age}</td>
                    <td>{pet.color}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.description}</td>
                    {/* <td>images</td> */}
                    <td>
                      <Button id={pet._id} onClick={(e) => { handleAddToCart(e.target.id); } }>Add</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
    )
  }
}
export default Products