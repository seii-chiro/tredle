import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Accreditation_Partnership from "./pages/Accreditation_Partnership"
import Testimonials from "./pages/Testimonials"
import Events_Webinars from "./pages/Events_Webinars"
import ContactUs from "./pages/ContactUs"
import ATC from "./pages/ATC"
import CTGP from "./pages/CTGP"
import LRKH from "./pages/LRKH"
import Certification from "./pages/Certification"
import Enrollment from "./pages/Enrollment"
import Training_Delivery from "./pages/Training_Delivery"
import Faculty from "./pages/Faculty"
import Training_Categories from "./pages/Training_Categories"
import NotFound from "./pages/NotFound"

function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />
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
        {
          path: "programs/faculty-and-certified-training-instructor",
          element: <Faculty />
        },
        {
          path: "programs/training-categories",
          element: <Training_Categories />
        },
        {
          path: "programs/certification-programs",
          element: <Certification />
        },
        {
          path: "/programs/training-delivery-options",
          element: <Training_Delivery />
        },
        {
          path: "/programs/enrollment-and-registration",
          element: <Enrollment />
        },
        {
          path: "programs/atc-services",
          element: <ATC />
        },
        {
          path: "programs/corporate-training-and-government-services",
          element: <CTGP />
        },
        {
          path: "programs/learning-resources-and-knowledge-hub",
          element: <LRKH />
        }
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