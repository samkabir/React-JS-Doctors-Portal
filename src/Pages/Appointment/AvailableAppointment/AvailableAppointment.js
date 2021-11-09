import { Alert, Container, Grid } from '@mui/material';
import React, {useState} from 'react';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';

const bookings = [
    {
        id:1,
        name:'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id:2,
        name:'Comsmeic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id:4,
        name:'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id:5,
        name:'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id:6,
        name:'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]
const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 5, fontWeight: 400}}>Available Appointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking SuccessFull!!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;