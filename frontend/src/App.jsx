<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="bg-gray-100 ">
      <Navbar/>
      <Dashboard/>
    </div>
  )
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Main from "./layouts/Main";
import SpeechChatbot from "./components/SpeechChatbot";
import Chatbot from "./components/Chatbot";

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
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
>>>>>>> afdf4786fb3e7c4ddcdca6e7809e4592a84160e3
}

export default App;
