import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Inventory from './Components/Inventory/Inventory'
import Main from './Components/Layout/Main'
import Login from './Components/Login/Login'
import Orders from './Components/Orders/Orders'
import Shop from './Components/Shop/Shop'
import loaderData from './LoaderData/LoaderData'
import AuthProvider from './Components/AuthProvider/AuthProvider'
import Register from './Components/Register/Register'

function App() {
  // const number = [10, 20, 30, 40, 50, 60];
  // const output = number.reduce((prev, curr) => prev + curr, 0)
  // console.log(output)
  // const items = [
  //   { name: 'x', price: 10 },
  //   { name: 'y', price: 20 },
  //   { name: 'z', price: 30 }
  // ]
  // const total = items.reduce((prev, curr) => prev + curr.price, 0)
  // console.log(total)
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', element: <Shop></Shop>
        },
        {
          path: 'shop', element: <Shop></Shop>
        },
        {
          path: 'orders',
          element: <Orders></Orders>,
          loader: loaderData
        },
        {
          path: 'inventory', element: <Inventory></Inventory>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },

  ])
  return (
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  )
}

export default App
