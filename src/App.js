import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar></NavBar>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
