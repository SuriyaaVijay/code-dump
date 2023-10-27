const ShimmerUI = () => {
  return (
    <div className="-z-10 flex-col md:flex-row w-auto h-full flex flex-wrap justify-center">
      {Array.apply(null, Array(16)).map((_, i) => {
        return (
          <div
            className="relative h-60 m-2 rounded-md overflow-hidden md:w-[19.5rem]"
            key={i}
          >
            <div className="bg-gray-200 h-40 rounded-xl"></div>
            <div className="flex">
              <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-4 h-2"></div>
              <div>
                <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-72 md:w-60 h-2"></div>
                <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-72 md:w-60 h-2"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShimmerUI;
