import './App.css';
import { ColumnHiding } from './components/ColumHiding';
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
      {/* <ColumnOrder/> */}
      <ColumnHiding/>

    </div>
  );
}

export default App;
