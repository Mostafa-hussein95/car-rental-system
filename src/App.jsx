import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import MasterLayout from './Layouts/MasterLayout';
import AllCars from './Pages/AllCars/AllCars';
import CarDetails from './Pages/CarDetails/CarDetails';
import NotFound from './Pages/NotFound/NotFound';

function App() {
 
  
 const routes = createBrowserRouter(
  [{
    path : '/', element : <MasterLayout/>, children : [
      {index : true, element : <Home/>},
        {path : 'allcars', element : <AllCars/>},
        {path : 'cardetails', element : <CarDetails/>},
        {path : '*', element : <NotFound/>},
        
    ]
  }]
 )

  return (
    <>
      <RouterProvider router={routes} ></RouterProvider>
    </>
  );
}
export default App;
