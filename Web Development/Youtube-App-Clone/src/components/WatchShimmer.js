const WatchShimmer = () => {
  return (
    <div className="flex flex-col md:w-3/5 md:mr-3 ">
      <div className="bg-gray-200 mt-3 ml-3 rounded-xl md:w-70 md:h-[30rem]"></div>

      <div>
        <div className="mb-3">
          <div className="bg-gray-300 mt-3 ml-3 rounded-xl w-72 md:w-3/4 h-4"></div>

          <div className="flex items-center">
            <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-7 h-2"></div>
            <div>
              <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-72 md:w-70 h-3"></div>
              <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-72 md:w-70 h-3"></div>
            </div>
          </div>
          <div className="bg-gray-300 mt-3 ml-3 rounded-xl w-72 md:w-3/4 h-16"></div>
        </div>
      </div>
    </div>
  );
};

export default WatchShimmer;
