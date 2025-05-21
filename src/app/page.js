export default function Home() {
  return (
    <>
      {/* bg+cover */}
      <div className="relative bg-[url('/bg.jpg')] bg-cover bg-center w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* navigation trigger */}
        <div>
          <button className="fixed flex flex-col w-[52px] h-[52px] top-[25px] right-[25px] sm:top-10 sm:right-10 bg-[#383838] text-[#404854] flex items-center justify-center space-y-1 z-20">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </button>
        </div>

        {/* main navigation */}
        <ul className="fixed flex flex-col w-[200px] top-[25px] right-[25px] p-[15px] bg-[#383838] leading-[24px] z-15">
          <li className="flex text-4 items-center gap-2 h-12 px-4 text-white">
            <a>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[21px] h-[21px]"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li className="flex items-center gap-2 h-12 px-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[21px] h-[21px]"
            >
              <path
                fillRule="evenodd"
                d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                clipRule="evenodd"
              />
            </svg>
            ABOUT
          </li>
          <li className="flex items-center gap-2 h-12 px-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[21px] h-[21px]"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
            PORTFOLIO
          </li>
          <li className="flex items-center gap-2 h-12 px-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[21px] h-[21px]"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            CONTACT
          </li>
          <li className="flex items-center gap-2 h-12 px-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[21px] h-[21px]"
            >
              <path
                fillRule="evenodd"
                d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
                clipRule="evenodd"
              />
            </svg>
            BLOG
          </li>
        </ul>

        {/* main */}
        <div className="relative z-10 flex flex-col justify-center text-center px-[25px] h-screen">
          <h2 className="text-white text-[35px] sm:text-[60px] font-[Serif] font-medium leading-[35px]">
            Hi ! I’m
            <span className="text-[#ff5722] font-medium"> Daniel.</span>
          </h2>
          <p className="text-white text-[17px] font-[monospace] mt-[20px] mb-[25px] leading-[34px]">
            I'm a Freelance UI/UX Designer and Developer based in London, England.
          </p>

          {/* More Button */}
          <div>
            <button className="bg-[#ff5722] text-white px-[40px] py-[13px] border-l-[0.8px] border-r-[0.8px] border-[#ff5722]">
              <span className="text-[16px] font-[monospace] font-semibold">MORE ABOUT ME</span>
            </button>
          </div>
        </div>

        {/* dot */}
        <div
          className="absolute w-[260px] h-[300px] left-[-30px] bottom-[-240px] rotate-[112deg]"
          style={{
            background: "radial-gradient(circle at center, #ff5722 10%, transparent 20%, transparent)",
            backgroundSize: "19px 18px",
          }}
        ></div>
      </div>
    </>
  )
}
