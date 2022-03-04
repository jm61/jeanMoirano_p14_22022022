import "./List.css"
import "../components/Topbar.css"
import Topbar from '../components/Topbar'
import {lazy, Suspense} from 'react'
const Table = lazy(() => import('../components/table/tableTest'))

const List = () => {
  document.title = "Wealth Health - Employees List"
  return (
    <div>
      <Topbar />
      <div className="container">
        <h1>Employees List</h1>
        <Suspense fallback={<q>Employees List is loading...</q>}>
        <Table />
        </Suspense>
      </div>
    </div>
  )
}
export default List
