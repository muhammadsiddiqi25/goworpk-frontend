import React , {useState}   from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const AuthPasswordInputs = (props) => {
  const [show,setShow] = useState(false)
  return (
    <div className = 'auth-inputs'>
        <label>{props.label}</label>
        <div className='auth-password-input'>
        <input type = {show?'text':'password'} />
        <button type = 'button' onClick={()=>{setShow(!show)}}>{show?<VisibilityIcon />    :<VisibilityOffIcon />}</button>
        </div>
    </div>
  )
}

export default AuthPasswordInputs