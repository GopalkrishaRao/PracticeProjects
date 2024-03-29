import React from 'react';
import { useMemo } from 'react';
import {useTable, usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from './columns';
import './table.css';


export const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(()=>MOCK_DATA, []);

   const tableInstance = useTable({
        columns,
        data,

        // to set default initial page other than 1
        // initialState:{pageIndex : 4}
   },
   usePagination)

//    table destructuring
const {
        getTableProps, 
        getTableBodyProps,
        headerGroups, 
        page,
        
        // inserted in peviou and next page button at bottom
        //Move to next and previou page 
        nextPage,
        previousPage,

        // diable previous page button in first page and next page button in last page 
        canNextPage,
        canPreviousPage,

        gotoPage,
        pageCount,

        // Page size
        setPageSize,

        pageOptions,
        state,

        prepareRow
        }= tableInstance;

        // destructuring of state property from tableInstance
        const { pageIndex, pageSize} = state

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
                page.map(row =>{
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
    </table>
    <div>
        <span>
            Page{' '}
            <strong>
                {pageIndex +1} of {pageOptions.length}
            </strong> {' '}
        </span>
        <span>
            | Go to page: {' '}
            <input type= 'number' 
                    defaultValue={pageIndex +1}
                    onChange={e=> {
                        const pageNumber = e.target.value ? Number (e.target.value)-1 :0
                        gotoPage (pageNumber)
                    }}
                    style={{width:'40px'}}
                    />

        </span>
        <select 
            value={pageSize} onChange={e=> setPageSize (Number(e.target.value))}
        >
            {
                [10, 25, 50].map(pageSize=>(
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))
            }

        </select>
        <button 
            onClick={()=> gotoPage(0)} 
                disabled={!canPreviousPage}>
                {'<<'}
        </button>

        <button 
            onClick={()=>previousPage()}
            disabled={!canPreviousPage}>
                Previous
        </button>
        <button 
            onClick={()=>nextPage()} 
            disabled={!canNextPage}>
                Next
        </button>

        <button 
        onClick={()=> gotoPage(pageCount-1)} 
            disabled={!canNextPage}>
            {'>>'}
        </button>


    </div>
    </>
  )
}