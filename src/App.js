import { useContext } from 'react';
import {  RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Contexts/AuthProvider/AuthProvider';
import { routes } from './Routes/Route';

function App() {
  const {color}=useContext(AuthContext)
  return (
    <div >
      <div className={color?'bg-light':'bg-dark'}></div>
<RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
