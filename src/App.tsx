import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Service from "./pages/Service.tsx";
import NewProperty from "./pages/NewProperty.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "newProperty",
        element: <NewProperty />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
