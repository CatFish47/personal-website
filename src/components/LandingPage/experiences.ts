import { monthsCode } from "../../json/utils";

const { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC } =
  monthsCode;

export interface Experience {
  company: string;
  link: string;
  logo: string;
  start: Date;
  end: Date | "Present";
  location?: string;
  title: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    company: "Cisco",
    link: "https://www.cisco.com/",
    logo: "/experiences/cisco.png",
    start: new Date(2020, JUL),
    end: new Date(2020, AUG),
    title: "Job Shadow Student",
    details: [
      "Worked by myself and under mentorship of a senior software engineer to develop a web application using vanilla HTML, JS, and CSS to parse internet headers",
      "Designed an interactable and customizable UI to easily read and interpret the results",
      "Created an easy-to-use modular code system for anyone to add custom fields for easy debugging",
      "Selected as one of the only teams out of 20+ to present results to senior leadership",
    ],
  },
  {
    company: "Qoom",
    link: "https://www.qoom.io/",
    logo: "/experiences/qoom.png",
    start: new Date(2019, SEP),
    end: new Date(2020, NOV),
    title: "Intern",
    details: [
      "Qoom is a startup company creating a web application that allowed for easy frontend and backend coding aimed towards enabling a hassle-free software development experience",
      "Programmed a collaborative code editor that made use of websockets to allow multiple people to work on the same code file",
      "Designed a PDF editor to work towards Qoom's goals of having the ability to edit as many different file formats on Qoom",
    ],
  },
  {
    company: "UC San Diego Computer Science and Engineering",
    link: "http://spis.ucsd.edu/",
    logo: "/experiences/SPIS.jpg",
    start: new Date(2022, JUL),
    end: new Date(2022, SEP),
    title: "SPIS Mentor",
    details: [
      "The Summer Program for Incoming Students (SPIS) is a summer program for freshmen interested in getting a head start in computer science at UCSD.",
      "Mentored and led a group of 4 students in their learning, assignments, and projects",
      "As the one charge of the discord bot that automated help tickets and announcements, I refactored and maintained the Discord.py bot to handle any needs that arose",
      "Helped all students when necessary in their final projects that involved game development, AI, and web development",
    ],
  },
  {
    company: "PhantaSpace",
    link: "https://phanta.space/",
    logo: "/experiences/phantaspace.jfif",
    start: new Date(2022, JUL),
    end: new Date(2022, SEP),
    title: "Web3 Development Intern",
    details: [
      "PhantaSpace is a startup that layers the metaverse on top of the real world, introducing ways for artists and brands to make NFT galleries and games in mixed reality",
      "Learned the basics of web3, NFTs, and cryptocurrencies from nothing over the course of a few weeks",
      "Equipped website with frontend code and smart contracts to create a custom NFT marketplace for users to easily view, trade, and sell their NFTs all on one site",
      "Coded the frontend with React, used Solidity to write the smart contracts and Hardhat to test the contracts",
    ],
  },
  {
    company: "NiemaLab at UCSD",
    link: "https://niema.net/",
    logo: "/experiences/niema.png",
    start: new Date(2021, SEP),
    end: "Present",
    title: "Undergraduate Researcher",
    details: [
      "Work with Professor Niema Moshiri on various web application projects",
      "Created a web app to visualize Covid-19 genome sequences (https://niema.net/SamBamViz/) and a python notebook to visualize global Covid-19 data for easy use by epidemiologists and biologists",
      "Used data compression work on open-source python package known as Empress (https://pypi.org/project/empress/) to allow for large visualizations of 2 million+ nodes",
      "Implement new plugins for Qiita (https://qiita.ucsd.edu/), a tool to help biologists manipulate and analyze genome sequences with 11k+ users and ~600k jobs ran, to allow Qiita users to work with Covid-19 genome sequences",
      "Lead a team to write a simplistic and easy-to-use config generation tool for one of Professor Moshiri's framework for viral transmission and evolution simulation (https://github.com/CatFish47/FAVITES-Lite)",
    ],
  },
  {
    company: "Applied Computing Foundation",
    link: "https://www.applied-computing.org/",
    logo: "/experiences/acf.jpg",
    start: new Date(2020, SEP),
    end: "Present",
    title: "Fullstack Developer",
    details: [
      "Applied Computing Foundation (ACF) is a non-profit organization that aims to teach students how to code in a fun way from an early age",
      "Design and develop a MERN stack for ACF students to share the games that they make as a team (https://gamernation.applied-computing.org/)",
      "Also taught a group of high schoolers how to code, leading them to design a fully-functional chess app from scratch with focuses on environmental concerns (https://github.com/notme10/Ecochess)",
    ],
  },
  {
    company: "ACM at UCSD",
    link: "https://acmucsd.com/",
    logo: "/experiences/acm.png",
    start: new Date(2022, MAY),
    end: "Present",
    title: "AI Board - Developer",
    details: [
      "Part of the board for ACM at UCSD's AI community as a developer",
      "Work on frontend for various projects such as the website in preparation for an AI competition that ACM AI will host in winter quarter of 2023",
    ],
  },
];
