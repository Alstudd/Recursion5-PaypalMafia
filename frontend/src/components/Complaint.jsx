import React from "react";
import {
  Boxes,
  Instagram,
  Mail,
  MapPinned,
  Phone,
  ReceiptText,
  Sliders,
} from "lucide-react";
import { Card } from "@tremor/react";

const Complaint = () => {
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
          {cmpl.map((values, i) => {
            return (
              <Card key={i}>
                <div className="grid md:grid-cols-2 gap-3 py-5">
                  <div className="">
                    <p className="mb-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      Complaint Info :
                    </p>
                    <h3 className="text-2xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      {values.complaintName}
                    </h3>
                    <p className="mb-7 mr-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      {values.complaintDesc}
                    </p>
                    <div className="flex gap-3 ">
                      <div className="md:flex hidden rounded-full border-2 p-3 px-5 border-gray-400  flex-row gap-3">
                        <MapPinned />
                        {values.loc}
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
                      {values.loc}
                    </p>
                  </div>
                  <div className="md:mt-3 mt-10 md:border-0 border-t border-gray-400 md:pt-0 pt-5">
                    <p className="mb-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      User Info :
                    </p>
                    <div className="flex flex-row gap-10">
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={values.userimg}
                        alt="Bonnie image"
                      />
                      <div>
                        <h3 className="text-2xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                          Name
                        </h3>
                        <p className="mb-3 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                          email
                        </p>
                        <div className="flex flex-row gap-3">
                          <Phone />
                          <Mail />
                          <Instagram />
                        </div>
                      </div>

                      {/* Firebase call for user details */}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="md:hidden w-[95%] mx-auto flex flex-row gap-2">
            <p className="ml-1 text-md text-tremor-content dark:text-dark-tremor-content">
              Solved the problem :
            </p>
            <button
              type="button"
              className="flex gap-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              Yes
            </button>
            <button
              type="button"
              className="flex gap-3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Not yet
            </button>
          </div>
        <div className="absolute md:block hidden bottom-5 right-0">
          <div className="flex flex-row gap-2">
            <p className="text-lg text-tremor-content dark:text-dark-tremor-content">
              Solved the problem :
            </p>
            <button
              type="button"
              className="flex gap-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              <Sliders size={20} />
              Yes
            </button>
            <button
              type="button"
              className="flex gap-3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              <Sliders size={20} />
              Not yet, We will work on it soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
