import React from 'react';
import { useMemo } from 'react';
import {useTable, useBlockLayout} from 'react-table';
import {useSticky} from 'react-table-sticky';
import MOCK_DATA from '../MOCK_DATA.json';
import {COLUMNS} from './columns_for_StickyTable';
import '../../components/table.css';
import {Styles} from './TableStyle'


export const StickyTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    // for grouped column
    // const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(()=>MOCK_DATA, []);

   const tableInstance = useTable({
        // rows,
        // columns: columns, (for ES6 and above version can be directly writtn as colums)
        columns,

        // colums
        // data: data
        data
   }, useBlockLayout,
   useSticky)

  
//    table destructuring
const {
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
        }= tableInstance;

    const firstPageRows= rows.slice(0,20)
       
  return (
    <>
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
    </>
  )
}