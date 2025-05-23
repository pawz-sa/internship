"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuButton from "./MenuButton"

const menuItems = [
  { label: "HOME", iconType: "home", href: "/" },
  { label: "ABOUT", iconType: "about", href: "/about" },
  { label: "PORTFOLIO", iconType: "portfolio", href: "/portfolio" },
  { label: "CONTACT", iconType: "contact", href: "/contact" },
  { label: "BLOG", iconType: "blog", href: "/blog" },
]

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

  const handleLinkClick = () => {
    setVisible(false)
    setShowMenu(false)
  }

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
      )}
    </>
  )
}
