const ProgressBar = ({ value }) => {
  return (
    <div className="w-50 bg-gray-200 rounded-full h-1">
      <div
        className="main-color-background h-1 mt-2 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
