import { InfoItem } from "./InfoItem";
import { infoList } from "../constants";

export const Info = ({ position }) => {
  return (
    <div
      className={`flex flex-col p-2 ${
        position
          ? "absolute z-20 top-16 sm:right-[15%] right-0 bg-[#1b2431] rounded-[10px]"
          : "static"
      }`}
    >
      <h3 className="font-bold text-[20px] text-white my-4">INFO</h3>
      <div className="flex flex-raw justify-between gap-6">
        {infoList.map((col) => {
          const list = Object.values(col);
          return <InfoItem col={list} />;
        })}
      </div>
    </div>
  );
};
