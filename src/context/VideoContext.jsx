import { createContext, useContext, useState } from "react";


const VideoContext = createContext();


export const VideoProvider = ({ children }) => {
  const [selectedVideoURL, setSelectedVideoURL] = useState(null);

  return (
    <VideoContext.Provider value={{ selectedVideoURL, setSelectedVideoURL }}>
      {children}
    </VideoContext.Provider>
  );
};


export const useVideo = () => useContext(VideoContext);

