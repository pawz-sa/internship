const ResumeCard = ({ position, firm, date, detail }) => {
  return (
    <div>
      <div className="w-[339.175px] h-[200.8px] bg-[#383838] text-white px-[25px] py-[25px] font-[IBM_Plex_Mono]">
        <div className="flex justify-between items-center">
          <h5 className="text-[18px] mt-[-7px] font-[serif]">{position}</h5>
          <h6 className="text-[14px] bg-[#FF5722] rounded-[5px] leading-[16.8px] px-[7px] pb-[6px] pt-[7px]">{date}</h6>
        </div>

        <span className="block text-[16px] mb-[8px] font-[IBM_Plex_Mono] leading-6">{firm}</span>
        <p className="text-[14px] leading-7">{detail}</p>
      </div>
    </div>
  )
}

export default ResumeCard
