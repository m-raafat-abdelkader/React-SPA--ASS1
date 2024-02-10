import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MasterLayout from './components/masterPage/MasterLayout';
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import StartFramework from './components/startFramework/StartFramework';
function App() {
  const routes = createBrowserRouter([
    {path: '', element: <MasterLayout/>, children:[
      {path: '', element: <StartFramework/>},
      {path:'start', element: <StartFramework/>},
      {path:'about', element:<About/>},
      {path:'portfolio', element:<Portfolio/>},
      {path:'contact', element:<Contact/>}
      
    ]}
  ])
  return (
   
      
      <RouterProvider router = {routes}></RouterProvider>
  
    
  );
}

export default App;
