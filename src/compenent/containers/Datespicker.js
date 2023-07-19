import DatePicker from "react-datepicker";
import { useDispatch} from 'react-redux'
import { useState } from "react";
import * as actions from '../../outils/reducer/employeeReducer'
import "react-datepicker/dist/react-datepicker.css"


function DatesPicker({day}){
const isBirthDay = day ==='setDateOfBirth'
const [startDate, setStartDate] = useState(null);
const dispatch = useDispatch()

const formatDay =  (value)=> {
        const date = new Date(value);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

return (
<DatePicker 
peekNextMonth
showMonthDropdown
showYearDropdown
dropdownMode="select"
selected={startDate}
onChange={(date) => {
setStartDate(date)
const formattedDate = formatDay(date)
isBirthDay? dispatch(actions.setDateOfBirth(formattedDate))
: dispatch(actions.setStartDate(formattedDate))
}} 
/>

)
}
export default DatesPicker