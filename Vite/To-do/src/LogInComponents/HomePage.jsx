import React, {useState} from 'react';
import Header from './loginComponents/Header';
import { LoginContext } from './loginContext/loginContext';

export default function HomePage() {
  const [user, setUser] = useState(null)

  return (
    <>
    <LoginContext.Provider value={{user, setUser}}>
      <Header/>
    </LoginContext.Provider>
    </>
  )
};
