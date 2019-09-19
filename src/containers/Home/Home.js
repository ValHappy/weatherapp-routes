import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

function Home(props) {
    const classes = useStyles();

    function handleClick() {
        props.history.push('/week');
    }

    return <div className={classes.container}>
        <h1 className={classes.title}>My Happy Weather App</h1>
        <Button onClick={handleClick} variant="contained" color="secondary" className={classes.button}>Get Weather Info</Button>
    </div>
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.grey[600],
        fontSize: 40,
        padding: 0,
        marginTop: 50,
    },
    button: {
        margin: theme.spacing(1),
    }
}));

export default Home;