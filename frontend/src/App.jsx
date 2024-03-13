import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Main from "./layouts/Main";
import SpeechChatbot from "./components/SpeechChatbot";
import TTS from "./components/TTS";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";
import ComplaintList from "./components/ComplaintList";
import Complaint from "./components/Complaint";

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
            <Complaint />
          </div>
        ),
      },
      {
        element: <Complaint />,
        path: "complaints/:complaintId",
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
