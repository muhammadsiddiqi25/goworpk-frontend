import React from 'react'

const AuthInputs = (props) => {
  return (
    <div className = 'auth-inputs'>
        <label>{props.label}</label>
        <input type = {props.text}  />
    </div>
  )
}

export default AuthInputs