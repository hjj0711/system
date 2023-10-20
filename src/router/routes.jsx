import ErrorPage from "../pages/error-page";
import Root from "../pages/rootPage/root.jsx";
 import Homepage from "../pages/homePage/home-page.tsx";
// import { action as destroyAction } from "./routes/destroy";
// import Index from "./routes/index";

const Routes =  [
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        // loader: rootLoader, // 路由提前获取数据
        // action: rootAction,
        // children: [
        //   { index: true, element: <Index /> },
        //   {
        //     path: "contacts/:contactId",
        //     element: <Contact />,
        //     loader: contactLoader,
        //   },{
        //     path: "contacts/:contactId",
        //     element: <Contact />,
        //   }, 
        //   {
        //     path: "contacts/:contactId/edit",
        //     element: <EditContact />,
        //     loader: contactLoader,
        //     action: editAction,
        //   },{
        //     path: "contacts/:contactId/destroy",
        //     action: destroyAction,
        //   },
        // ],
      },
]
export default Routes;