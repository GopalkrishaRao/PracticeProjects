import React from 'react';
import { useMemo } from 'react';
import {useTable, useRowSelect} from 'react-table';
import MOCK_DATA from '../MOCK_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from '../columns';
import '../../components/table.css';
import { Checkbox } from './Checkbox';


export const RowSelection = () => {
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
        useRowSelect,
        (hooks)=>{
            hooks.visibleColumns.push((columns)=>{
                return [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps})=> (
                            <Checkbox {...getToggleAllRowsSelectedProps()}/>
                        ),
                        Cell: ({row})=>
                            <Checkbox {...row.getToggleRowSelectedProps()}/>
                        
                    }, 
                    ...columns
                ]
            })
        }
   )



//    table destructuring
const {
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        }= tableInstance;

        //    using only 10 rows of data for demostration
   const firstPageRows = rows.slice(0,10)
  return (
    <>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup)=>(
            <tr {...headerGroup.getFooterGroupProps()}>
                {headerGroup.headers.map((column)=>(
                    <th {...column.getFooterProps()}>
                        {column.render('Header')}
                    </th>
                    ))}
            </tr>
            ))}
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                firstPageRows.map((row) =>{
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
    <pre>
            <code>
            {JSON.stringify(
                {
                    selectdFlatRows: selectedFlatRows.map((row)=> row.original),
                },
                null,
                2
            )}
            </code>
        </pre>
    
    </>
  )
}
