import {format} from 'date-fns';
import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
    {
       Header: 'Id',
       Footer: 'Id',
       accessor: 'id',
       Filter: ColumnFilter,
      //  to remove column search from single colum
       disableFilters: true
    },
    {
       Header: 'First Name',
       Footer: 'First Name',
       accessor: 'first_name',
       Filter: ColumnFilter
    },
    {
       Header: 'Last Name',
       Footer: 'Last Name',
       accessor:'last_name',
       Filter: ColumnFilter
    },
   //  {
   //      Header: 'E-mail',
   //      Footer: 'E-mail',
   //      accessor:'email'
   //   },
    {
       Header: 'Date of Birth',
       Footer: 'Date of Birth',
       accessor:'date_of_birth',
       Cell: ({value})=>{return format(new Date(value), 'dd/MM/yyyy' )},
       Filter: ColumnFilter
    },
   //  {
   //      Header: 'Age',
   //      Footer: 'Age',
   //      accessor:'age'
   //   },
    {
       Header: 'Country',
       Footer: 'Country',
       accessor:'country',
       Filter: ColumnFilter
    },
    {
       Header: 'Phone Number',
       Footer: 'Phone Number',
       accessor:'phone',
       Filter: ColumnFilter
    }
];

export const GROUPED_COLUMNS =[
   {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id'
   },
   {
      Header: 'Name',
      Footer: 'Name',
      columns: [
         {
            Header: 'First Name',
            Footer: 'First Name',
            accessor: 'first_name'
         },
         {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor:'last_name'
         },
      ]
   },
   {
      Header: 'Info',
      Footer: 'Info',
      columns: [
         {
            Header: 'Date of Birth',
            Footer: 'Date of Birth',
            accessor:'date_of_birth'
         },
         {
            Header: 'Country',
            Footer: 'Country',
            accessor:'country'
         },
         {
            Header: 'Phone Number',
            Footer: 'Phone Number',
            accessor:'phone'
         }
      ]
   }
]