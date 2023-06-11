import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

//layouts
import CareersLayout from './layouts/CareersLayout';
import HelpLayout from './layouts/HelpLayout';
import RootLayout from './layouts/RootLayout';

//pages
import About from './pages/About';
import CareerDetails, { careerLoader } from './pages/careers/CareerDetails';
import Careers, { careersLoader } from './pages/careers/Careers';
import CarrerError from './pages/careers/CarrerError';
import Contact, { contactAction } from './pages/help/Contact';
import Faq from './pages/help/Faq';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      <Route index element={<Home />} />

      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<CarrerError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
