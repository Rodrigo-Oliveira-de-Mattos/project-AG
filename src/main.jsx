import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import LearnMore from './pages/LearnMore'

import { register } from "swiper/element/bundle"
register()
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { learnMore } from './util/json/learnMore.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "atarashii-gakko!/learn-more",
        element: <LearnMore data={learnMore[0]} /*JSON ag - Link to hero*/ />
      },
      {
        path: "/member/learn-more/mizyu",
        element: <LearnMore data={learnMore[1]} /*JSON mizyu - Link to*/ />
      },
      {
        path: "/member/learn-more/rin",
        element: <LearnMore data={learnMore[2]} /*JSON rin - Link to*/ />
      },
      {
        path: "/member/learn-more/suzuka",
        element: <LearnMore data={learnMore[3]} /*JSON suzuka*/ />
      },
      {
        path: "/member/learn-more/kanon",
        element: <LearnMore data={learnMore[4]} /*JSON kanon - Link to*/ />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
