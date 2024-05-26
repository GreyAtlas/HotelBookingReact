import React from 'react';
import { Table, Button } from 'reactstrap';
import './BookingTable.css'
export default function BookingTable(props) {
    const items = props.items;
    return <Table striped hover>
      <thead className="thead-dark">
        <tr>
            <th>Hotel</th>
            <th>RoomType</th>
            <th>LengthOfStay</th>
            <th>Number of People</th>
            <th>Breakfast</th>
            <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {!items || items.length <= 0 ?
          <tr>
            <td colSpan="3" align="center"><b>No Bookings yet</b></td>
          </tr>
                : items.map(item => (
                <tr key={item.id}>
                    <td>
                        {item.hotelName }
                    </td>
                    <td>
                        {item.roomType == 0 ? "Standard" : item.roomType == 1 ? "Deluxe" : item.roomType == 2 ? "Suite": "Unknown"}
                    </td>
                    <td>
                        {item.lengthOfStay}
                    </td>
                    <td>
                        {item.numberOfPeople}
                    </td>
                    <td>
                        {item.breakfast ? "Breakfast":"No Breakfast"}
                    </td>
                    <td>
                        {item.cost}
                    </td>

                </tr>
          ))}
      </tbody>
    </Table>;
}
