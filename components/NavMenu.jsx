"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { menuItems } from "../public/data/res"

export default function NavMenu() {
  const [visible, setVisible] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (visible) {
      setShowMenu(true)
    } else {
      const timer = setTimeout(() => setShowMenu(false), 300)
      return () => clearTimeout(timer)
    }
  }, [visible])

  const handleClick = () => {
    setVisible(false)
    setShowMenu(false)
  }

  /* 
待办：
1. 导航栏跳转
2. 导航栏高亮
3. about页面
4. 页面切换动画

5. 懒加载
6. 分布式
7. 作品展示

*/

  return (
    <>
      <button
        className="fixed w-[52px] h-[52px] top-[25px] right-[25px] bg-[#383838] leading-[24px] z-12 flex flex-col items-center justify-center space-y-[5px] rounded"
        onClick={() => setVisible(!visible)}
      >
        <span
          className={`block w-[24px] h-[2px] bg-white transition-transform duration-300 ease-in ${
            visible ? "translate-y-[8px] rotate-135" : ""
          }`}
        />
        <span
          className={`block w-[24px] h-[2px] bg-white transition-opacity duration-300 ${
            visible ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-[24px] h-[2px] bg-white transition-transform duration-300 ease-in ${
            visible ? "-translate-y-[5px] rotate-225" : ""
          }`}
        />
      </button>
      {showMenu && (
        <div className="fixed text-white w-50 top-[25px] right-[25px] px-[15px] py-[15px] bg-[#383838] z-11">
          <ul className="relative mt-[15px] space-y-[28px] text-[17px] font-[IBM_Plex_Mono] font-semibold">
            {menuItems.map((item, index) => (
              <li key={index} className="ml-[9px] flex items-center gap-[20px]">
                {item.icon}
                <span className="leading-[21px]">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 
      {showMenu && (
        <ul
          className={`fixed w-[200px] top-[25px] right-[25px] p-[15px] bg-[#383838] leading-[24px] z-11 text-left rounded origin-top-right ${
            visible ? "animate-open" : "animate-close"
          }`}
        >
          {menuItems.map(({ label, iconType, href }) => (
            <li key={label} className="relative">
              <Link href={href} onClick={handleLinkClick} className="block">
                <MenuButton
                  label={label}
                  iconType={iconType}
                  className={pathname === href ? "text-[#ff5722]" : "text-white font-medium"}
                />
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </>
  )
}
