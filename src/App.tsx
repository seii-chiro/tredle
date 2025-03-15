import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Accreditation_Partnership from "./pages/Accreditation_Partnership"
import Testimonials from "./pages/Testimonials"
import Events_Webinars from "./pages/Events_Webinars"
import ContactUs from "./pages/ContactUs"

function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <div>404 ☠️</div>
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "programs",
          element: <Programs />
        },
        {
          path: "accreditation-and-partnerships",
          element: <Accreditation_Partnership />
        },
        {
          path: "testimonials",
          element: <Testimonials />
        },
        {
          path: "events-and-webinars",
          element: <Events_Webinars />
        },
        {
          path: "contact-us",
          element: <ContactUs />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App


//Home
//About
//Programs
//Accreditation and Partnership
//Testimonials
//Events and Webinars
//Contact Us