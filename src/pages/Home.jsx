import "./Home.css"
import "../components/Topbar.css"
import Form from "../components/Form"
import Topbar from '../components/Topbar'

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
