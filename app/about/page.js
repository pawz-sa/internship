"use client"
import { useState } from "react"
import ResumeCard from "../../components/ResumeCard"
import Badge from "../../components/Badge"
import SkillBar from "../../components/SkillBar"
import NavMenu from "../../components/NavMenu"
import Dot from "../../components/Dot"
import { resumeItems, educationItems } from "../../public/data/res"

export default function About() {
  const [activeTab, setActiveTab] = useState("experience")
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeEduIndex, setActiveEduIndex] = useState(0)

  return (
    <div className="h-screen bg-[#292929]">
      <div className="mt-[31px] ml-[25px] mb-[70px] font-bold font-[Playfair_Display] leading-[35px]">
        <h2
          className="relative after:content-[''] after:absolute after:w-[5px] after:h-[35px] 
                       after:left-[-25px] after:top-[2px] after:bg-[#FF5722] after:rounded-br-[10px] 
                       after:rounded-tr-[10px] text-[35px] text-white mt-[31px] mb-[70px] mr-[25px]"
        >
          About <span className="text-[#FF5722]">Me</span>
        </h2>
        <NavMenu />
      </div>

      <div className="px-[25px]">
        <img src="/man.webp" alt="profile" className="border-[4px] border-[#444444] mb-[40px]" />
      </div>

      <div className="px-[25px] text-white font-[IBM_Plex_Mono] text-[17px] leading-[34px]">
        <p className="mb-[20px]">
          I'm Daniel Martin, british based web designer and front‑end developer living in London focused on crafting
          clean, creative and user‑friendly experiences, I build beautiful and powerful websites and android
          applications.
        </p>

        <ul className="mb-[38px]">
          {[
            ["Birthdate", "June 1990"],
            ["Nationality", "British"],
            ["Experiences", "8 years"],
            ["Phone", "+34 18 40 10"],
            ["Address", "London, UK"],
            ["Email", "Daniel@mail.com"],
          ].map(([label, value]) => (
            <li key={label} className="mb-[12px]">
              <span className="pr-[10px]">icon</span>
              <span>{label}&nbsp;:&nbsp;</span>
              <span className="font-semibold">{value}</span>
            </li>
          ))}
        </ul>

        <button
          className="bg-[#FF5722] text-white text-[16px] py-[13px] px-[40px] mb-[70px] 
                           font-semibold border-[0.8px] border-[#FF5722]"
        >
          DOWNLOAD MY CV
        </button>

        {/* Resume Section */}
        <h4 className="text-[35px] text-center font-[Playfair_Display] font-bold mb-4">My Resume</h4>
        <div className="flex items-center text-[#999] text-[20px] font-semibold px-[27px] py-[27px]">
          <p
            onClick={() => setActiveTab("experience")}
            className={`cursor-pointer ${activeTab === "experience" ? "text-[#FF5722]" : ""}`}
          >
            EXPERIENCE
          </p>
          <div className="h-[20px] w-[1px] bg-[#666] mx-[12px]"></div>
          <p
            onClick={() => setActiveTab("education")}
            className={`cursor-pointer ${activeTab === "education" ? "text-[#FF5722]" : ""}`}
          >
            EDUCATION
          </p>
        </div>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(activeTab === "experience" ? activeIndex : activeEduIndex) * 100}%)` }}
          >
            {(activeTab === "experience" ? resumeItems : educationItems).map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 flex justify-center">
                <ResumeCard
                  position={item.position || item.degree}
                  firm={item.firm || item.uni}
                  date={item.date}
                  detail={item.detail}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-[10px] mt-[30px] pb-[70px]">
          {(activeTab === "experience" ? resumeItems : educationItems).map((_, index) => (
            <span
              key={index}
              onClick={() => (activeTab === "experience" ? setActiveIndex(index) : setActiveEduIndex(index))}
              className={`cursor-pointer h-[10px] rounded-full transition-all duration-300 ${
                (activeTab === "experience" ? activeIndex : activeEduIndex) === index
                  ? "w-[40px] bg-[#FF5722]"
                  : "w-[10px] bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Badge */}
      <div className="w-full bg-[#383838] relative">
        <div className="py-[70px] flex flex-col items-center gap-[70px]">
          <Badge num="13" text="Years Experience" />
          <Badge num="56" text="Done Projects" />
          <Badge num="89" text="Happy Customers" />
        </div>
        <Dot className="left-[-240px] bottom-[65px]" />
      </div>

      {/* Skill */}
      <div className="w-full font-[IBM_Plex_Mono] text-[16px] leading-6 py-[70px] px-[25px]">
        <h4 className="text-[35px] text-white font-bold font-[Playfair_Display] mb-[50px]">My Skills</h4>
        {[
          ["HTML", 80],
          ["JavaScript", 70],
          ["CSS", 60],
          ["PHP", 57],
          ["WordPress", 90],
          ["Drupal", 80],
          ["jQuery", 70],
          ["React", 50],
        ].map(([name, percent]) => (
          <SkillBar key={name} name={name} percent={percent} />
        ))}
      </div>
    </div>
  )
}
