import './List.css'
import Topbar from '../components/Topbar'
const List = () => {
    document.title = 'Wealth Health - Employees List'
    return (
        <div>
            <Topbar />
            <div className="container">
                <h1>List</h1>
            </div>
        </div>
    )
}
export default List