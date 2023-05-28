import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './LogInComponents/HomePage';
import LogIn from './LogInComponents/Pages/LogIn';
import SignUp from './LogInComponents/Pages/SignUp';
import PageNotFound from './LogInComponents/Pages/PageNotFound';
import Profile from './LogInComponents/Pages/Profile';

export default function App() {
  return (
    <>
     <Routes>
          <Route  path='/' element={<HomePage/>} />
          <Route  path='/login' element={<LogIn/>} />
          <Route  path='/signup' element={<SignUp/>} />
          <Route  path='/profile' element={<Profile/>} />
          <Route  path='/*' element={<PageNotFound/>} />
    </Routes>
    </>
  )
}
