import React, { useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const EventModal = ({
  modal,
  toggle,
  slots,
  handleEventChange,
  handleSlotsList
}) => {



  return (
    <Modal isOpen={modal}>
      <ModalHeader toggle={toggle}>Book Appointment</ModalHeader>
      <ModalBody className='p-4'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h4 className="modal-headers">Title:</h4>
          <Input
            type="text"
            name="title"
            value={slots?.title}
            onChange={(e) => handleEventChange(e)}
          />
        </div>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h4 className="modal-headers">Service</h4>
          <Input
            type="text"
            name="service"
            value={slots?.service}
            onChange={(e) => handleEventChange(e)}
          />
        </div>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h4 className="modal-headers">Start Time:</h4>
          <Input
            type="time"
            name="start"
            value={slots?.start}
            onChange={(e) => handleEventChange(e)}
          />
        </div>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h4 className="modal-headers">End Time:</h4>
          <Input
            type="time"
            name="end"
            value={slots?.end}
            onChange={(e) => handleEventChange(e)}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button className='slotBtn' onClick={handleSlotsList}>
          Book
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default EventModal;