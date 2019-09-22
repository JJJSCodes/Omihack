import React from 'react';
import Navbar from './NavBar.js';
import './App.css';
import UserForm from './components/UserForm';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();

    return (
      <div className="App">
        <Navbar />
      <UserForm />
    </div>
    );
}

export default App;