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
    title: "ClubRare",
    desc: "Trade real-world collectibles and earn huge rewards on the community-owned phygital(physical digital) marketplace",
    img: "/static/projects/clubrarexyz.png",
    link: "https://www.clubrare.xyz/",
    tags: ["NextJS", "TailwindCSS", "Express", "Node"],
  },
  {
    id: 3,
    title: "Lazy Leo Club",
    desc: "The LazyLeo Club is an NFT membership community made up of Leos that will make the people who live too busy on Earth a little more lazy.",
    img: "/static/projects/lazyleoclub.png",
    link: "https://www.lazyleoclub.xyz/",
    tags: ["NextJS", "Framer Motion", "Express", "TailwindCSS"],
  },
  {
    id: 4,
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
