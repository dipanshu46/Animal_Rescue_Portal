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
import { useHistory } from 'react-router-dom'

function Drop(){
    const [petName, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [color, setColor] = useState('');
    // const [color, setColor] = useState('');
    const history = useHistory();

    return (
        <>
            <Navbar />
            <form>
                <table>
                    <tr>
                        <th>
                            <label>Enter Dog Name :</label>
                        </th>
                        <td>
                            <input
                            type="text"
                            value={petName}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr><tr>
                        <th>
                            <label>Enter Dog Breed :</label>
                        </th>
                        <td>
                            <input
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                            />
                        </td>
                    </tr><tr>
                        <th>
                            <label>Enter Dog Age :</label>
                        </th>
                        <td>
                            <input
                            type="text"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            />
                        </td>
                    </tr><tr>
                        <th>
                            <label>Enter Dog Colour :</label>
                        </th>
                        <td>
                            <input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            />
                        </td>
                    </tr><tr>
                        <th>
                            <label>Enter Dog Description (Vaccination status, Behaviour) :</label>
                        </th>
                        <td>
                            <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        </td>
                    </tr>
                </table>
            </form>
            <Footer />
        </>
     )
} 

export default Drop