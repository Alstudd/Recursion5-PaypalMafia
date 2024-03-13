import { Presentation, Square } from "lucide-react";
import { Send, Inbox } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Navbar = () => {
  const [userAuth, setUserAuth] = useState(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  useEffect(() => {
    const listen = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUserAuth(user);
        } else {
          setUserAuth(null);
        }
      },
      (error) => {
        console.error("Auth state change error:", error);
      }
    );
    return () => {
      listen();
    };
  }, []);

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout Success");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center text-black space-x-3 rtl:space-x-reverse"
          >
            <Square />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Public Square
            </span>
          </a>
          <ul className="flex flex-row md:hidden">
            <li>
              <a
                href="/projects"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                <Presentation />
              </a>
            </li>
            <li>
              <a
                href="/inbox"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                <Inbox />
              </a>
            </li>
          </ul>
          <div
            className="hidden w-full text-white md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="/projects"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  <Presentation />
                </a>
              </li>
              <li>
                <a
                  href="/inbox"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  <Inbox />
                </a>
              </li>

              {userAuth ? (
                <>
                  <button
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    onClick={userSignout}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <button
                  onClick={userSignin}
                  className="block py-2 px-3 text-gray-900 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  SignUp / Login
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
