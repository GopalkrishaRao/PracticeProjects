import React, {useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import {ToastContainer, TostContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { UserContext } from './context/UserContext';

//firebase
import firebase from 'firebase/compat/app';
import 'firebase/auth';

// components
import Home from './pages/Home';
import Siginin  from './pages/Siginin';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import Footer from './layouts/Footer';
import Header from './layouts/Heder';

import firebaseConfig from './config/firebaseConfig';
// init firabase
firebase.initializeApp(firebaseConfig)

const App=()=> {
const [user, setUser] = useState(null)


  return (
    <>

    <UserContext.Provider value={{ user, setUser }}>
    <ToastContainer />
    <Header/>
    <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/signin' element={<Siginin/>} />
          <Route  path='/signup' element={<SignUp/>} />
          <Route  path='/*' element={<PageNotFound/>} />
    </Routes>
    <Footer/>
    </UserContext.Provider>
    </>
  );
}

export default App;
