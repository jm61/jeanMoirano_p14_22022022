import { useState } from "react"
import {states} from '../datas/states'
import {departments} from '../datas/departments'
import './Form.css'
import Modal from 'jm61-p14-modal'
import Select from '../components/Select'
import Calendar from '../components/Calendar'
import { useGlobalState } from '../state.js'

/**
 * Form component, capture data from different inputs and
 * add in useGlobalState
 * @returns render
 */
 export default function Form() {
  const [show, setShow] = useState(false)
  const [employees, setEmployees] = useGlobalState('employee')

  const [addFromData, setAddFormData] = useState({
    firstname: '',
    lastname: '',
    startDate: '',
    department: '',
    birthDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  })
    const handleChange = e => {
      e.preventDefault()
      const fieldName = e.target.getAttribute('name')
      const fieldValue = e.target.value
      const newFormData = { ...addFromData }
      newFormData[fieldName] = fieldValue
      setAddFormData(newFormData)
    }
   
    const submit = e => {
      e.preventDefault()

      const newEmployee = {
        firstname: addFromData.firstName,
        lastname: addFromData.lastName,
        startDate: addFromData.startDate,
        department: addFromData.Departments,
        birthDate: addFromData.birthDate,
        street: addFromData.Street,
        city: addFromData.City,
        state: addFromData.States,
        zipCode: addFromData.zipCode,
      }
  
      const newEmployees = [...employees, newEmployee]
      setEmployees(newEmployees)
      console.log(JSON.stringify(newEmployees,null,2))
      setShow(true)
      console.log(newEmployees)
      const form = e.target
      form.reset()
    }
    
    return (
    <div>
      <form onSubmit={submit} className="containerForm">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          
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
          <input type="text" id="street" name="Street" value={Form.street} onChange={handleChange} required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="City" value={Form.city} onChange={handleChange} required />

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" name="zipCode" id="zipCode" value={Form.zipCode} onChange={handleChange} required />

          <Select name="States" id="states" type={states} action={handleChange} />
        </fieldset>
          
          <Select name="Departments" id="departments" type={departments} action={handleChange} />
        
          <button className="button" type="submit">Add Employee</button>
        </form> 
          <Modal onClose={() => setShow(false)} show={show} >
            {addFromData.firstName} {addFromData.lastName}
          </Modal>
    </div>
    )
}