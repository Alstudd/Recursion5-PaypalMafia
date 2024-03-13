import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Main from "./layouts/Main";
import SpeechChatbot from "./components/SpeechChatbot";
import TTS from "./components/TTS";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";
<<<<<<< HEAD
import Home from "./components/Home";
=======
import ComplaintList from "./components/ComplaintList";
>>>>>>> 5c71230aa745e7d99e725f29a52c34c3af6dba90

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
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
				element: (
					<div className="bg-gray-100 ">
						<Dashboard />
					</div>
				),
			},
      {
				path: "/complaints",
				element: (
					<div className="md:min-h-[100vh] min-h-full bg-gray-100 ">
						<ComplaintList/>
					</div>
				),
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
