import NavMenu from "../../components/NavMenu"
import PortfolioItem from "../../components/PortofolioItem"

export default function Portfolio() {
  return (
    <div className="">
      {/* 标题 + 导航 */}
      <div className="mt-[31px] ml-[25px] mb-[70px]">
        <h2
          className="relative text-[35px] text-white font-bold font-[Playfair_Display] leading-[35px] 
               after:content-[''] after:absolute after:w-[5px] after:h-[35px] after:left-[-25px] after:top-[2px] 
               after:bg-[#FF5722] after:rounded-br-[10px] after:rounded-tr-[10px]"
        >
          <span className="text-white">My&nbsp;</span>
          <span className="text-[#FF5722]">Portfolio</span>
        </h2>

        <NavMenu />
      </div>

      <div className="">
        <PortfolioItem
          imageSrc="/4.webp"
          product="Autumn Papers"
          project="Mobile Application"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
        <PortfolioItem
          imageSrc="/1.webp"
          product="Globe"
          project="Website Design"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
        <PortfolioItem
          imageSrc="/3.webp"
          product="Colored Pens"
          project="Website Design"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
        <PortfolioItem
          imageSrc="/8.webp"
          product="Woman Bag"
          project="Website Design"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
        <PortfolioItem
          imageSrc="/5.webp"
          product="Halloween"
          project="Website Design"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
        <PortfolioItem
          imageSrc="/2.webp"
          product="Bottle"
          project="Website Design"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
        <PortfolioItem
          imageSrc="/7.webp"
          product="Sofa"
          project="Website Design"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
        <PortfolioItem
          imageSrc="/6.webp"
          product="Beautiful Cat"
          project="Website Design"
          client="Envato"
          languages={["Html", "Css", "Js"]}
          duration="3 Months"
          budget="33000"
        />
      </div>
    </div>
  )
}
