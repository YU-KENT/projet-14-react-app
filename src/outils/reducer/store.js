import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../reducer/employeeReducer'


const store = configureStore({
  reducer: {
    employee: employeeReducer,

  }
})

export default store