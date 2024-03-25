import React, { useEffect, useState } from "react";
import {
  Boxes,
  Instagram,
  Mail,
  MapPinned,
  Phone,
  ReceiptText,
  Sliders,
} from "lucide-react";
import {
  updateDoc,
  doc,
  setDoc,
  getDoc,
  addDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { Card } from "@tremor/react";
import { useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserComplaint = () => {
  const [userAuth, setUserAuth] = useState(null);
	const [userName, setUserName] = useState("");

  const redirect = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUserAuth(user);
          setUserName(user.email);
        } else {
          redirect("/");
          setTimeout(() => {
            alert("Please login to continue!");
          }, 500);
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

  const { complaintId } = useParams();
  const myId = complaintId;
  const [review, setReview] = useState("");
  const [reviewDesc, setReviewDesc] = useState("");
  const concatenatedText = review + reviewDesc;

  const [stat, setStat] = useState(null);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "issue");
        const snapshot = await getDocs(colRef);
        let issues = [];
        snapshot.docs.forEach((doc) => {
          if (doc.id == myId) {
            issues.push({ ...doc.data(), id: doc.id });
          }
        });
        setArr(issues);
        console.log(issues);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [myId]);

  const submitRev = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "issue", myId);
      await setDoc(docRef, {
        review: review,
        reviewDesc: reviewDesc,
        revStat: true,
      }, { merge: true });

      await addDoc(collection(db, "unfiltered_review"), {
        review: concatenatedText,
        id: myId,
        owner: sessionStorage.getItem("userEmail")
      });

      alert("Project Updated successfully");
    } catch (e) {
      alert("Project not Updated successfully");
      console.log(e);
    }
    e.target.reset();
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "issue", myId);
      await updateDoc(docRef, {
        status: stat,
      });
      alert("Project Updated successfully");
    } catch (e) {
      alert("Project not Updated successfully");
      console.log(e);
    }
    e.target.reset();
  };

  const cmpl = [
    {
      complaintName: "Water is not working",
      complaintDesc:
        "I live in Nallasopara and it is the wakanda of Mumbai and that is y there is a lot of water logging which is causing a lpt pf problems",
      type: "new ",
      userimg: "/./assets/logo.png",
      user: "Alvin",
      loc: "Andheri",
      count: "10",
    },
  ];
  return (
    <div className="">
      <div className="md:w-[90%] w-[95%] mx-auto relative pb-10">
        <div className="py-10">
          {arr &&
            arr.map((values, i) => {
              return (
                <Card key={i}>
                  <div className="grid md:grid-cols-2 gap-3 py-5">
                    <div className="">
                      <p className="mb-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        Complaint Info :
                      </p>
                      <h3 className="text-2xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        {values.title}
                      </h3>
                      <p className="mb-7 mr-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        {values.desc}
                      </p>
                      <div className="flex gap-3 ">
                        <div className="md:flex hidden rounded-full border-2 p-3 px-5 border-gray-400  flex-row gap-3">
                          <MapPinned />
                          {values.location}
                        </div>
                        <div className="rounded-full border-2 p-3 px-5 border-gray-400 flex flex-row gap-3">
                          <Boxes />
                          {values.type}
                        </div>
                        <div className="rounded-full border-2 p-3 px-5 border-gray-400 flex flex-row gap-3">
                          <ReceiptText />
                          {values.count}
                        </div>
                      </div>
                      <p className="md:hidden my-2 text-end flex flex-row gap-3">
                        <MapPinned />
                        {values.location}
                      </p>
                    </div>
                    <div className="md:mt-3 mt-10 md:border-0 border-t border-gray-400 md:pt-0 pt-5">
                      <p className="mb-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        User Info :
                      </p>
                      <form
                        onSubmit={submitRev}
                        className="flex items-center justify-center p-8"
                      >
                        <div className="w-[400px] bg-white border border-gray-300 shadow-2xl rounded-lg h-fit p-4">
                          <div className="border-gray-300 px-4 py-4">
                            <div className="text-2xl font-semibold mb-6">
                              Add a Review{" "}
                              <span className="text-gray-600 font-normal text-xl">
                                to get the best experience of{" "}
                              </span>
                              staying Happy
                            </div>
                            <div className="form">
                              <label className="text-gray-800 text-sm font-semibold">
                                Your Review Title
                              </label>
                              <input
                                className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
                                type="text"
                                placeholder="Enter your Issue"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required={true}
                              />

                              <label className="text-gray-800 text-sm font-semibold">
                                Your Review Description
                              </label>
                              <textarea
                                rows={3}
                                className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
                                type="text"
                                placeholder="Exxplain your Issue"
                                value={reviewDesc}
                                onChange={(e) => setReviewDesc(e.target.value)}
                                required={true}
                              />
                              <button
                                className="w-full text-center bg-gray-900 cursor-pointer font-medium hover:bg-slate-600 text-white rounded-full px-4 py-3 mt-4 text-sm"
                                type="submit"
                              >
                                Add Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Card>
              );
            })}
        </div>
        <form
          onSubmit={submitForm}
          className="md:hidden w-[95%] mx-auto flex flex-row gap-2"
        >
          <p className="ml-1 text-md text-tremor-content dark:text-dark-tremor-content">
            I'm happy with the solution :
          </p>
          <button
            type="submit"
            value={stat}
            onClick={() => setStat(true)}
            className="flex gap-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Yes
          </button>
          <button
            type="submit"
            value={stat}
            onClick={() => setStat(false)}
            className="flex gap-3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            No
          </button>
        </form>
        <div className="absolute md:block hidden bottom-5 right-0">
          <form onSubmit={submitForm} className="flex flex-row gap-2">
            <p className="text-lg text-tremor-content dark:text-dark-tremor-content">
              I'm happy with the solution :
            </p>
            <button
              type="submit"
              value={stat}
              onClick={() => setStat(true)}
              className="flex gap-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              <Sliders size={20} />
              Yes
            </button>
            <button
              type="submit"
              value={stat}
              onClick={() => setStat(false)}
              className="flex gap-3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              <Sliders size={20} />
              No, Not yet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserComplaint;
