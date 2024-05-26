import React, { Fragment, useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody,ModalFooter } from 'reactstrap';
import BookingForm from './BookingForm';
export default function BookingModal(props) {

    useEffect(() => {
        setState(!state);
    }, [props.show])

    const [state, setState] = useState(props.show);


    const toggle = () => setState(!state);
    return <Fragment>
        <Modal isOpen={!state} >
            <ModalHeader>{props.hotelId}</ModalHeader>
            <ModalBody>
                <BookingForm
                    hotelId={props.hotelId}
                    hotelName ={props.hotelName}
                    toggle={toggle} />

            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => toggle()}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </Fragment>;
    
}