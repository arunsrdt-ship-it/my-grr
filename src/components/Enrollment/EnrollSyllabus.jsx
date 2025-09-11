import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const syllabusData = [
  {
    title: "Introduction to UX Design",
    lessons: [
      "What is User Experience (UX) Design?",
      "Historical Overview of UX Design",
      "Understanding User-Centered Design",
      "The Role of UX Design in Digital Products",
      "Introduction to UX Design Tools and Techniques",
    ],
    totalLessons: 5,
    duration: "1 hour",
  },
  {
    title: "Basics of User-Centered Design",
    lessons: [],
    totalLessons: 5,
    duration: "1 hour",
  },
  {
    title: "Elements of User Experience",
    lessons: [],
    totalLessons: 5,
    duration: "1 hour",
  },
  {
    title: "Visual Design Principles",
    lessons: [],
    totalLessons: 5,
    duration: "1 hour",
  },
];

export default function Syllabus() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl  px-10 bg-white rounded-xl ">
      <h2 className="text-xl font-semibold mb-4">Syllabus</h2>
      <div className="space-y-2 border-2 border-[#E2E8F0] rounded-xl" >
        {syllabusData.map((section, index) => (
          <div
            key={index}
            className="border-b-2 p-5 border-[#E2E8F0]  overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center p-2 text-left "
            >
              <span className="font-medium text-lg cursor-pointer">{section.title}</span>
              <div className="flex items-center space-x-3 text-sm text-[#334155] cursor-pointer">
                <span>{section.totalLessons} Lessons</span>
                <span>{section.duration}</span>
                {openIndex === index ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </div>
            </button>

            {openIndex === index && section.lessons.length > 0 && (
              <ul className="px-6 py-3 bg-white text-[#0F172A] text-sm font-semibold space-y-2">
                {section.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-gray-500">{i + 1}.</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
