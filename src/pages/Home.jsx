import "./Home.css"
import "../components/Topbar.css"
import Form from "../components/Form"
import list from '../datas/list'
import Topbar from '../components/Topbar'

if(!localStorage.getItem('employees')) {
  localStorage.setItem('employees',JSON.stringify(list))
  console.log('localStorage loaded!')
}

const Home = () => {
  document.title = "Wealth Health - Home"
  return (
    <div>
      <Topbar />
    <div className="container">
        <Form />
      </div>
    </div>
  )
}
export default Home
