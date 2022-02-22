import './Home.css'
import Topbar from '../components/Topbar'
import Form from '../components/Form'
const Home = () => {
    document.title = 'Wealth Health - Home'
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