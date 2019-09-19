import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core'

function WeatherCard(props) {
    const classes = useStyles();
    const darkClasses = darkStyles();

    var colorScheme = classes;

    function handleClick() {
        if (typeof props.onClick === 'function') {
            props.onClick(props);
        }
    }

    if (props.today === props.num) {
        colorScheme = darkClasses;
    }

    return (
        <Card onClick={handleClick}>
            <CardContent className={colorScheme.content}>
                <h3 className={colorScheme.title}>{props.day}</h3>
                <img className={colorScheme.icon} src={props.icon} alt=""></img>
                <p className={colorScheme.info}>
                    <span>{props.max}</span>
                    {props.min}
                </p>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        color: 'white',
        fontSize: 20,
        margin: '0',
    },
    icon: {
    },
    info: {
        margin: 0,
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.palette.grey[800],
        '& span': {
            color: 'white',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
}));

const darkStyles = makeStyles(theme => ({
    title: {
        fontSize: 25,
        margin: 0,
        color: '#FFDB3C',
    },
    icon: {
    },
    info: {
        margin: 0,
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.palette.grey[800],
        '& span': {
            color: 'white',
        },
    },
    content: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
export default WeatherCard;