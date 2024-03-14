// import React from "react";
// import { Card, AreaChart, DonutChart, BarChart } from "@tremor/react";

// const UserDashboard = () => {
//   // Sample user data
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     profilePic: "/chatbot.png",
//   };

//   // Sample sales data
//   const salesData = [
//     { category: "Product A", revenue: 2500 },
//     { category: "Product B", revenue: 3500 },
//     { category: "Product C", revenue: 4200 },
//     { category: "Product D", revenue: 1800 },
//   ];

//   // Sample chart data
//   const chartData = [
//     { date: "Jan", value: 200 },
//     { date: "Feb", value: 300 },
//     { date: "Mar", value: 400 },
//     { date: "Apr", value: 350 },
//     { date: "May", value: 500 },
//   ];

//   // Sample donut chart data
//   const donutChartData = [
//     { category: "Category 1", value: 30 },
//     { category: "Category 2", value: 40 },
//     { category: "Category 3", value: 20 },
//     { category: "Category 4", value: 10 },
//   ];

//   return (
//     <div className="flex flex-col space-y-4">
//       {/* User Profile Card */}
//       <Card className="p-4 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <img
//             src={user.profilePic}
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <h2 className="text-lg font-semibold">{user.name}</h2>
//             <p className="text-gray-500">{user.email}</p>
//           </div>
//         </div>
//         {/* Add any additional user actions/buttons here */}
//       </Card>

//       {/* Sales Card */}
//       <Card className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//         <BarChart
//           data={salesData}
//           index="category"
//           categories={["revenue"]}
//           colors={["blue"]}
//         />
//       </Card>

//       {/* Monthly Revenue Card */}
//       <Card className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
//         <AreaChart data={chartData} index="date" categories={["value"]} />
//       </Card>

//       {/* Product Distribution Card */}
//       <Card className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Product Distribution</h2>
//         <DonutChart data={donutChartData} index="category" category="value" />
//       </Card>

//       {/* Add more cards/components for additional dashboard elements */}
//     </div>
//   );
// };

// export default UserDashboard;


import React from "react";
import { Card, AreaChart, DonutChart, BarChart } from "@tremor/react";

const UserDashboard = ({ user, complaints, salesData, monthlyRevenueData, productDistributionData }) => {
  return (
    <div className="md:w-[90%] w-[95%] mx-auto">
    
      <Card className="my-2 p-4 col-span-1 md:col-span-2 lg:col-span-1 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
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
        <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
        <AreaChart data={monthlyRevenueData} index="month" categories={["revenue"]} />
      </Card>

      {/* Product Distribution Card */}
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-4">Product Distribution</h2>
        <DonutChart data={productDistributionData} index="product" category="quantity" />
      </Card>

      {/* Complaint List Card */}
      <Card className="p-4 col-span-3">
        <h2 className="text-lg font-semibold mb-4">Complaint List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complaint</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {complaints.map(complaint => (
                <tr key={complaint.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.location}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${complaint.status ? 'text-green-500' : 'text-red-500'}`}>{complaint.status ? 'Resolved' : 'Pending'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
    </div>
  );
};

export default UserDashboard;
