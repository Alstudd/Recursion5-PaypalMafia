import React from 'react';
import UserDashboard from './UserDashboard';

const DummyData = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePic: 'https://example.com/profile-pic.jpg',
  };

  // Dummy complaints data
  const complaints = [
    { id: 1, title: 'No Water', user: 'Alice', location: 'Andheri', status: false },
    { id: 2, title: 'No Electricity', user: 'Bob', location: 'Bandra', status: true },
    { id: 3, title: 'Noise Pollution', user: 'Charlie', location: 'Colaba', status: false },
  ];

  // Dummy sales data
  const salesData = [
    { product: 'Product A', revenue: 2500 },
    { product: 'Product B', revenue: 3500 },
    { product: 'Product C', revenue: 4200 },
    { product: 'Product D', revenue: 1800 },
  ];

  // Dummy monthly revenue data
  const monthlyRevenueData = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 4000 },
    { month: 'Apr', revenue: 3500 },
    { month: 'May', revenue: 5000 },
  ];

  // Dummy product distribution data
  const productDistributionData = [
    { product: 'Product A', quantity: 30 },
    { product: 'Product B', quantity: 40 },
    { product: 'Product C', quantity: 20 },
    { product: 'Product D', quantity: 10 },
  ];

  return (
    <UserDashboard
      user={user}
      complaints={complaints}
      salesData={salesData}
      monthlyRevenueData={monthlyRevenueData}
      productDistributionData={productDistributionData}
    />
  );
};

export default DummyData;
