import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { removeFromCart, getCart } from '../scripts/pets';
import Footer from "./Footer";
import Navbar from "./Navbar"

function Cart() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadCart()
    }, [])

    const loadCart = async () => {
        await getCart().then((data) => {
            console.log(data.data.data)
            setData(data.data.data);
            setLoading(false)
        })
    }

    const handleRemoveFromCart = async (id) => {
        const data = {
            cartItem: {
                pet: id,
            }
        }
        await removeFromCart(data).then((data) => {
            console.log(data)
            loadCart()
        })
    }

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    if (loading) {
        return Loading;
    } else {
        return (
            <div className='h-100'>
                <Navbar />
                <div>
                    <div className="container my-4 border-bottom border-dark ">
                        <div className='row'>
                            <div className='col-12 '>
                                <h1 className='display-6 fw-bolder text-center'>Animal Rescue</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container border border-dark col-12 my-3 '>
                    <Table striped bordered hover className='my-2 mx-2 mb-2 '>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Colour</th>
                                <th>Breed</th>
                                <th>Description</th>
                                <th><img src=''></img></th>
                                <th>Add to Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((pet) => {
                                    return (
                                        <tr key={pet.pet.id}>
                                            <td>{pet.pet.petName}</td>
                                            <td>{pet.pet.age}</td>
                                            <td>{pet.pet.color}</td>
                                            <td>{pet.pet.breed}</td>
                                            <td>{pet.pet.description}</td>
                                            <td>images</td>
                                            <td>
                                                <Button id={pet.pet._id} onClick={(e) => { handleRemoveFromCart(e.target.id) }} >Remove</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cart