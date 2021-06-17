import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function PointsForm() {
  const [name, setName] = useState('')
  const [points, setPoints] = useState('')
  const [date, setDate] = useState('')

  function handleSubmit() {
    return console.log('submit')
  }
  return (
    <div id="form-wrapper">
      <h2>Add Transaction</h2>
      <form id='points-form' onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="points"
          type="number"
          value={points}
          onChange={(e) => {
            setPoints(e.target.value);
          }}
        />
        <DatePicker
          placeholderText='Select a Date'
          selected={date}
          onChange={(newDate) => { setDate(newDate) }}
          showTimeInput
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default PointsForm
