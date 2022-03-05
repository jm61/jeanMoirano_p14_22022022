import { useState } from "react"
import {states} from '../datas/states'
import {departments} from '../datas/departments'
import './Form.css'
import Modal from 'jm61-p14-modal'
import list from '../datas/list'
import Select from '../components/Select'
import Calendar from '../components/Calendar'

const Form = () => {
    const [show, setShow] = useState(false)
    const [Form, setForm] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        states: '',
        zipCode: '',
        departments: '',
      })
    const handleChange = e => {
      e.preventDefault()
      setForm((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }
    const submit = e => {
      e.preventDefault()
      list.push(Form)
      console.log(list)
      localStorage.setItem('employees',JSON.stringify(list))
      setShow(true)
    }
    
    return (
    <div>
      <form onSubmit={submit} className="containerForm">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={Form.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={Form.lastName}
          onChange={handleChange}
          required
        />
        {/* <label htmlFor="birthDate">Date of Birth</label> */}
        <Calendar label='Date of Birth' name='birthDate' id='birthDate' action={handleChange} />

        <Calendar label='Start Date' name='startDate' id='startDate' action={handleChange} />

        <fieldset className="address">
          <legend className="legend"> Address </legend>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" value={Form.street} onChange={handleChange} required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" value={Form.city} onChange={handleChange} required />

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" id="zipCode" value={Form.zipCode} onChange={handleChange} required />

          <Select name="States" id="states" type={states} action={handleChange} />
        </fieldset>
          
          <Select name="Departments" id="departments" type={departments} action={handleChange} />
        
          <button className="button" type="submit">Add Employee</button>
        </form> 
          <Modal onClose={() => setShow(false)} show={show} >
            {Form.firstName} {Form.lastName}
          </Modal>
    </div>
    )
}
export default Form