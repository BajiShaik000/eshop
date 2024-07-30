import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
])

export default App;
