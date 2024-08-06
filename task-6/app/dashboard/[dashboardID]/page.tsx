import React from 'react';
import Description from '../../components/serverSide/Description';
import About from '../../components/serverSide/About';

const DashboardData = ({ params }: { params: { dashboardID: string } }) => {
  const { dashboardID } = params;  // Destructure the dashboardID from params
  
  return (
    <div className="w-full p-5 flex justify-between">
      {/* Description */}
      <div className='ml-3'>
      <Description index={dashboardID} />
      </div>
      {/* About */}
      <div className="w-[290px]  mr-3">
        <About index={dashboardID} />
      </div>
    </div>
  );
};

export default DashboardData;

