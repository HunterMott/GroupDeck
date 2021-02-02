import { Link } from "react-router-dom";
import "../styles/Layout.css";
import Logo from "../img/logo.png";
import { Button } from "@material-ui/core";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img className='logo' src={Logo} />
        </Link>
        {currentUser ? (
          <div className='loggedinusername'>
            <p>{currentUser.username}</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className='loginlink'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
        {currentUser && (
          <div className='navlinks'>
            <Link to="/eventcreate"><Button>Create Event</Button></Link>
            <br/>
            <Link to="/myevents"><Button>My Events</Button></Link>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
