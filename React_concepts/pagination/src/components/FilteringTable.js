import React from 'react';
import { useMemo } from 'react';
import {useTable, useGlobalFilter, useFilters} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from './columns';
import './table.css';
import { GlobalFilter } from './GlobalFilter';


export const FilteringTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    // for grouped column
    // const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(()=>MOCK_DATA, []);

   const tableInstance = useTable({
        // rows
        // columns: columns, (for ES6 and above version can be directly writtn as colums)
        columns,

        // colums
        // data: data
        data
   }, 
   useFilters,
   useGlobalFilter)

//    table destructuring
const {
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
        }= tableInstance;

     const {globalFilter} = state   
  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup)=>(
            <tr {...headerGroup.getFooterGroupProps()}>
                {headerGroup.headers.map((column)=>(
                    <th {...column.getFooterProps()}>
                        {column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter'): null}</div>
                    </th>
                    ))}
            </tr>
            ))}
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row =>{
                    prepareRow(row)
                    return(
                        <tr{...row.getRowProps()}>
                            {
                               row.cells.map( cell => {
                                return( <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                                        </td>)

                               }

                               ) 
                            }
                            
                        </tr>
                    )


                })
            }

            
        </tbody>
        <tfoot>
            {
                footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {
                            footerGroup.headers.map(column=>(
                                <td {...column.getFooterProps()}>
                                    {
                                        column.render('Footer')
                                    }

                                </td>
                            ))
                        }

                    </tr>
                ))
            }
            

        </tfoot>
    </table>
    
    </>
  )
}
