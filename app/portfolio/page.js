import NavMenu from "../../components/NavMenu"
import PortfolioItem from "../../components/PortfolioItem"
import { portfolioItems } from "../../public/data/res"

export default function Portfolio() {
  return (
    <div>
      <div className="mt-[31px] ml-[25px] mb-[55px]">
        <h2
          className="relative text-[35px] text-white font-bold font-[Playfair_Display] leading-[35px] 
               after:content-[''] after:absolute after:w-[5px] after:h-[35px] after:left-[-25px] after:top-[2px] 
               after:bg-[#FF5722] after:rounded-br-[10px] after:rounded-tr-[10px]"
        >
          <span className="text-white">My </span>
          <span className="text-[#FF5722]">Portfolio</span>
        </h2>
        <NavMenu />
      </div>
      <div>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
