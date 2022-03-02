import './tableTest.css'
import {useTable} from 'react-table'
import {useMemo} from 'react'
import {Columns} from './Columns'

const TableTest = () => {
  const fromLS = JSON.parse(localStorage.getItem("employees")) || []
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => fromLS, []);
  const tableInstance = useTable({columns,data})
  const {
    getTableProps,
    headerGroups,
  } = tableInstance
  return (
    <div className="table__container">
      <header className="table__header">
        <small>Header</small>    
      </header>
      <table className="table__contain" {...getTableProps()}>
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
      </table>
    </div>
  )
}
export default TableTest