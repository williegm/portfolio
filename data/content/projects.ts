import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Portfolio",
    desc: "🔷 My sweet sweeet portfolio built with React, NextJS, and TailwindCSS.",
    img: "/static/projects/portfolio.png",
    link: "https://willie.vercel.app/",
    github: "https://github.com/williegm/portfolio",
    tags: ["React", "NextJS", "TailwindCSS", "Vercel"],
  },
  {
    id: 1,
    title: "Qurable",
    desc: "A relationship management platform for web 3.0 that connects audiences and creators, empowering ownership of digital assets.",
    img: "/static/projects/qurable-wide.png",
    link: "https://app.qurable.co/",
    tags: ["NextJS", "TailwindCSS", "Express", "AWS"],
  },
  {
    id: 2,
    title: "XSURGE",
    desc: "Harness the true power of defi.",
    img: "/static/projects/xsurge.png",
    link: "https://app.xsurge.net/",
    github: "https://github.com/launchdex/Xtrader2",
    tags: ["React", "Ethers", "Solidity", "Private Repo"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
