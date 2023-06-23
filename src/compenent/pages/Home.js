import ListsState from "../app/ListsState"
import ListDepartment from "../app/ListsDepartment" 
import DatesPicker from"../app/Datespicker"
import { Link } from "react-router-dom"
import { useDispatch, useSelector  } from 'react-redux'
import * as actions from '../../outils/reducer/employeeReducer' 
import { useState } from "react"
import Modal from'../containers/Modal'

function Home(){
const state = useSelector((state)=>(state.employee))
const[status, setStatus] = useState(false)
const dispatch= useDispatch()
const handleSubmit = ()=>{
    setStatus(true)
    console.log("state",state)
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(state);
    localStorage.setItem('employees', JSON.stringify(employees));
}

return(
    status ?  <Modal/>
     :  <section>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to="/employees">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label>First Name</label>
                <input type="text"
                onChange={(e)=>{dispatch(actions.setFristName(e.target.value))}} 
                />

                <label>Last Name</label>
                <input type="text"
                onChange={(e)=>{dispatch(actions.setLastName(e.target.value))}} 
                />

                <label>Date of Birth</label>
                <DatesPicker setBirthday = {true}/>

                <label>Start Date</label>
                <DatesPicker setBirthday = {false}/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label >Street</label>
                    <input type="text" 
                    onChange={(e)=>{dispatch(actions.setStreet(e.target.value))}} 
                    />

                    <label>City</label>
                    <input type="text" 
                    onChange={(e)=>{dispatch(actions.setCity(e.target.value))}} 
                    />

                    <label >State</label>
                    <ListsState/>
                    <label>Zip Code</label>
                    <input type="number" 
                    onChange={(e)=>{dispatch(actions.setZipCode(e.target.value))}} 
                    />
                </fieldset>

                <label htmlFor="department">Department</label>
                <ListDepartment/>
            </form>

            <button onClick={handleSubmit}>Save</button>
        </div>
       

    </section>
    
)

}
export default Home