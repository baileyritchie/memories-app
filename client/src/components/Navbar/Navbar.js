import React, {useState,useEffect} from 'react'
import {AppBar,Avatar, Toolbar, Button,Typography} from '@material-ui/core';
import useStyles from './Styles'
import memories from '../../images/memories.png';
import {Link,useHistory,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'
export default function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const logout = () => {
    dispatch({type:'LOGOUT'});
    history.push("/"); // send user back to home
    setUser(null);
  }
  
  useEffect(() => {
    const token = user?.token; // check if token exists and add it to var

    // JWT step here
    
    setUser(JSON.parse(localStorage.getItem('profile')));
    
  },[location])
  
  return (

    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography component={Link} className={classes.heading} to="/" variant="h2" align="center" >Memories</Typography>
        <img src={memories} className={classes.image} alt="memories" height="60"/>
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
          )}
        </Toolbar>
    </AppBar>
  )
}

