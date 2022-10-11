import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import QuizPage from './components/QuizPage/QuizPage';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:id',
          loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizPage></QuizPage>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
