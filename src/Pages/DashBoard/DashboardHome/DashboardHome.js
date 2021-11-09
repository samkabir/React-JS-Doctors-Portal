import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calandar from '../../Shared/Calandar/Calandar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calandar
                    date={date}
                    setDate={setDate}
                ></Calandar>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;