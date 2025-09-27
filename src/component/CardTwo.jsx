import vector1 from "../assets/vector1.png";

const CardTwo = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] my-[50px] container mx-auto">
  <div className="relative rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center overflow-hidden">
    <img
      src={vector1}
      alt=""
      className="absolute -top-8 -left-8 w-[60%] opacity-80 pointer-events-none select-none"
    />
    <img
      src={vector1}
      alt=""
      className="absolute -top-8 -right-8 w-[60%] opacity-80 pointer-events-none select-none [transform:scaleX(-1)]"
    />
    <h2 className="relative font-bold text-[35px] z-10">In-Progress</h2>
    <p className="relative font-semibold text-[25px] z-10">{inProgressCount}</p>
  </div>

  <div className="relative rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-[#11998E] to-[#38EF7D] flex flex-col justify-center items-center overflow-hidden">
    <img
      src={vector1}
      alt=""
      className="absolute -top-8 -left-8 w-[60%] opacity-90 pointer-events-none select-none"
    />
    <img
      src={vector1}
      alt=""
      className="absolute -top-8 -right-8 w-[60%] opacity-90 pointer-events-none select-none [transform:scaleX(-1)]"
    />
    <h2 className="relative font-bold text-[35px] z-10">Resolved</h2>
    <p className="relative font-semibold text-[25px] z-10">{resolvedCount}</p>
  </div>
</div>
    );
};

export default CardTwo;