import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';
import MyntraStore from './store/index.js';

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {path:"/", element:<Home/>},
    {path:"/bag", element:<Bag/>},
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
