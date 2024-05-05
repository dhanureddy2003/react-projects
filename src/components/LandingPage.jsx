import { FaArrowUp } from "react-icons/fa";
function LandingPage() {
  return (
    <>
      <div className="relative w-full h-screen text-white">
        <div className="absolute top-[25%] left-16 ">
          {["we create", "eye-opening", "presentations"].map((items, index) => {
            return (
              <div key={index} className="flex items-center">
                {index===1 &&(<div className="bg-green-200 h-[11vh] w-[12vw] relative top-1 rounded-md"></div>)}
                <h1 className="text-[7vw] font-bold uppercase leading-[5rem]">{items}</h1>
              </div>
            );
          })}
        </div>
        <div className="bottom-bar absolute bottom-10 w-full border-t-[1px] border-slate-500 flex justify-around items-center  ">
            {['For public and private companies','From the first pitch to IPO'].map((item,index)=>{
                return <p className="mt-4" key={index}>{item}</p>
            })}
            <div className="flex justify-between items-end gap-4 ">
                <button className="uppercase p-2 border-[1.5px] border-white mt-4 rounded-[20px] hover:bg-white hover:text-black transition duration-[1s]">start the project</button>
                <div className="border-gray-200 border-2 rounded-[50%] p-2 mb-1 transform rotate-[45deg] hover:bg-white hover:text-black transition duration-[1s]">
                <FaArrowUp/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
