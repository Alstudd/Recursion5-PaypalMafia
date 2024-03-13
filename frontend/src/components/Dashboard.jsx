import React, { useState } from "react";
import { AreaChart, Card, DonutChart, BarChart } from "@tremor/react";
import { Filter, Sliders, SortAsc } from "lucide-react";

const Dashboard = () => {
  const complaintlist = [
    {
      complaint: "No Water",
      pic: "",
      user: "Alvin",
      count: "12",
      loc: "Andheri",
    },
    {
      complaint: "No Air",
      pic: "",
      user: "Joyvin",
      count: "30",
      loc: "Kandivali",
    },
    {
      complaint: "No Road",
      pic: "",
      user: "Alston",
      count: "19",
      loc: "Malad",
    },
  ];
  const newchartdata = [
    {
      name: "Amphibians",
      "Number of threatened species": 2488,
    },
    {
      name: "Birds",
      "Number of threatened species": 1445,
    },
    {
      name: "Crustaceans",
      "Number of threatened species": 743,
    },
    {
      name: "Ferns",
      "Number of threatened species": 281,
    },
  ];

  const sales = [
    {
      name: "New York",
      sales: 980,
    },
    {
      name: "London",
      sales: 120,
    },
  ];

  const [value, setValue] = useState(null);

  const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
  ];

  const valueFormatter = function (number) {
    return "$ " + new Intl.NumberFormat("us").format(number).toString();
  };
  const dataFormatter = (number) =>
    Intl.NumberFormat("us").format(number).toString();

  return (
    <div className="md:w-[90%] w-[95%] mx-auto py-3">
      <div className="grid md:grid-cols-4 gap-3">
        <div className="col-span-3">
          <div className="grid md:grid-cols-3 gap-3 mb-3 ">
            <Card className="mx-auto" decorationColor="indigo">
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Sales
              </p>
              <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                $34,743
              </p>
            </Card>
            <Card className="mx-auto" decorationColor="indigo">
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Sales
              </p>
              <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                $34,743
              </p>
            </Card>
            <Card className="mx-auto" decorationColor="indigo">
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Sales
              </p>
              <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                $34,743
              </p>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Card>
              <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Newsletter Revenue
              </h3>
              <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                $34,567
              </p>
              <AreaChart
                className="mt-4 h-72"
                data={chartdata}
                index="date"
                yAxisWidth={60}
                categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                colors={["indigo", "cyan"]}
                valueFormatter={valueFormatter}
              />
            </Card>
            <Card>
              <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Number of species threatened with extinction (2021)
              </h3>
              <BarChart
                className="mt-6"
                data={newchartdata}
                index="name"
                categories={["Number of threatened species"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
              />
            </Card>
          </div>
        </div>
        <div className="grid gap-3">
          <Card className="mx-auto" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Sales
            </p>
            <p className="text-3xl mb-4 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $34,743
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quisquam ipsam voluptatum esse porro incidunt assumenda dolorem
              perferendis asperiores necessitatibus, fuga provident molestias
            </p>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Number of species threatened with extinction (2021)
            </h3>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Newsletter Revenue
            </h3>
            <DonutChart
              data={sales}
              className="mt-4 h-[11rem]"
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={["blue", "cyan"]}
              onValueChange={(v) => setValue(v)}
            />
          </Card>
        </div>

        {/* <div className="flex flex-col gap-3">
          <Card className="mx-auto" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Sales
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $34,743
            </p>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Number of species threatened with extinction (2021)
            </h3>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Newsletter Revenue
            </h3>
            <DonutChart
              data={sales}
              className="mt-4 h-[11rem]"
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
              onValueChange={(v) => setValue(v)}
            />
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <Card className="mx-auto" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Sales
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $34,743
            </p>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Number of species threatened with extinction (2021)
            </h3>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Newsletter Revenue
            </h3>
            <DonutChart
              data={sales}
              className="mt-4 h-[11rem]"
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
              onValueChange={(v) => setValue(v)}
            />
          </Card>
        </div> */}
      </div>
      <a href="/complaints">
      <Card className="my-3">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Complaint List
          </h3>
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
              <th scope="col" className="text-start md:block hidden px-6 py-3">
                Count
              </th>
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
              <tr key={i} className="w-full bg-white border-b">
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
                    <p className="text-sm text-gray-500 truncate">
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
              </tr>
            );
          })}
        </table>
      </Card>
      </a>
    </div>
  );
};

export default Dashboard;
