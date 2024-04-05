import { Box, Typography, styled } from '@mui/material';

import Github from '../Assets/Images/git.jpeg';
import Linkdin from '../Assets/Images/link.png';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
        
    }
`;


export default function Data() {
  return (
    <Header>
        <Typography align={'center'} fontStyle={'italic'} fontSize={80} variant="h4">Code From Satyam Gupta</Typography>
        <Box justifyContent={'center'} style={{display: 'flex'}}>
            <a href='https://github.com/satya1588' ><img src={Github} alt='img'/></a> 
           <a href='https://linkedin.com/in/satyam-gupta-95bb45186'> <img style={{height:250, width:450}} src={Linkdin} alt='img'/> </a> 
        </Box>
    </Header>
  )
}
