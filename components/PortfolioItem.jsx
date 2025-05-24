export default function PortfolioItem({ product, project, client, languages, duration, budget, imageSrc }) {
  return (
    <div className="px-[25px]">
      {/* 图片 */}
      <img src={`images/${imageSrc}`} alt={product} className="w-full" loading="lazy" />

      {/* 文本信息 */}
      <div className="text-white font-[IBM_Plex_Mono]">
        {/* 标题 */}
        <h3 className="text-[26px] font-[Playfair_Display] font-bold mt-[30px] leading-[26px]">{product}</h3>

        {/* 信息列表 */}
        <div className="">
          <ul className="">
            <li className="my-5 ">
              Project :<span className="font-[IBM_Plex_Mono] font-semibold text-[16px]">{project}</span>
            </li>
            <li className="my-5">
              Client : <span className="font-semibold">&nbsp;{client}</span>
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
        </div>

        {/* 按钮 */}
        <button
          className="bg-[#FF5722] text-white text-[16px] py-[13px] px-[40px] mb-[75px] mt-[10px]
                        border-[0.8px] border-[#FF5722] "
        >
          <span className="font-semibold leading-[24px]">PREVIEW</span>
        </button>
      </div>
    </div>
  )
}
