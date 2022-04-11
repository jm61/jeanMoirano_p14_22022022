import './tableTest.css'
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import {useTable, usePagination, useGlobalFilter, useSortBy} from 'react-table'
import {useMemo} from 'react'
import {Columns} from './Columns'
import GlobalFilter from './GlobalFilter'
import PageSize from './PageSize'
import PageIndex from './PageIndex'
import { useGlobalState } from '../../state'

const TableTest = () => {
  const fromLS = JSON.parse(localStorage.getItem("employees")) || []
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => fromLS, []);
  const employees = useGlobalState('employee')
  //console.table(employees)
  const tableInstance = useTable({columns,employees}, useGlobalFilter,useSortBy,usePagination)

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    getTableBodyProps,
    page,
    setGlobalFilter,
    state,
    setPageSize,
    nextPage,
    previousPage,
    gotoPage,
    canNextPage,
    canPreviousPage,
  } = tableInstance

  const {globalFilter, pageSize, pageIndex} = state

  return (
    <div className="table__container">
      <header className="table__header">
      <PageSize pageSize={pageSize} setPageSize={setPageSize} />
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />  
      </header>

      <table className="table__contain" {...getTableProps()}>
        {/* Table Header */}
        <thead className="table__head">
        {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table__head--tr">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="table__head--th">
                  {column.render("Header")}
                  {column.isSorted ? column.isSortedDesc ? <BiDownArrow /> : <BiUpArrow /> : " "}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* End of Table Header */}
        {/* Table Body */}
        <tbody {...getTableBodyProps()} className="table__body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table__body--tr">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="table__body--td">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            )
          })}
        </tbody>
        {/* End of Table Body */}
      </table>
      <PageIndex
        data={data}
        gotoPage={gotoPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        page={page}
        nextPage={nextPage}
        pageIndex={pageIndex}
        previousPage={previousPage}
        />
    </div>
  )
}
export default TableTest