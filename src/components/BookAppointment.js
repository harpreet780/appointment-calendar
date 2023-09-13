import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { events } from './Events';
import EventModal from './EventModal';

const localizer = momentLocalizer(moment)

const BookAppointment = () => {
    const [date, setDate] = useState({
        startDate: '',
        endDate: ''
    })

    const [slots, setSlots] = useState({
        id: Math.floor(Math.random() * 100),
        title: '',
        service: '',
        start: null,
        end: null,
    })
    const [slotsList, setSlotsList] = useState([]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleEvent = (e) => {
        setDate({
            startDate: e?.start,
            endDate: e?.end
        })
        setModal(true);
    }

    const handleEventChange = (e) => {
        setSlots({ ...slots, [e.target.name]: e.target.value })
    }

    const handleSlotsList = () => {
        slots.start =  moment(date.startDate,'T',slots.start).toDate();
        slots.end =  moment(date.endDate,'T',slots.end).toDate();
        let old = { ...slots };
        slotsList.push(old)
        setSlotsList([...slotsList])
        localStorage.setItem("events", JSON.stringify(slotsList));
        setSlots({
            id: null,
            title: '',
            service: '',
            start: null,
            end: null,
        });
        toggle()
    }
    const events = JSON.parse(localStorage.getItem("events"))
    console.log(events, "events")

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={slotsList || []}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '80vh' }}
                defaultView="month"
                selectable={true}
                onSelectSlot={(e) => handleEvent(e)}
                popup

            />
            <EventModal
                modal={modal}
                toggle={toggle}
                handleSlotsList={handleSlotsList}
                handleEventChange={handleEventChange}
            />
        </div>
    )
}

export default BookAppointment;