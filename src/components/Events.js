import moment from "moment";

export const events = [
    {
        id: 0,
        title: "All Days Event have very long titles",
        start: moment('2023-04-15T11:00:00').toDate(),
        end: moment('2023-04-15T11:30:00').toDate()
    },
    
    {
        id: 1,
        title: "Long Event",
        start: moment('2023-04-15T10:00:00').toDate(),
        end: moment('2023-04-15T11:00:00').toDate()
    },

    {
        id: 2,
        title: "DTS STARTS",
        start: moment('2023-05-03T12:00:00').toDate(),
        end: moment('2023-05-03T01:00:00').toDate()
    },

    {
        id: 3,
        title: "DTS ENDS",
        start: moment('2023-05-22T09:00:00').toDate(),
        end: moment('2023-05-22T04:00:00').toDate()
    },

    {
        id: 4,
        title: "Set meeting on first proprity",
        start: moment('2023-05-22T09:00:00').toDate(),
        end: moment('2023-05-22T04:00:00').toDate()
    },

    {
        id: 5,
        title: "Some Event",
        start: moment('2023-06-01T03:00:00').toDate(),
        end: moment('2023-06-01T04:00:00').toDate()
    },

    {
        id: 6,
        title: "Conference",
        start: moment('2023-07-02T08:00:00').toDate(),
        end: moment('2023-07-02T10:00:00').toDate(),
        desc: "Big conference for important people"
    },

    {
        id: 7,
        title: "Meeting",
        start: moment('2023-07-10T06:00:00').toDate(),
        end: moment('2023-07-10T07:00:00').toDate(),
        desc: "Pre-meeting meeting, to prepare for the meeting"
    },
    
    {
        id: 8,
        title: "Emergency Booking",
        start: moment('2023-06-17T02:00:00').toDate(),
        end: moment('2023-06-17T03:00:00').toDate(),
    },
    {
        id: 9,
        title: "Booking",
        start: moment('2023-06-17T03:00:00').toDate(),
        end: moment('2023-06-17T04:00:00').toDate(),
    },
    {
        id: 10,
        title: "Looking for Appointment",
        start: moment('2023-06-17T04:00:00').toDate(),
        end: moment('2023-06-17T05:00:00').toDate(),
    },
    {
        id: 11,
        title: "Emergency treating",
        start: moment('2023-06-17T06:00:00').toDate(),
        end: moment('2023-06-17T07:00:00').toDate(),
    },
    {
        id: 12,
        title: "Health Wealth",
        start: moment('2023-06-17T07:00:00').toDate(),
        end: moment('2023-06-17T08:00:00').toDate(),
    },

    {
        id: 13,
        title: "Today",
        start: new Date(new Date().setHours(new Date().getHours() - 1)),
        end: new Date(new Date().setHours(new Date().getHours() + 1))
    }
];
