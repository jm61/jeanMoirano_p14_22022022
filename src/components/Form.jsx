import { useState } from "react"
import {states} from '../datas/states'
import {departments} from '../datas/departments'
import './Form.css'
import Modal from 'jm61-p14-modal'

const Form = () => {
    const [show, setShow] = useState(false)
    const [Form, setForm] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
      })
    const handleChange = e => {
      e.preventDefault()
      setForm((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
    const submit = e => {
      e.preventDefault()
      console.log(Form)
      localStorage.setItem('List',JSON.stringify(Form))
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

        <label htmlFor="birthDate">Date of Birth</label>
        <input type="date" id="birthDate"/>

        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" />

        <fieldset className="address">
          <legend className="legend"> Address </legend>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" value={Form.street} onChange={handleChange} required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" value={Form.city} onChange={handleChange} required />

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" id="zipCode" value={Form.zipCode} onChange={handleChange} required />

          <select name='states' id='states'>
          {states.map( data => (
            <option value={data.value} key={data.abbreviation}>
            {data.name}
          </option>
          ))}
          </select>
        </fieldset>

        <select name='departments' id='departments'>
        {departments.map( department => (
            <option value={department.value} key={department.id}>
            {department.name}
          </option>
          ))}
        </select>
          <button className="button" type="submit">Add Employee</button>
        </form> 
          <Modal onClose={() => setShow(false)} show={show} >
            {Form.firstName} {Form.lastName}
          </Modal>
    </div>
    )
}
export default Form