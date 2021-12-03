import React from 'react'
import Scores from './Score'

const Student = (props) => {
  return(
    <>
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
    <Scores 
    scores={props.scores}
    />
    </>
  )
}

export default Student