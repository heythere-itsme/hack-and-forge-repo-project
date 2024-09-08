import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePageLayout from './App.jsx'
import LoginPage from './Components/LoginPage.jsx'
import SignUpPage from './Components/SignUpPage.jsx'
import LoginPagelayout from './LoginPagelayout.jsx'
import HomePage from './Components/HomePage.jsx'
import LearnPageD from './Components/LearnPageD.jsx'
import { Provider } from 'react-redux'
import {store} from '../store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/learn',
        element: <LearnPageD />
      }
    ]
  },
  {
    path: '/user',
    element: <LoginPagelayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <SignUpPage />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </StrictMode>
)
