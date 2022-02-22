import { useState } from "react"
import {states} from '../datas/states'
import {departments} from '../datas/departments'
import './Form.css'

const Form = () => {
    const [Form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
      })
    const handleChange = () => {
        console.log('change')
    }
    
    return (
    <div>
      <form className="containerForm">
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

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" id="dateOfBirth"/>

        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" value={Form.street} onChange={handleChange} required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" value={Form.city} onChange={handleChange} required />

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" id="zipCode" value={Form.zipCode} onChange={handleChange} required />
          <select name="" id="">
          {states.map( data => (
            <option value={data.value} key={data.abbreviation}>
            {data.name}
          </option>
          ))}
          </select>
        </fieldset>

        <select>
        {departments.map( department => (
            <option value={department.value} key={department.id}>
            {department.name}
          </option>
          ))}
        </select>
          <button type="submit">Add Employee</button>
        </form>    
    </div>
    )
}
export default Form