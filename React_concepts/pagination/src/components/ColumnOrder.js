import React from 'react';
import { useMemo } from 'react';
import {useTable, useColumnOrder} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from './columns';
import './table.css';


export const ColumnOrder = () => {
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
   useColumnOrder
   )

   const changeOrder = ()=>{
    setColumnOrder([
        'id', 
        'first_name',
        'last_name',
        'phone',
        'country',
        'date_of_birth'
    ])
   }

//    table destructuring
const {
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        footerGroups,
        setColumnOrder,
        rows,
        prepareRow
        }= tableInstance;

  return (
    <>
    <button onClick={changeOrder}>
        Change Column Order
    </button>

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
