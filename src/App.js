import React from 'react'
import './App.css';
import Student from './Student'
import studentsArray from './studentsData'

function App() {
  const students = studentsArray.map((ele, index) => { 
  return (
    <Student
    name={ele.name}
    bio={ele.bio}
    scores={ele.scores}
    key={index}
    />
  )
})

return (
  <div className="App">
    {students}
  </div>
  )
}

export default App;
