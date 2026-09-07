export const site = {
  name: "Rodel van Rooijen",
  firstName: "Rodel",
  title: "Engineer | Data & ML",
  url: "https://rodel.dev/",
  description:
    "Explore Rodel van Rooijen's portfolio website showcasing experience and projects.",
  cv: "/rodel_van_rooijen_cv.pdf",
  repo: "https://github.com/rodelvr/rodel-portfolio.github.io",
  analyticsId: "G-EXLP2XMEYX",
} as const;

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/rodelvr",
    icon: "fa6-brands:github",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rodelvro",
    icon: "fa6-brands:x-twitter",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rodelvr",
    icon: "fa6-brands:linkedin",
  },
] as const;

export const navLinks = [
  { label: "Blogs", href: "#blogs" },
  { label: "Talks", href: "#videos" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#technologies" },
] as const;
