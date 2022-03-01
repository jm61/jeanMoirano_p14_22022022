import "./List.css"
import list from "../datas/list.js"
import "../components/Topbar.css"
import Topbar from '../components/Topbar'
import Table from '../components/Table'


const List = () => {
  document.title = "Wealth Health - Employees List"
  return (
    <div>
      <Topbar />
      {/* <header className="Topbar-container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <h1 className="title">HRnet</h1>
        <Link to="/" className="list">Home</Link>
      </header> */}
      <div className="container">
        <h1>Employees List</h1>
        {list.map((employee, idx) => (
          <h2 key={idx}>
            {" "}
            {employee.firstName} {employee.lastName}
          </h2>
        ))}
      </div>
    </div>
  )
}
export default List
