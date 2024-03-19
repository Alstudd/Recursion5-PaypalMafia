import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Card, AreaChart, DonutChart, BarChart } from "@tremor/react";
import { Link2 } from "lucide-react";

const UserDashboard = ({
  user,
  complaints,
  salesData,
  monthlyRevenueData,
  productDistributionData,
}) => {
  const colRef = collection(db, "issue");
  const [arr, setArr] = useState([]);
  const [newArr, setNewArr] = useState([]);
  const userMail = sessionStorage.getItem("userEmail");

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let issues = [];
        snapshot.docs.forEach((doc) => {
          const dataReceived = { ...doc.data() };
          if (sessionStorage.getItem("userEmail") == dataReceived.owner) {
            issues.push({ ...doc.data(), id: doc.id });
          }
        });
        setArr(issues);
        let getNewArr = issues.filter((item) => item.status === true && item.revStat === false);
        setNewArr(getNewArr);
        console.log(issues);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const countStatus = (setComplaintArr) => {
    let newPositive = 0;
    let newNegative = 0;
    for (let i = 0; i < setComplaintArr.length; i++) {
      if (setComplaintArr[i].status === true) {
        newPositive += 1;
      } else {
        newNegative += 1;
      }
    }
    return { newPositive, newNegative };
  };
  const { newPositive, newNegative } = countStatus(arr);

  const countLoc = (setComplaintArr) => {
    let Nalla = 0;
    let NallaSolved = 0;
    let Malad = 0;
    let MaladSolved = 0;
    let Andheri = 0;
    let AndheriSolved = 0;
    let Others = 0;
    let OthersSolved = 0;
    let Total = 0;
    for (let i = 0; i < setComplaintArr.length; i++) {
      if (setComplaintArr[i].location === "Nallasopara") {
        Nalla += 1;
        Total += 1;
        if (setComplaintArr[i].status === true) {
          NallaSolved += 1;
        }
      } else if (setComplaintArr[i].location === "Malad") {
        Malad += 1;
        Total += 1;
        if (setComplaintArr[i].status === true) {
          MaladSolved += 1;
        }
      } else if (setComplaintArr[i].location === "Andheri") {
        Andheri += 1;
        Total += 1;
        if (setComplaintArr[i].status === true) {
          AndheriSolved += 1;
        }
      } else {
        Others += 1;
        Total += 1;
        if (setComplaintArr[i].status === true) {
          OthersSolved += 1;
        }
      }
    }
    return {
      Nalla,
      Malad,
      Andheri,
      Others,
      Total,
      NallaSolved,
      MaladSolved,
      AndheriSolved,
      OthersSolved,
    };
  };
  const {
    Nalla,
    Malad,
    Andheri,
    Others,
    Total,
    NallaSolved,
    MaladSolved,
    AndheriSolved,
    OthersSolved,
  } = countLoc(arr);

  const StatusRatio = [
    {
      name: "Solved Issues",
      count: newPositive,
    },
    {
      name: "Unsolved Issues",
      count: newNegative,
    },
  ];

  const valueFormatter = function (number) {
    return new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div className="md:w-[90%] w-[95%] mx-auto">
      <Card className="my-2 p-4 col-span-1 md:col-span-2 lg:col-span-1 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={sessionStorage.getItem("photo")}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">
              {sessionStorage.getItem("name")}
            </h2>
            <p className="text-sm text-gray-500">{userMail}</p>
          </div>
        </div>
        {/* Add any additional user actions/buttons here */}
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* User Profile Card */}

        {/* Sales Overview Card */}
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <BarChart
            data={salesData}
            index="product"
            categories={["revenue"]}
            colors={["blue"]}
          />
        </Card>

        {/* Monthly Revenue Card */}
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Review</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Complaint
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Review
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {newArr &&
                newArr.map((values, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {values.title}
                    </td>
                    <a
                      href={`user-complaint/${values.id}`}
                      className={`text-end px-6 py-4 whitespace-nowrap text-sm ${
                        values.status ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      <Link2 />
                    </a>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>

        {/* Product Distribution Card */}

        <Card className="h-full">
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Completion Ratio
          </h3>
          <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Ratio of the no. of complaints / the no. of complaints recieved by
            the government
          </h3>
          <DonutChart
            data={StatusRatio}
            className="mt-4 h-[11rem]"
            category="count"
            index="name"
            valueFormatter={valueFormatter}
            colors={["blue", "cyan"]}
            onValueChange={(v) => setValue(v)}
          />
          <div className="md:grid grid-cols-2 gap-3">
            <a
              href="/user-complaint"
              className="w-full text-center bg-gray-900 cursor-pointer font-medium hover:bg-slate-600 text-white rounded-md px-4 py-3 mt-4 text-sm"
            >
              User Complaints
            </a>
            <a
              href="/add-issue"
              className="w-full text-center bg-white border border-gray-900 cursor-pointer font-medium text-black rounded-md px-4 py-3 mt-4 text-sm"
            >
              Add Complaints
            </a>
          </div>
        </Card>

        {/* Complaint List Card */}
        <Card className="p-4 col-span-3">
          <h2 className="text-lg font-semibold mb-4">Complaint List</h2>
          <a href="/user-complaint" className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Complaint
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {arr &&
                  arr.map((values) => (
                    <tr key={values.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {values.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {values.owner}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {values.location}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          values.status ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {values.status ? "Solved" : "Pending"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
