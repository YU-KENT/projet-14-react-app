import React from "react";
import {states,departments} from "../../data/data";
import DatesPicker from"../containers/Datespicker"
import { Link } from "react-router-dom"
import { useDispatch, useSelector  } from 'react-redux'
import * as actions from '../../outils/reducer/employeeReducer' 
import UserCreatedModal from'../containers/Modal';
import {ListDeroulant} from 'yu-component-library'
import { useState } from 'react'

function Home(){
const dispatch= useDispatch()
const [isModalOpen, setModalOpen] = useState(false);
const state = useSelector((state)=>(state.employee))
const openModal = () => {
      setModalOpen(true);
    };

const closeModal = () => {
      setModalOpen(false);
    };

const handleSubmit = ()=>{
    openModal()
    console.log("state",state)
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(state);
    localStorage.setItem('employees', JSON.stringify(employees));
}
const [startDate, setStartDate] = useState(new Date());
return(
   
     <><section>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to="/employees">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label>First Name</label>
                <input type="text"
                    onChange={(e) => { dispatch(actions.setFristName(e.target.value)); } } 
                />

                <label>Last Name</label>
                <input type="text"
                    onChange={(e) => { dispatch(actions.setLastName(e.target.value)); } } 
                />

                <label>Date of Birth</label>
                <DatesPicker day='setDateOfBirth'/>

                <label>Start Date</label>
                <DatesPicker day='setStartDate' />
                
                <fieldset className="address">
                    <legend>Address</legend>

                    <label>Street</label>
                    <input type="text"
                        onChange={(e) => { dispatch(actions.setStreet(e.target.value)); } } 
                    />

                    <label>City</label>
                    <input type="text"
                        onChange={(e) => { dispatch(actions.setCity(e.target.value)); } } 
                    />

                    <label>State</label>
                    <ListDeroulant
                        datas={states}
                        optionName='name'
                        valueName='abbreviation'
                        onChange={(value) => dispatch(actions.setState(value))} 
                    />

                    <label>Zip Code</label>
                    <input type="number"
                        onChange={(e) => { dispatch(actions.setZipCode(e.target.value)); } } 
                    />
                </fieldset>

                <label htmlFor="department">Department</label>
                <ListDeroulant
                    datas={departments}
                    optionName='department'
                    onChange={(value) => dispatch(actions.setDepartment(value))} />

            </form>
            <button className='btn_save' onClick={handleSubmit}>Save</button>
        </div>
    </section>
    <UserCreatedModal
    isOpen={isModalOpen}
    onClose={closeModal}
    />
    </>
       
)

}
export default Home