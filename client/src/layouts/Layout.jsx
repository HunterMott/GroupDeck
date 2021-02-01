import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/'>
        <h1>GroupDeck</h1>
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to="/eventcreate">Create Event</Link>
          <Link to='/myevents'>My Events</Link>
        </>
      )}
      {props.children}
    </div>
  );
}
