import React, { useState } from "react";

const App = () => {
  const [currentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const today = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const startDay = daysInMonth[0].getDay();
  const emptyDays = Array(startDay).fill(null);
  const allDays = [...emptyDays, ...daysInMonth];

  return (
    <div className="flex  ">
      <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 w-full ">
        <div className="flex items-center justify-between p-6">
          <h3 className="font-bold text-xl text-gray-800">Calendar</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-violet-100 main-color-text px-4 py-2 rounded-full cursor-pointer hover:bg-violet-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-medium text-sm">
                {monthNames[currentMonth]}, {currentYear}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
            <div className="bg-violet-100 text-violet-600 p-2 rounded-full cursor-pointer hover:bg-violet-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500">
            {daysOfWeek.map((day) => (
              <div key={day} className="py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-1 mt-2">
            {allDays.map((day, index) => {
              if (day === null) {
                return <div key={index} className="w-10 h-10"></div>;
              }
              const date = day.getDate();
              const isToday = date === today && day.getMonth() === currentMonth && day.getFullYear() === currentYear;
              const hasEvents = [8, 14, 15, 20, 21, 22, 27, 28, 29].includes(date);

              return (
                <div
                  key={index}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full transition-colors cursor-pointer
                    ${isToday ? "main-color-background text-white shadow-lg" : "text-gray-900 hover:bg-gray-200"}
                  `}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-sm">{date}</span>
                    {hasEvents && <div className="w-1 h-1 rounded-full main-color-background mt-0.5"></div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
