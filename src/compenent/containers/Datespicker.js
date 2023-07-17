import DatePicker from "react-datepicker";
import { useDispatch} from 'react-redux'
import { useState } from "react";
import * as actions from '../../outils/reducer/employeeReducer'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";

function DatesPicker({day}){
const isBirthDay = day ==='setDateOfBirth'
const [startDate, setStartDate] = useState(null);
const dispatch = useDispatch()
const years = range(1990, getYear(new Date()) + 1, 1);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
const customHeader =({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  })=>{
return (
    <div className="datePicker-header">
    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      {"<"}
    </button>
    <select 
      value={getYear(date)}
      onChange={({ target: { value } }) => changeYear(value)}
    >
      {years.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    <select
      value={months[getMonth(date)]}
      onChange={({ target: { value } }) =>
        changeMonth(months.indexOf(value))
      }
    >
      {months.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      {">"}
    </button>
  </div>
)
}
const formatDay =  (value)=> {
        const date = new Date(value);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;

    }

return (

<DatePicker 
renderCustomHeader={customHeader}
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