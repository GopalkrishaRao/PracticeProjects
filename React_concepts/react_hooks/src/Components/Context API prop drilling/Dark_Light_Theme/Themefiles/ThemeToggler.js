import React, {useContext} from "react";
import ThemeContext from './ThemeContext';
const ThemeToggler = ()=>{
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div>
            <button onClick={()=>{
                setThemeMode(themeMode === 'light' ? 'dark' : 'light');
            }}>
            Theme Change
            </button>

            <span>
                {themeMode==='light' ? 'Turn Off': 'Light On'}
            </span>
        </div>
    );
};

export default ThemeToggler;