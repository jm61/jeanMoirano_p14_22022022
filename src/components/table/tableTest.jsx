import './tableTest.css'
//import {FaArrowDown, FaArrowUp} from 'react-icons/fa'
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import {useTable, usePagination, useGlobalFilter} from 'react-table'
import {useMemo} from 'react'
import {Columns} from './Columns'
import GlobalFilter from './GlobalFilter'
import PageSize from './PageSize'

const TableTest = () => {
  const fromLS = JSON.parse(localStorage.getItem("employees")) || []
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => fromLS, []);
  const tableInstance = useTable({columns,data}, useGlobalFilter,usePagination)
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    getTableBodyProps,
    page,
    setGlobalFilter,
    state,
    setPageSize
  } = tableInstance
  const {globalFilter, pageSize} = state
  return (
    <div className="table__container">
      <BiUpArrow /><BiDownArrow />
      <header className="table__header">
      <PageSize pageSize={pageSize} setPageSize={setPageSize} />
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />  
      </header>
      <table className="table__contain" {...getTableProps()}>
        {/* Table Header */}
        <thead className="table__head">
        {headerGroups.map((headerGroup) => (
            <tr {...headerGroup} className="table__head--tr">
              {headerGroup.headers.map((column) => (
                <th {...column} className="table__head--th">
                  {column.render("Header")}
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
            );
          })}
        </tbody>
        {/* End of Table Body */}
      </table>
    </div>
  )
}
export default TableTest