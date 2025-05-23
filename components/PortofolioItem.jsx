export default function PortfolioItem({ product, project, client, languages, duration, budget, imageSrc }) {
  return (
    <div className="px-[25px]">
      {/* 图片 */}
      <img src={imageSrc} alt={product} className="w-full" loading="lazy" />

      {/* 文本信息 */}
      <div className="leading-6 text-white font-[IBM_Plex_Mono]">
        {/* 标题 */}
        <h3 className="text-[26px] font-[Playfair_Display] font-semibold mt-[30px]">{product}</h3>

        {/* 信息列表 */}
        <ul className="mb-[35px] space-y-[12px] leading-6">
          <li className="my-5">
            Project : <span className="font-semibold">{project}</span>
          </li>
          <li className="my-5">
            Client : <span className="font-semibold">{client}</span>
          </li>
          <li className="my-5">
            Langages : <span className="font-semibold">{languages?.join(", ")}</span>
          </li>
          <li className="my-5">
            Duration : <span className="font-semibold">{duration}</span>
          </li>
          <li className="my-5">
            Budget : <span className="font-semibold">${budget}</span>
          </li>
        </ul>

        {/* 按钮 */}
        <button
          className="bg-[#FF5722] text-white text-[16px] py-[13px] px-[40px] mb-[70px] 
                       font-semibold border-[0.8px] border-[#FF5722] hover:bg-transparent hover:text-[#FF5722] transition"
        >
          PREVIEW
        </button>
      </div>
    </div>
  )
}
