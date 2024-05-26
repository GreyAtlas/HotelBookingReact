import React, { Component, useState, useEffect,Fragment } from 'react';
import { Table, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HotelTable.css'
import BookingModal from '../form/BookingModal';
export default function HotelTable(props) {
    const [selectedRow, setSelectedRow] = useState(-1);
    const [selectedHotelName, setSelectedHotelName] = useState("");
    const [modal, setModal] = useState(false);

    const toggleModal = (id,name) => {
        setSelectedHotelName(name)
        setSelectedRow(id)
        setModal(!modal)
    }
    const items = props.items;
    return (
        <Fragment>
            <BookingModal
                show={modal}
                hotelId={selectedRow}
                hotelName={selectedHotelName}/>
            <Table striped hover>
                <thead className="thead-dark">
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {!items || items.length <= 0 ?
                        <tr>
                            <td colSpan="3" align="center"><b>No Hotels yet</b></td>
                        </tr>
                        : items.map(item => (
                            <tr key={item.id} onClick={() => toggleModal(item.id, item.name)}>
                                <td>
                                    <img className="img-fluid" src={`data:image/jpg;base64,${item.picture}`} />
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.location}
                                </td>

                            </tr>
                        ))}
                </tbody>
            </Table>
        </Fragment>
    )
}
