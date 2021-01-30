import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <h1>GroupDeck</h1>
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
          <Link to="/events">events</Link>
          {/* <Link to='/flavors'>Flavors</Link> */}
        </>
      )}
      {props.children}
    </div>
  );
}
