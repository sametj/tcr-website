import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/Main";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Info from "./pages/Info";
import Schedule from "./pages/Info/Schedule";
import "./Main.scss";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
			{
				path: "/info",
				element: <Info />,
			},
			{
				path: "/info/schedule",
				element: <Schedule />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
