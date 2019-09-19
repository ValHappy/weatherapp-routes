import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Week from '../Week/Week';


function App() {
  const classes = useStyles();
  const [data, setData] = React.useState(null);

  const handleClose = (isOpen) => {
    setData(null);
  };

  return (
    <Router>
      <div className="App" className={classes.container}>
        <h1 className={classes.title}>WEATHER APP</h1>

        <Route path="/" exact component={Home} />
        <Route path="/week" component={Week} />

        <CssBaseline />
      </div>
    </Router>

  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.grey[600],
    fontSize: 50,
    padding: 0,
    marginTop: 50,
  }
}));

export default App;