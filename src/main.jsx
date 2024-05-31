import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/Main";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Schedule from "./pages/Schedule";
import Faq from "./pages/Faq";
import Stats from "./pages/Stats";
import Rules from "./pages/Rules";
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
				element: <Schedule />,
			},
			{
				path: "/info/schedule",
				element: <Schedule />,
			},
			{
				path: "/info/faq",
				element: <Faq />,
			},
			{
				path: "/info/stats",
				element: <Stats />,
			},
			{
				path: "/info/rules",
				element: <Rules />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
