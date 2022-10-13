import React from 'react'
import './Card.css'

//Selfmade reusable card component. This works the same way as 
//MUI library components
export default function Card(props) {
    const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}
