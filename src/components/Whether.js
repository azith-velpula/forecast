import React from "react";
import { useSelector } from "react-redux";
const Whether = () => {
  const data = useSelector((store) => store.whether.data);
  const whetherData = [
    { Location: data?.location?.name },
    { Region: data?.location?.region },
    { Country: data?.location?.country },
    { "Temperature(c)": data?.current?.temp_c },
    { "Temperature(f)": data?.current?.temp_f },
    { "Wind Speed": data?.current?.wind_kph },
    { Humidity: data?.current?.humidity },
  ];
  return (
    <div className="shadow-xl rounded-xl p-4 w-6/12 h-[500px]  ">
      <div className="p-2 h-full flex flex-col ">
        <div className="flex justify-center items-center bg-green-200 rounded-xl">
          <img
            src={data?.current?.condition?.icon}
            alt=""
            width="50"
            height="50"
          />
          <p className="ml-3 text-lg font-bold">
            {data?.current?.condition?.text}
          </p>
        </div>
        <div className=" flex p-5 flex-wrap gap-5 justify-center items-center ">
          {whetherData.map((item) => (
            <div className="bg-yellow-300 rounded-lg text-center w-[150px] h-[100px] flex flex-col items-center justify-center text-lg font-semibold">
              <p className="">{Object.keys(item)}</p>
              <p className="">{Object.values(item)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whether;
