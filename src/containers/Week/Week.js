import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import transformInfo from '../../utils/transformInfo';
import { Route } from 'react-router-dom';

function Week(props) {
    const classes = useStyles();

    const [days, setDays] = React.useState([]);
    React.useEffect(function () {
        var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,couk&APPID=7f24b9a61672c5313af4f3cfe490c10e');

        promise.then((info) => {
            return info.json();
        })
            .then((info) => {
                var list = transformInfo(info);
                setDays(list);
            });
    }, []);

    return <Grid container spacing={2} className={classes.container}>
        <Grid item xs={2} >
            <h2 className={classes.title}>Week Page</h2>
        </Grid>

        <Grid container spacing={2} className={classes.content} >
            {days && days.map((item) => {
                return <Grid item md={1} xs={2} key={item.day} >
                    <WeatherCard
                        {...item}
                        //onClick={handleClick}
                        today={0}
                    />
                </Grid>
            })}
        </Grid>

        <Route path="/week/:day" render={(props) => {
            console.log(props.match.params.day);
            //aqui deberia pasar lo del modal
            return null;
        }} />
    </Grid>
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.grey[600],
        fontSize: 40,
        padding: 0,
        marginTop: 50,
    }
}));

export default Week;