import { useState } from 'react';

type Contributions = {
  [year: string]: {
    [month: string]: number[]; // Array of contribution levels (0–4)
  };
};

const Github = () => {
  const years = ['2025', '2024', '2023', '2022', '2021'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const generateRandomContributions = (): Contributions => {
    const contributions: Contributions = {};
    years.forEach((year) => {
      contributions[year] = {};
      months.forEach((month) => {
        contributions[year][month] = [];
        for (let week = 0; week < 5; week++) {
          for (let day = 0; day < 7; day++) {
            const level = Math.floor(Math.random() * 5);
            contributions[year][month].push(level);
          }
        }
      });
    });
    return contributions;
  };

  const [contributions] = useState(generateRandomContributions());
  const [totalContributions] = useState(Math.floor(Math.random() * 1000) + 500);

  const getColorClass = (level: number): string => {
    switch (level) {
      case 0: return 'bg-gray-800';
      case 1: return 'bg-green-900';
      case 2: return 'bg-green-700';
      case 3: return 'bg-green-500';
      case 4: return 'bg-green-300';
      default: return 'bg-gray-800';
    }
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-white font-sans mx-4 sm:mx-10 lg:mx-28 mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Contribution Graph
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {/* Graph Area */}
          <div className="min-w-[768px] flex-grow">
            <div className="flex justify-between mb-2 text-sm">
              {months.map((month) => (
                <div key={month} className="w-8 text-center">{month}</div>
              ))}
            </div>

            <div className="flex gap-1">
              {years.slice(0, 1).map((year) => (
                <div key={year} className="w-full">
                  <div className="flex gap-1">
                    {months.map((month) => (
                      <div key={`${year}-${month}`} className="flex-grow">
                        <div className="grid grid-cols-5 gap-1">
                          {contributions[year][month].map((level, idx) => (
                            <div
                              key={`${year}-${month}-${idx}`}
                              className={`w-4 h-4 rounded-sm ${getColorClass(level)}`}
                              title={`${month} ${Math.floor(idx / 7) + 1}, ${year}: ${level} contributions`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-center sm:text-left">
              {totalContributions} contributions in the last year
            </div>
          </div>

          {/* Year Labels + Legend */}
          <div className="hidden lg:flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              {years.map((year) => (
                <div key={year} className="text-white text-right">{year}</div>
              ))}
            </div>

            <div className="flex items-center gap-1 text-sm mt-4">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`w-3 h-3 rounded-sm ${getColorClass(level)}`}></div>
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
