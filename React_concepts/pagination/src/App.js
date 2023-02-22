import './App.css';
import { FilteringTable } from './components/FilteringTable';
// import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';

function App() {
  return (
    <div className="App">
      {/* <BasicTable/> */}
      {/* <SortingTable/> */}
      <FilteringTable/>
    </div>
  );
}

export default App;
