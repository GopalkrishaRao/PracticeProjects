import React, {useState} from 'react';
import Header from './loginComponents/Header';
import { LoginContext } from './loginContext/loginContext';
import Todo from '../TodoComponents/Todo';


export default function HomePage() {
  const [user, setUser] = useState(null)

  return (
    <>
    <LoginContext.Provider value={{user, setUser}}>
      <Header/>
      <Todo/>
    </LoginContext.Provider>
    </>
  )
};
