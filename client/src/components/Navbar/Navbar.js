import React, {useState,useEffect} from 'react'
import {AppBar,Avatar, Toolbar, Button,Typography} from '@material-ui/core';
import useStyles from './Styles'
import {Link,useHistory,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
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

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        // after an hour user is logged out
        logout();
      }
    }
    
    setUser(JSON.parse(localStorage.getItem('profile')));
    
  },[location])
  
  return (

    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography component={Link} className={classes.heading} to="/" variant="h2" align="center">My Memories</Typography>
        <svg className={classes.image}  width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.56 28.84L25 25L20 32.5H42.5L33.75 20L27.56 28.84Z" fill="#A6C1EE"/>
          <path d="M23.7575 22.5C25.8327 22.5 27.515 20.8177 27.515 18.7425C27.515 16.6673 25.8327 14.985 23.7575 14.985C21.6823 14.985 20 16.6673 20 18.7425C20 20.8177 21.6823 22.5 23.7575 22.5Z" fill="#A6C1EE"/>
          <path d="M47.5 5H15C11.985 5 7.5 6.9975 7.5 12.5V47.5C7.5 53.0025 11.985 55 15 55H52.5V50H15.03C13.875 49.97 12.5 49.515 12.5 47.5C12.5 45.485 13.875 45.03 15.03 45H52.5V10C52.5 7.2425 50.2575 5 47.5 5ZM47.5 40H12.5V12.5C12.5 10.485 13.875 10.03 15 10H47.5V40Z" fill="#A6C1EE"/>
        </svg>
          
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

