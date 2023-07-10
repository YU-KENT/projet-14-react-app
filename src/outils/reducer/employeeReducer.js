import {  createSlice} from '@reduxjs/toolkit'


const{actions, reducer} = createSlice({
name:'employees',
initialState :{
      firstName:'',
      lastName:'',
      dateOfBirth:'',
      startDate:'',
      street:'',
      city:'',
      state:'AL',
      zipCode:'',
      department:'Sales',
      connected: false

},
reducers :{

  setFristName :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, firstName:action.payload.value}
    }
  },

  setLastName :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, lastName:action.payload.value}
    }
  },
  
  setStartDate :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, startDate:action.payload.value}
    }
  },

  setDateOfBirth :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, dateOfBirth:action.payload.value}
    }
  },

  setStreet :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, street:action.payload.value}
    }
  },
  
  setCity :{
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, city:action.payload.value}
    }
  },

  setState : {
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      console.log("setState",action.payload.value)
      return {...state, state:action.payload.value}
    }
  },

  setZipCode: {
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      return {...state, zipCode:action.payload.value}
    }
  },

  setDepartment: {
    prepare:(value)=>({
      payload:{value}
    }), 
    reducer:(state,action)=>{
      console.log("setDepartment",action.payload.value)
      return {...state, department:action.payload.value}
    }
  },
  SetConnected :{
    reducer:(state)=>{
      return {...state, connected:true}
    }
  }
}
})

export const {setFristName,setLastName,setState,setDepartment,
  setZipCode,setCity,setStreet,setStartDate,setDateOfBirth,SetConnected} = actions
export default reducer


  