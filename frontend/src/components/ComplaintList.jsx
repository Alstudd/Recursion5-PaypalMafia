import { Filter, Link2, Sliders } from "lucide-react";
import { Card } from "@tremor/react";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ComplaintList = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const complaintlist = [
    {
      complaint: "No Water",
      pic: "",
      href: 1,
      user: "Alvin",
      count: "12",
      loc: "Andheri",
    },
    {
      complaint: "No Air",
      pic: "",
      href: 2,
      user: "Joyvin",
      count: "30",
      loc: "Kandivali",
    },
    {
      complaint: "No Road",
      pic: "",
      href: 3,
      user: "Alston",
      count: "19",
      loc: "Malad",
    },
    {
      complaint: "No Air",
      pic: "",
      href: 4,
      user: "Joyvin",
      count: "30",
      loc: "Kandivali",
    },
    {
      complaint: "No Road",
      pic: "",
      href: 5,
      user: "Alston",
      count: "19",
      loc: "Malad",
    },
  ];

  return (
    <div>
      <div className="md:w-[90%] w-[95%] mx-auto grid md:grid-cols-4 gap-3 py-3 ">
        <Card className="col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Complaint List
            </h3>
            <Filter onClick={openModal} className="md:hidden block" />
          </div>
          <table role="list" className="w-full divide-y divide-gray-200">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="max-w-6 md:px-6 md:flex hidden px-2 py-3"
                >
                  User
                </th>
                <th scope="col" className="md:px-6 px-2 py-3">
                  Complaint
                </th>
                <th
                  scope="col"
                  className="text-start md:block hidden px-6 py-3"
                >
                  Count
                </th>
                {/* <th
                  scope="col"
                  className="text-start md:block hidden px-6 py-3"
                >
                  Location
                </th> */}
                <th
                  scope="col"
                  className="md:text-start text-end md:px-6 px-2 py-3"
                >
                  Location
                </th>
              </tr>
            </thead>
            {complaintlist.map((values, i) => {
              return (
                  <tr className="w-full bg-white border-b">
                    <td
                      scope="row"
                      className="max-w-4 md:px-6 px-2 py-4 md:flex hidden font-medium text-gray-900 whitespace-nowrap"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={values.pic}
                          alt={values.user}
                        />
                      </div>
                    </td>
                    <th className="md:px-6 px-0 py-4">
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {values.complaint}
                        </p>
                        <p className="text-sm font-light text-gray-500 truncate">
                          {values.user}
                        </p>
                      </div>
                    </th>
                    <td className="w-10 text-start md:block hidden px-6 py-4">
                      <div className="md:inline-flex items-center text-base font-semibold text-gray-900">
                        {values.count}
                      </div>
                    </td>
                    <td className="w-10 md:px-6 px-0 py-4 md:text-start text-end">
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {values.loc}
                      </div>
                    </td>
                    <td className="w-10 text-start px-6 py-4">
                      <a href={`complaints/${values.href}`} className="md:inline-flex py-2 items-center text-base font-light text-blue-700">
                        <Link2/>
                      </a>
                    </td>
                  </tr>
              );
            })}
          </table>
        </Card>
        <Card className="md:block hidden relative max-h-[50vh]">
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Sorting Categories
          </h3>

          <form className="max-w-sm mx-auto">
            <label
              for="countries"
              className="block mt-3 mb-1 text-sm font-medium text-gray-900"
            >
              Select a Location
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Choose a Location</option>
              <option value="US">C</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <label
              for="countries"
              className="block mt-3 mb-1 text-sm font-medium text-gray-900"
            >
              Select a Complaint Category
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Choose a Category</option>
              <option value="US">C</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <button
              type="button"
              className="flex my-3 gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Sliders size={20} />
              Sort by Count
            </button>

          <div className="absolute bottom-5 right-5 rounded-full p-3 bg-gray-200">
            <Filter />
          </div>
          </form>
        </Card>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="relative flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Sorting Categories
                  </Dialog.Title>
                  <form className="max-w-sm mx-auto">
                    <label
                      for="countries"
                      className="block mt-3 mb-1 text-sm font-medium text-gray-900"
                    >
                      Select a Location
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected>Choose a Location</option>
                      <option value="US">C</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>

                    <label
                      for="countries"
                      className="block mt-3 mb-1 text-sm font-medium text-gray-900"
                    >
                      Select a Complaint Category
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected>Choose a Category</option>
                      <option value="US">C</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>

                    <button
                      type="button"
                      className="flex my-3 gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <Sliders size={20} />
                      Sort by Count
                    </button>
                  <button
                    onClick={closeModal}
                    className="absolute bottom-5 right-5 rounded-full p-3 bg-gray-200"
                    >
                    <Filter />
                  </button>
                      </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ComplaintList;
