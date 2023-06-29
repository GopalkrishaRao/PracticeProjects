import './App.css';
import Quiz from './Components/Quiz';

function App() {
  
  return (
    <>
      <div className='App'>
        <Quiz/>
        <div className='navBtn'>
          <button className='previous'>
            Prev
          </button>
          <button className='next'>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
