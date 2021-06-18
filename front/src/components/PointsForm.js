import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function PointsForm() {
  const [name, setName] = useState('')
  const [points, setPoints] = useState('')
  const [date, setDate] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
    const data = new FormData()
    data.append("payer", name.toUpperCase());
    data.append("points", points)
    data.append("timestamp", date)
    console.log(data)
    let postTransaction = await fetch("/api/points", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({name, points, date})
      body: JSON.stringify(data)
    }).then(res => res.json())
    return console.log(postTransaction)
  }
  async function getData(e) {
    e.preventDefault()
    let data = await fetch('/api/points')
    console.log(data)
    return data.data
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
            console.log(name)
          }}
        />
        <input
          placeholder="points"
          type="number"
          value={points}
          onChange={(e) => {
            setPoints(e.target.value);
            console.log(points)
          }}
        />
        <DatePicker
          placeholderText='Select a Date'
          selected={date}
          onChange={(newDate) => {
            setDate(newDate)
            console.log(newDate)
          }}
          showTimeInput
        />
        <button type="submit">Submit!</button>
      </form>
      <div>

      </div>
    </div>
  );
}

export default PointsForm
