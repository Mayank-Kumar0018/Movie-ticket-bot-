import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import Page2 from './component/Page2.jsx'
import BuyTicket from './component/BuyTicket.jsx'
import Purchase from './component/Purchase.jsx'
import View from './component/View.jsx'
// import Cancel from './component/cancel.jsx'
import Help from './component/Help.jsx'
import Cancel from './component/Cancel.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/page2",
        element: <Page2 />
      },
      {
        path: "/buy",
        element: <BuyTicket />
      },
      {
        path: "/purchase",
        element: <Purchase />
      },
      {
        path: "/view",
        element: <View />
      },
      {
        path: "/cancel",
        element: <Cancel />
      },
      {
        path: "/help",
        element: <Help />
      },

    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </StrictMode>,
)
