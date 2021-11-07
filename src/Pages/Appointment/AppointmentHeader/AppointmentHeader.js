import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calandar from '../../Shared/Calandar/Calandar';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calandar date={date} setDate={setDate}></Calandar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;