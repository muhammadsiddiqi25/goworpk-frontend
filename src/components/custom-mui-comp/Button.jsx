import { styled } from '@mui/material/styles';
import {Button} from '@mui/material'
import { useTheme } from '@emotion/react';
import theme from '../../theme';
const SmallButton = styled(Button)(({ theme }) => ({
    color: 'white',
    boxShadow:'none',
    margin:'auto',
    ":hover":{
        boxShadow:'none',
        backgroundColor:'black'
    }
  }))

  export default SmallButton;