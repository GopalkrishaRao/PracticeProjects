import React from 'react';
import { useMemo } from 'react';
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from './columns';
import { Checkbox } from './Row_selection/Checkbox';
import './table.css';


export const ColumnHiding = () => {
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
   })

//    table destructuring
const {
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow, 
        allColumns,
        getToggleHideAllColumnsProps
        }= tableInstance;

  return (
    <>
    <div>
        <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
    </div>
    {
        allColumns.map(column =>(
            <div key={column.id}>
                <lable>
                    <input type='checkbox' {...column.getToggleHiddenProps()}/>
                    {column.Header}
                </lable>
            </div>
        ))
    }
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
