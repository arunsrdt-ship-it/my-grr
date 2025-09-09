import React from "react";
import PEOPLE from "../assets/leaderBoard/People.png";
import ONEP from "../assets/leaderBoard/Oneper.png";

const LeaderBoard = () => {
  return (
    <div className="leaderBoard">
      <div className="leaderBoard-items">
        <div className="item1 flex justify-center items-center">
          <img src={PEOPLE} />
        </div>

        <table className="w-full text-left ">
          <thead>
            <tr className="text-gray-500  text-left text-sm bg-[#F6F7F9]">
              <th className="p-5">Rank</th>
              <th className="p-5">Name</th>
              <th className="p-5">Points</th>
            </tr>
          </thead>

          <tbody >
            <tr className="border-b-1 border-gray-200">
              <td className="p-5">4</td>
              <td className="flex items-center gap-2 p-3">
                <img src={ONEP} />
                <span className="p-3">Cody Fisher</span>
              </td>
              <td>57731.1</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="p-5">4</td>
              <td className="flex items-center gap-2 p-3">
                <img src={ONEP} />
                <span className="p-3">Cody Fisher</span>
              </td>
              <td>57731.1</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="p-5">4</td>
              <td className="flex items-center gap-2 p-3">
                <img src={ONEP} />
                <span className="p-3">Cody Fisher</span>
              </td>
              <td>57731.1</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="p-5">4</td>
              <td className="flex items-center gap-2 p-3">
                <img src={ONEP} />
                <span className="p-3">Cody Fisher</span>
              </td>
              <td>57731.1</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="p-5">4</td>
              <td className="flex items-center gap-2 p-3">
                <img src={ONEP} />
                <span className="p-3">Cody Fisher</span>
              </td>
              <td>57731.1</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="p-5">4</td>
              <td className="flex items-center gap-2 p-3">
                <img src={ONEP} />
                <span className="p-3">Cody Fisher</span>
              </td>
              <td>57731.1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
