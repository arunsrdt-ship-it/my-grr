import React from "react";
import MONTH from "../assets/calendar/Month.png";
import UP from "../assets/calendar/UP.png";
import TABLE from "../assets/calendar/Table.png";
import ARROW from "../assets/calendar/Arrow.png";
import CAL from "../assets/calendar/cal.png";
import Date from "../assets/calendar/date.png";

const Calendar = () => {
  return (
    <div className="calendar border-2 border-gray-200 relative rounded-xl mt-10">
      <div className="calendar-items p-5 flex items-center  justify-between">
        <div className="calendar-title font-bold text-xl">
          <h3>Calendar</h3>
        </div>
        <div className="card-icon flex gap-2">
          <div className="flex items-center gap-2 bg-violet-100 p-2 rounded-full justify-center">
            <img src={CAL} />
            <span>
              <img src={Date} />
            </span>
          </div>
          <div className="arrow bg-violet-100 gap-2 rounded-full p-2">
            <img src={ARROW} />
          </div>
        </div>
      </div>
      <div className="card-num flex items-center justify-around">
        <img src={TABLE} />
      </div>
    </div>
  );
};

export default Calendar;
