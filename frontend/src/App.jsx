import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Main from "./layouts/Main";
import SpeechChatbot from "./components/SpeechChatbot";
import TTS from "./components/TTS";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ComplaintList from "./components/ComplaintList";
import Nav from "./components/Nav";
import Complaint from "./components/Complaint";
import Issue from "./components/Issue";
import UserDashboard from "./components/UserDashboard";
import DummyData from "./components/DummyData";

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
        element: (
          <div>
            <Nav />
            <Login />
          </div>
        ),
      },
      {
        path: "/joytest",
        element: (
          <div>
            <Nav />
            <SpeechChatbot />
          </div>
        ),
      },
      {
        path: "/chatbot",
        element: (
          <div>
            <Nav />
            <Chatbot />
          </div>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <div>
            <Nav />
            <div className="bg-gray-100 ">
              <Dashboard />
            </div>
          </div>
        ),
      },
      {
        path: "/complaints",
        element: (
          <div className="md:min-h-[100vh] min-h-full bg-gray-100 ">
            <Nav />
            <ComplaintList />
          </div>
        ),
      },
      {
        path: "/add-issue",
        element: (
          <div className="md:min-h-[100vh] min-h-full bg-gray-100 ">
            <Nav />
            <Issue />
          </div>
        ),
      },
      {
        element: (
          <div className="md:min-h-[100vh] min-h-full bg-gray-100 ">
            <Nav />
            <Complaint />
          </div>
        ),
        path: "complaints/:complaintId",
      },
      {
        path: "/user-dashboard",
        element: (
          <div className="md:min-h-[100vh] min-h-full bg-gray-100 ">
            <Nav />
            <DummyData />
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
