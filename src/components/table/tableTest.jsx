import './tableTest.css'
import {useTable} from 'react-table'
import {useMemo} from 'react'
import {Columns} from './Columns'

const TableTest = () => {
  const fromLS = JSON.parse(localStorage.getItem("employees")) || []
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => fromLS, []);
  const tableInstance = useTable({columns,data})
  return (
    <h1>TABLE</h1>
  )
}
export default TableTest