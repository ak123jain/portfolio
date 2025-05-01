import React, { useState } from 'react';

const  Github = () => {
  // Years to display
  const years = ['2025', '2024', '2023', '2022', '2021'];
  
  // Months to display
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Function to generate random contribution data
  const generateRandomContributions = () => {
    const contributions = {};
    
    years.forEach(year => {
      contributions[year] = {};
      
      months.forEach(month => {
        contributions[year][month] = [];
        // Each month has around 4-5 weeks
        for (let week = 0; week < 5; week++) {
          // Each week has 7 days
          for (let day = 0; day < 7; day++) {
            // Random contribution level (0-4)
            // 0: No contribution
            // 1-4: Different levels of contribution
            const level = Math.floor(Math.random() * 5);
            contributions[year][month].push(level);
          }
        }
      });
    });
    
    return contributions;
  };
  
  // Generate random contributions
  const [contributions] = useState(generateRandomContributions());
  const [totalContributions] = useState(Math.floor(Math.random() * 1000) + 500);
  
  // Function to get color class based on contribution level
  const getColorClass = (level) => {
    switch (level) {
      case 0:
        return 'bg-gray-800';
      case 1:
        return 'bg-green-900';
      case 2:
        return 'bg-green-700';
      case 3:
        return 'bg-green-500';
      case 4:
        return 'bg-green-300';
      default:
        return 'bg-gray-800';
    }
  };
  
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white font-sans ml-28 mr-28 mb-12">
      <h2 className="text-3xl font-bold mb-8">Contribution Graph</h2>
      
      {/* Graph container */}
      <div className="flex gap-2">
        {/* Main graph area */}
        <div className="flex-grow">
          {/* Month labels */}
          <div className="flex justify-between mb-2 text-sm">
            {months.map((month) => (
              <div key={month} className="w-8 text-center">{month}</div>
            ))}
          </div>
          
          {/* Contribution cells */}
          <div className="flex gap-2">
            {/* For each year */}
            {years.slice(0, 1).map((year) => (
              <div key={year} className="w-full">
                {/* Display all months in a row */}
                <div className="flex gap-1">
                  {months.map((month) => (
                    <div key={`${year}-${month}`} className="flex-grow">
                      <div className="grid grid-cols-5 gap-1">
                        {contributions[year][month].map((level, idx) => (
                          <div 
                            key={`${year}-${month}-${idx}`} 
                            className={`w-4 h-4 rounded-sm ${getColorClass(level)}`}
                            title={`${month} ${Math.floor(idx/7)+1}, ${year}: ${level} contributions`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom text */}
          <div className="mt-4 text-sm">
            {totalContributions} contributions in the last year
          </div>
        </div>
        
        {/* Year labels and legend */}
        <div className="flex flex-col justify-between">
          {/* Year labels */}
          <div className="flex flex-col gap-6">
            {years.map((year) => (
              <div key={year} className="text-white text-right">{year}</div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex items-center gap-1 text-sm mt-4">
            <span>Less</span>
            <div className={`w-3 h-3 rounded-sm ${getColorClass(0)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColorClass(1)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColorClass(2)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColorClass(3)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColorClass(4)}`}></div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;