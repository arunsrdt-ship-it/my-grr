import React from "react";
import PEOPLE from "../../assets/leaderBoard/People.png";
import ONEP from "../../assets/leaderBoard/Oneper.png";

const LeaderBoard = () => {
  return (
    <div className="leaderBoard border-2 border-gray-200 relative rounded-xl bg-white">
      <div className="leaderBoard-items p-5 sm:p-6">
        {/* Heading */}
        <div className="heading mb-4">
          <span className="font-bold text-xl sm:text-2xl">Leader Board</span>
        </div>

        
        <div className="item1 flex justify-center items-center">
          <img src={PEOPLE} alt="Leaderboard banner" className="w-full max-w-md" />
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-xs sm:text-sm md:text-base bg-[#F6F7F9]">
                <th className="p-2 sm:p-4">Rank</th>
                <th className="p-2 sm:p-4">Name</th>
                <th className="p-2 sm:p-4">Points</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 6 }).map((_, i) => (
                <tr key={i} className="border-b border-gray-200 text-xs sm:text-sm md:text-base">
                  <td className="p-2 sm:p-4">{i + 4}</td>
                  <td className="flex items-center gap-2 p-2 sm:p-3">
                    <img src={ONEP} alt="user" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="truncate">Cody Fisher</span>
                  </td>
                  <td className="p-2 sm:p-4">57731.1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
