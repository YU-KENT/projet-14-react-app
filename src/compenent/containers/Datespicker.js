import DatePicker from "react-datepicker";
import { useDispatch} from 'react-redux'
import { useState } from "react";
import * as actions from '../../outils/reducer/employeeReducer'
import "react-datepicker/dist/react-datepicker.css"

function DatesPicker(props){
const [startDate, setStartDate] = useState(new Date());
const dispatch = useDispatch()

return (
props.setBirthday ?
<DatePicker selected={startDate}
onChange={(date) => {
setStartDate(date)
const selectDate = date.toISOString().slice(0,10)
console.log("true",selectDate)
dispatch(actions.setDateOfBirth(selectDate))
}} />
:
<DatePicker  selected={startDate} 
onChange={(date) => {
setStartDate(date)
const selectDate = date.toISOString().slice(0,10)
console.log("false",selectDate)
dispatch(actions.setStartDate(selectDate))
}} />
)



}
export default DatesPicker