function About() {
  return (
    <>
      <div className="w-full  bg-[#CDEA68] rounded-lg text-black">
        <div className="p-20">
            <h1 className="text-[45px] leading-none font-medium tracking-tight" >Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        </div>
        <div className="w-full py-10 px-20 border-[#8a965e] border-[1px] flex justify-between">
            <div className="w-1/2">
                <h1 className="text-3xl mb-[5vh] font-semibold ">Our approach :</h1>
                <button className="bg-black py-2.5 px-5 text-white flex items-center rounded-[20px] gap-6 ">
                    <p>Read more</p>
                    <div className="h-[10px] w-[10px] bg-white rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[60vh] bg-[#99a46f91] rounded-2xl"></div>
        </div>
      </div>
    </>
  )
}

export default About
