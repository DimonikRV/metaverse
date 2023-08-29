export const InfoItem = ({ col }) => {
  return (
    <div className="flex flex-col ">
      {col.map((item) => (
        <button>
          <p
            key={item}
            className=" text-left font-normal text-[16px] text-white"
          >
            {item}
          </p>
        </button>
      ))}
    </div>
  );
};
