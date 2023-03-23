import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material'
import { useTheme } from '@emotion/react';
import theme from '../../theme';
function ProfileTextField(props) {
  return (
    <TextField  {...props} fullWidth margin='dense' variant='filled' sx={{
      margin:'20px auto',
      borderRadius: '10px', borderBottom: 'none', outline: 'none',
    }} 
      // InputProps={{ disableUnderline: true }} 
       />
  );
}

export default ProfileTextField;