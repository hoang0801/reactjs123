import './App.css';
import { AuthenProvider } from './context/authenContext';

function App() {
  return (
    <AuthenProvider>
      <login/>
    </AuthenProvider>
  );
}

export default App;
