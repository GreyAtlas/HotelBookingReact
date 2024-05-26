import React, { useState, useEffect } from 'react'
import HotelTable from '../components/tables/HotelTable'
import { Col, Container, Row, Button, FormGroup, Label,Input,Form} from 'reactstrap';
export default function HotelPage() {
    const initialHotelsState = {
        hotels: {},
        loading: true,
    }
    const [hotels, setHotels] = useState(initialHotelsState)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchToggle, setSearchToggle] = useState("")

    useEffect(() => {
        const getHotels = async () => {
            const response = await fetch(
                "api/hotel/".concat(searchTerm)
            )
            const data = await response.json();
            const hotelsState =  {
                hotels: data,
                loading: false
            }
            setHotels(hotelsState)
        }
        getHotels()
    }, [searchToggle]) 



    return hotels.loading ? (

        <div>Loading... Please refresh the page when the server is running</div>
    ) : (<Container style={{ paddingTop: "100px" }}>
        <Row>
            <Col>
                <h3>Hotel List</h3>
            </Col>
            <Col>
                <Input
                    id="searchTerm"
                    name="searchTerm"
                    placeholder="Search Location"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </Col>
            <Col>
                <Button onClick={() => { setSearchToggle(!searchToggle) }}>
                    Search
                </Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <HotelTable
                    items={hotels.hotels} />
            </Col>
        </Row>
    </Container>
    )
}