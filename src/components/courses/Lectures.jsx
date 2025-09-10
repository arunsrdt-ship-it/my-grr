import Accordion from "./Accordion";
import accordionData from "../../data/accordion";
import VideoPlayer from "./VideoPlayer";
import { useVideo } from "../../context/VideoContext";

const Lecture = () => {
  const { selectedVideoURL ,setSelectedVideoURL  } = useVideo();

  return (
    <div>
      <div className="flex  bg-white text-gray-800">
       
        {selectedVideoURL ? (
          <div className="flex flex-col w-[75%]   mr-4 rounded-2xl">
            <VideoPlayer videoURL={selectedVideoURL} onClose={()=>setSelectedVideoURL(null)}  />
            </div>
        ) : (
          <div className="flex flex-col w-[75%]  mr-4 rounded-2xl">
            <div className="bg-[#F6F6FC] p-4 h-auto rounded-2xl shadow-sm mb-4 w-[800px]">
              <h2 className="text-xl font-bold mb-2">
                Module 1: Introduction to UX Design
              </h2>
              <p className="text-md text-gray-700 mb-3">
                With over a decade of industry experience, Ronald brings a
                wealth of practical knowledge to the classroom. He has played a
                pivotal role in designing user-centric interfaces for renowned
                tech companies, ensuring seamless and engaging user experiences.
              </p>

              <h3 className="font-bold text-lg mb-2">Classroom Outcome</h3>
              <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
                <li>Understanding the difference between UI and UX</li>
                <li>Conduct user research and translate insights</li>
                <li>
                  Create wireframes, user flows, and interactive prototypes
                </li>
                <li>Use design tools like Figma effectively</li>
                <li>Present and justify design decisions</li>
              </ul>
            </div>

            {/* Topic Content */}
            <div className="bg-white p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Understanding User-Centered Design
              </h3>
              <h4 className="text-[#6750A4] text-xl font-bold mb-2">
                Topic Description
              </h4>
              <p className="text-md text-gray-700">
                With over a decade of industry experience, Ronald brings a
                wealth of practical knowledge to the classroom. He has played a
                pivotal role in designing user-centric interfaces for renowned
                tech companies, ensuring seamless and engaging user experiences.
              </p>
            </div>
          </div>
        )
        }

  

        <div className="w-[25%]  bg-white px-6 py-3 h-[550px] overflow-y-scroll">
          <h3 className="text-xl font-bold mb-2">UI/UX Course</h3>

          <div className="mb-4 flex gap-x-3 items-center">
            <div className="w-full flex bg-gray-200 h-2 rounded">
              <div className="bg-green-700 h-2 rounded w-[40%]"></div>
            </div>
            <div>40%</div>
          </div>

       
          <div>
            {accordionData.map((module) => (
              <div key={module.id}>
                <Accordion module={module} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
