import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
class BookingForm extends Component {
    state = {
        hotelId: this.props.hotelId,
        hotelName:this.props.hotelName,
        roomType: '0',
        lengthOfStay:'-1',
        numberOfPeople: '-1',
        breakfast: false
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
        e.preventDefault();
        fetch(`api/booking`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hotelId: this.state.hotelId,
                hotelName: this.state.hotelName,
                roomType: this.state.roomType,
                lengthOfStay: this.state.lengthOfStay,
                numberOfPeople: this.state.numberOfPeople,
                breakfast: this.state.breakfast == 'on' ? true : false 
            })
        })
            .then(() => {
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    render() {
        return <Form onSubmit={this.submitNew}>
            <FormGroup>
                <Label for="exampleSelect">
                    Room Type
                </Label>
                <Input type="select" name="roomType" onChange={this.onChange} defaultValue= "0">
                    <option value="0" > Standard </option>
                    <option value="1" > Deluxe </option>
                    <option value="2"> Suite </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="lengthOfStay">Length Of Stay:</Label>
                <Input required type="number" min='1' name="lengthOfStay" onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="numberOfPeople">Number of People</Label>
                <Input required type="number" min='1' name="numberOfPeople" onChange={this.onChange}   />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    Include Breakfast
                </Label>
                <Input name="breakfast" type="checkbox" onChange={this.onChange}/> {' '}
            </FormGroup>
            <Button>Book</Button>
        </Form>;
    }
}
export default BookingForm;