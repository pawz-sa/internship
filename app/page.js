import NavMenu from "../components/NavMenu"
import Dot from "../components/Dot"

export default function Home() {
  return (
    /* 背景 */
    <div className="relative bg-[url('/images/bg.webp')] bg-cover bg-center w-full h-screen overflow-hidden">
      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* 导航菜单 */}
      <NavMenu />

      {/* body */}
      <div className="relative flex flex-col justify-center text-center px-[25px] h-screen">
        <h2 className="text-white text-[35px] sm:text-[60px] font-[Playfair_Display] leading-[35px]">
          Hi ! I’m
          <span className="text-[#ff5722] font-medium"> Daniel.</span>
        </h2>
        <p className="text-white text-[17px] font-[IBM_Plex_Mono] mt-[20px] mb-[25px] leading-[34px]">
          I'm a Freelance UI/UX Designer and Developer based in London, England.
        </p>

        {/* More Button */}
        <div>
          <button className="bg-[#ff5722] text-white px-[40px] py-[13px] border-l-[0.8px] border-r-[0.8px] border-[#ff5722]">
            <span className="text-[16px] font-[IBM_Plex_Mono] font-semibold">MORE ABOUT ME</span>
          </button>
        </div>
      </div>

      {/* 点阵图 */}
      <Dot />
    </div>
  )
}
