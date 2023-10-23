import React from "react";
import ErrorPage from "../pages/error-page.tsx";
import Homepage from "../pages/homePage/home-page.tsx";
import SideLayout from "../pages/sideLayout/side-layout.tsx";
import SystemDescription from "../pages/systemDescription/system-description.tsx";
import SystemFunction from "../pages/systemFunction/system-function.tsx";
import Win10Desktop from "../pages/win10Desktop/win10-desktop.tsx";
import CustomDesktop from "../pages/customDesktop/custom-desktop.tsx";
import StoragePage from "../pages/storagePage/storage-page.tsx";
import ContactPage from "../pages/contact/contact.tsx";

const Routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/side-layout",
    element: <SideLayout />,
    children: [
      {
        path: "/side-layout/system-description",
            element: <SystemDescription />,
      },
      {
        path: "/side-layout/system-function",
        element: <SystemFunction />,
      },
      {
        path: "/side-layout/win10-desktop",
        element: <Win10Desktop />,
      },
      {
        path: "/side-layout/custom-desktop",
        element: <CustomDesktop />,
      },
      {
        path: "/side-layout/storage-page",
        element: <StoragePage />,
      },
      {
        path: "/side-layout/contact",
        element: <ContactPage />,
      }
    ],
  },
];

export default Routes;
