import PropTypes from "prop-types";
const Data = ({ isSubmitted, Predictedgrade, subjectParameters, setReset }) => {
  const getColorByValue = (value) => {
    if (!isNaN(value)) {
      if (value > 0) {
        return "text-yellow-300";
      }
    } else if (value === "Unviable") {
      return "text-red-600";
    } else if (value === "Already") {
      return "text-green-600";
    } else {
      return "";
    }
  };
  return (
    <div
      className={
        isSubmitted
          ? "flex flex-col gap-8 w-full justify-center items-center"
          : "hidden"
      }
    >
      <div className="flex flex-col gap-2 w-full justify-center items-center">
        <div>
          <h4 className="text-xl font-bold mb-2 max-md:text-sm">
            Needed In EndTerm (Out of 100)
          </h4>
        </div>
        <div className="flex flex-wrap w-full max-lg:gap-2 justify-center items-center">
          {Object.entries(Predictedgrade).map(([key, value]) => (
            <span
              key={key}
              className="truncate w-[150px] h-fit max-[450px]:w-[140px] max-[300px]:w-[110px]"
            >
              <p className="border border-gray-400 px-2 py-2 font-semibold">
                {key.length > 10 ? `${key.slice(0, 10)}...` : key}
              </p>
              <p
                className={`border border-gray-400 px-4 py-2 font-bold ${getColorByValue(
                  value
                )}`}
              >
                {value}
              </p>
            </span>
          ))}
        </div>
        <button
          className="bg-purple-800 p-2 pr-4 pl-4 rounded-md"
          onClick={() => {
            setReset(true);
          }}
        >
          Reset Now
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <h2 className="text-xl font-bold mb-2 max-md:text-sm">
          Scores You Entered
        </h2>
        <div className="flex flex-wrap  max-lg:gap-2 justify-center items-center">
          <div className="flex flex-wrap gap-y-2 max-md:gap-x-2 justify-center items-center">
            {Object.entries(subjectParameters).map(([key, value]) => (
              <span
                key={key}
                className=" w-[150px] h-fit max-[450px]:w-[140px] max-[300px]:w-[110px]"
              >
                <p className="border border-gray-400 px-4 py-2 font-bold">
                  {key.length > 10 ? `${key.slice(0, 10)}...` : key}
                </p>
                <p
                  className={`border border-gray-400 px-4 py-2 ${
                    isNaN(value) ? "" : "text-blue-600"
                  }`}
                >
                  {value}
                </p>
              </span>
            ))}
            {/* <div className=" w-[150px] h-fit max-[450px]:w-[140px] max-[300px]:w-[110px]">
              <p className="border border-gray-400 px-4 py-2 font-bold">
                Total
              </p>
              <p className="border border-gray-400 px-4 py-2 ">{TotalScore}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Data;
