import React, { useState, useEffect } from 'react'
import BookingTable from '../components/tables/BookingTable.jsx'
import { Col, Container, Row } from 'reactstrap';
export default function BookingPage() {
    // Setting initial state
    const initialBookingsState = {
        bookings: {},
        loading: true,
    }

    // Getter and setter for user state
    const [bookings, setBookings] = useState(initialBookingsState)

    // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
    useEffect(() => {
        const getBookings = async () => {
            // Pass our param (:id) to the API call
            const response = await fetch(
                `api/booking`
            )
            const data = await response.json();
            //    //    setForecasts(data);
            const bookingsState = {
                bookings: data,
                loading: false
            }
            // Update state
            setBookings(bookingsState)
        }
        // Invoke the async function
        getBookings()
    }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

    return bookings.loading ? (
        <div>Loading...</div>
    ) : (<Container>
        <Row>
            <Col>
                <h3>Booking List</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <BookingTable
                    items={bookings.bookings}
                    hotelNames={bookings.hotelNames}/>
            </Col>
        </Row>
    </Container>
    )
    // Return a table with some data from the API.
    //return hotels.loading ? (
    //    <div>Loading...</div>
    //) : (
    //    <div className="container">
    //        <table>
    //            <thead>
    //                 <tr>
    //                    <th>Picture</th>
    //                    <th>Name</th>
    //                    <th>Location</th>
    //                </tr>
    //                </thead>
    //                <tbody> 
    //                {!hotels.hotels || hotels.hotels.length <= 0 ?
    //                    <tr>
    //                        <td colSpan="3" align="center"><b>No Hotels yet</b></td>
    //                    </tr>
    //                    : hotels.hotels.map(hotel => (
    //                        <tr key={hotel.id}>
    //                            <td>
    //                                <img class="img-fluid" src={`data:image/jpg;base64,${hotel.picture}`} />
    //                            </td>
    //                            {/*<th scope="row">*/}
    //                            {/*{item.id}*/}
    //                            {/*</th>*/}
    //                            <td>
    //                                {hotel.name}
    //                            </td>
    //                            <td>
    //                                {hotel.location}
    //                            </td>

    //                        </tr>
    //                    ))}
    //                    </tbody>
    //        </table>
    //    </div>
    //)
}