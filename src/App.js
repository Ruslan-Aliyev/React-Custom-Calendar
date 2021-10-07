import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import moment from 'moment';

import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

import range from "lodash/range";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [size, setSize] = useState(0);

  const years = range(1800, getYear(new Date()) + 1, 1);
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
    "December",
  ];

  return (
    <DatePicker 
      className="custom-class"
      placeholder="Custom Placeholder"
      calendarStartDay={1}
      // selected={moment("01/01/1800").toDate()} 
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        console.dir(date);
      }} 
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 5,
            display: "flex",
            justifyContent: "left",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => {changeYear(value);setSize(0)}}
            onMouseDown={() => setSize(10)}
            onBlur={() => setSize(0)}
            size={size}
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
      )}
    />
  );
}

export default App;
