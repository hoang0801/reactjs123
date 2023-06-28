import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";


function Header(){
  return(
    <Box marginTop={10} >
      <Box>
    <Divider>
    <img src="//theme.hstatic.net/200000639001/1001045841/14/logo.png?v=68" alt="Otosieuluot" class="img-responsive"/>
  </Divider>
  </Box>

<Box>
<Header2/>
</Box>
  </Box>
  )
}

function Header2(){
  return(
    <Box>
      <Stack direction="row" spacing={2}>

    </Stack>
    </Box>
  )
}

export default Header

