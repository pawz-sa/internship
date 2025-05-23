const Badge = ({ num, text }) => {
  return (
    <div className="w-full px-[25px] flex flex-col justify-center items-center text-center">
      {/* 图标 */}
      <div className="h-[60px] w-[60px] bg-[#FF5722] rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="white"
          className="h-[30px] w-[30px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75A2.25 2.25 0 0 0 14.25 4.5h-4.5A2.25 2.25 0 0 0 7.5 6.75V10.5m12.75 3V9.75A2.25 2.25 0 0 0 18 7.5H6A2.25 2.25 0 0 0 3.75 9.75v3A2.25 2.25 0 0 0 6 15h12a2.25 2.25 0 0 0 2.25-2.25Z"
          />
        </svg>
      </div>

      {/* 数字 */}
      <h3 className="text-[55px] font-[IBM_Plex_Mono] font-black text-white mt-[25px] mb-[18px] leading-[55px]">
        {num}
      </h3>

      {/* 描述 */}
      <p className="text-white text-[21px] font-[IBM_Plex_Mono] font-semibold">{text}</p>
    </div>
  )
}

export default Badge
