import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Main from "./layouts/Main";
import SpeechChatbot from "./components/SpeechChatbot";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <div>Hi</div>,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/joytest",
				element: <SpeechChatbot />,
			},
      {
				path: "/chatbot",
				element: <Chatbot />,
			},
      {
				path: "/dashboard",
				element: <div className="bg-gray-100 ">
        <Dashboard/>
      </div>,
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
