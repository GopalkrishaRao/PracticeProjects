import React, {useState} from 'react';
import ThemeContext from './Themefiles/ThemeContext';
import Header from './Themefiles/Header';
import HeroSection from './Themefiles/Herosection';

export default function ThemechangerApp() {
    const themeHook = useState('light');

  return (
       <ThemeContext.Provider value={themeHook}>
        <div>
            <Header/>
            <HeroSection/>
        </div>
       </ThemeContext.Provider>     
  )
}
