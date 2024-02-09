import App from './App';
import {createRoot} from 'react-dom/client'


function Main(){
    return (
        <>
        <App/>
        </>
    )
};

createRoot(document.getElementById("root")).render(<Main/>)
