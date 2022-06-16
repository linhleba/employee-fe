// import logo from './logo.svg';
// import './App.css';
import SnackBar from './components/SnackBar/SnackBar';
import { Layout } from './components/Layout/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Paths from './Paths';

function App() {
  return (
    <BrowserRouter>
      <SnackBar />
      <Paths />
    </BrowserRouter>
  );
}

export default App;
