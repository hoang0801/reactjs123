import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Footer from '../component/Footer';
import Header from '../component/Header';

function LayOut() {
  return (
    <Container>
      <Box >
        <Header />
      </Box>
      <Footer />

    </Container>

  );
}

export default LayOut;