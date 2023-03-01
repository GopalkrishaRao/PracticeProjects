import './App.css';
import { ColumnOrder } from './components/ColumnOrder';
// import { FilteringTable } from './components/FilteringTable';
// import { PaginationTable } from './components/PaginationTbale';
import { RowSelection } from './components/Row_selection/RowSelection';
// import { BasicTable } from './components/BasicTable';
// import { SortingTable } from './components/SortingTable';

function App() {
  return (
    <div >
      {/* <BasicTable/> */}
      {/* <SortingTable/> */}
      {/* <FilteringTable/> */}
      {/* <PaginationTable/> */}
      {/* <RowSelection/> */}
      <ColumnOrder/>
    </div>
  );
}

export default App;
