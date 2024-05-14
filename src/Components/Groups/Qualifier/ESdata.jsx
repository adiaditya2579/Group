import React from 'react'

function ESdata() {
  const Data = [
    {
      id:2,
      profile:'https://i.ibb.co/XYBYHMH/IMG-20231106-033208.jpg',
      groupname:'Intro c',
      url:'https://www.linkedin.com/in/chingaari-sharma/'
    },
    {
      id:2,
      profile:'https://i.ibb.co/XYBYHMH/IMG-20231106-033208.jpg',
      groupname:'Math 1',
      url:'https://www.linkedin.com/in/chingaari-sharma/'
    },
    {
      id:2,
      profile:'https://i.ibb.co/XYBYHMH/IMG-20231106-033208.jpg',
      groupname:'English 1',
      url:'https://www.linkedin.com/in/chingaari-sharma/'
    },
    {
      id:2,
      profile:'https://i.ibb.co/XYBYHMH/IMG-20231106-033208.jpg',
      groupname:'CT',
      url:'https://www.linkedin.com/in/chingaari-sharma/'
    },
  ]

  const handelGrouplink=(url)=>{
    window.open(url,"blank",)
  }
  return (
    <div className="  w-screen bg-[#27272B] flex flex-col">
        <div className="flex flex-wrap gap-4 sm:gap-20  py-16 justify-center ">
          
            {Data.map((e)=>(
              <div>
              <div className=" md:h-[250px] h-[220px] md:w-[180px] w-[152px] border-2 rounded-xl relative">
                <div className=" md:h-32 h-28 md:w-32 w-28 mt-5 bg-white rounded-xl overflow-hidden absolute left-[50%] -translate-x-[50%]">
                  <img
                    className=" w-full h-full object-cover"
                    src={e.profile}
                  />
                </div>
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center">
                  <h1 className=" md:pt-36 pt-32 text-white text-sm font-bold">
                   {e.groupname}
                  </h1>
                  <button
                    className=" bg-white w-[100px] mt-2  px-3 py-1 rounded-full  font-semibold  hover:text-black hover:border-2 hover:border-black"
                    onClick={()=> handelGrouplink(e.url)}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
            ))}
          
          
          
        </div>
      </div>
  )
}

export default ESdata