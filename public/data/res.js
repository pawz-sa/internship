const menuItems = [
  {
    label: "HOME",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path
          fillRule="evenodd"
          d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "/",
  },
  {
    label: "ABOUT",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-[21px] h-[21px]">
        <path
          fillRule="evenodd"
          d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "/about",
  },
  {
    label: "PORTFOLIO",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-[21px] h-[21px]">
        <path
          fillRule="evenodd"
          d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "/portfolio",
  },
  {
    label: "CONTACT",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-[21px] h-[21px]">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
    href: "/contact",
  },
  {
    label: "BLOG",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-[21px] h-[21px]">
        <path
          fillRule="evenodd"
          d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "/blog",
  },
]

const resumeItems = [
  {
    position: "Web Developer",
    firm: "Adobe",
    date: "2018 - NOW",
    detail: "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
  },
  {
    position: "Designer",
    firm: "Twitter",
    date: "2014 - 2018",
    detail: "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
  },
  {
    position: "Consultant",
    firm: "Facebook",
    date: "2006 - 2014",
    detail: "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
  },
]

const educationItems = [
  {
    degree: "Engineering Degree",
    uni: "Oxford University",
    date: "2015",
    detail: "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
  },
  {
    degree: "Master Degree",
    uni: "Moscow University",
    date: "2012",
    detail: "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
  },
  {
    degree: "Bachelor Degree",
    uni: "Tunis High School",
    date: "2009",
    detail: "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
  },
  {
    degree: "Tech Degree",
    uni: "Paris High School",
    date: "2007",
    detail: "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
  },
]

const portfolioItems = [
  {
    imageSrc: "/4.webp",
    product: "Autumn Papers",
    project: "Mobile Application",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
  {
    imageSrc: "/1.webp",
    product: "Globe",
    project: "Website Design",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
  {
    imageSrc: "/3.webp",
    product: "Colored Pens",
    project: "Website Design",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
  {
    imageSrc: "/8.webp",
    product: "Woman Bag",
    project: "Website Design",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
  {
    imageSrc: "/5.webp",
    product: "Halloween",
    project: "Website Design",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
  {
    imageSrc: "/2.webp",
    product: "Bottle",
    project: "Website Design",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
  {
    imageSrc: "/7.webp",
    product: "Sofa",
    project: "Website Design",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
  {
    imageSrc: "/6.webp",
    product: "Beautiful Cat",
    project: "Website Design",
    client: "Envato",
    languages: ["Html", "Css", "Js"],
    duration: "3 Months",
    budget: "33000",
  },
]

export { menuItems, resumeItems, educationItems, portfolioItems }
