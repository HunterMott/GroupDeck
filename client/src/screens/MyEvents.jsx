import React, {useState, useEffect} from 'react';
import { getOneUser } from '../services/users';

const MyEvents = (props) => {
  const [user, setUser] = useState({})
  const { currentUser } = props
  
  useEffect(() => {
    const getUser = async () => {
      const userData = await getOneUser(currentUser?.id)
      setUser(userData)
    }
    getUser()
  }, [])
  console.log(user);

  return (
    <div>
      test5
    </div>
  );
};

export default MyEvents;