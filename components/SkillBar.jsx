const SkillBar = ({ name, percent }) => {
  return (
    <div className="w-full max-w-[400px] mb-12">
      <p className="text-[#EEEEEE] text-[17px] font-[IBM_Plex_Mono] font-semibold mb-[18px] uppercase">{name}</p>

      <div className="relative h-[7px] bg-[#444] leading-[25.5px]">
        {/* 百分比框 */}
        <div
          className="absolute -top-[40px] left-0 transform -translate-x-1/2 flex items-center justify-center
                     w-[48px] h-[32px] bg-[#FF5722] text-white text-sm font-semibold rounded z-9 leading-[33px]"
          style={{ left: `calc(${percent}% + 1px)` }}
        >
          {percent}%
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #FF5722",
              marginTop: "-1px",
            }}
          />
        </div>

        {/* 进度条 */}
        <div className="h-2 bg-[#FF5722] " style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}

export default SkillBar
