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
    end: new Date(2023, MAR),
    title: "Undergraduate Researcher",
    details: [
      "Work with Professor Niema Moshiri on various web application projects",
      "Created a [web app](https://niema.net/SamBamViz/) to visualize Covid-19 genome sequences and a python notebook to visualize global Covid-19 data for easy use by epidemiologists and biologists",
      "Used data compression work on open-source python package known as [Empress](https://pypi.org/project/empress/) to allow for large visualizations of 2 million+ nodes",
      "Implement new plugins for [Qiita](https://qiita.ucsd.edu/), a tool to help biologists manipulate and analyze genome sequences with 11k+ users and ~600k jobs ran, to allow Qiita users to work with Covid-19 genome sequences",
      "Lead a team to write a simplistic and easy-to-use [config generation tool](https://github.com/CatFish47/FAVITES-Lite) for one of Professor Moshiri's framework for viral transmission and evolution simulation",
    ],
  },
  {
    company: "Applied Computing Foundation",
    link: "https://www.applied-computing.org/",
    logo: "/experiences/acf.jpg",
    start: new Date(2020, SEP),
    end: new Date(2023, JAN),
    title: "Fullstack Developer",
    details: [
      "Applied Computing Foundation (ACF) is a non-profit organization that aims to teach students how to code in a fun way from an early age",
      "Design and develop a MERN-stack [website](https://gamernation.applied-computing.org/) for ACF students to share the games that they make as a team",
      "Also taught a group of high schoolers how to code, leading them to design a [fully-functional chess app](https://github.com/notme10/Ecochess) from scratch with focuses on environmental concerns",
    ],
  },
  {
    company: "Cross Labs",
    link: "https://www.crosslabs.org/",
    logo: "/experiences/crosslabs.jpg",
    start: new Date(2023, JUN),
    end: new Date(2023, AUG),
    title: "AI Research Intern",
    details: [
      "Experimented with the collaboration of multiple large language models (LLMs) to compare how well they can perform a task in comparison to a singular LLM.",
      "Wrote a progress report blog on my findings for the experiment on interacting LLMs that was posted on the [CrossLabs website](https://www.crosslabs.org/blog/unlocking-the-power-of-multiple-language-models-a-dive-into-collaborative-ai)",
      "Detailed all experiments and findings in a [research paper](https://ieeexplore.ieee.org/document/10475609) that was accepted into, published, and presented at the [2024 International Conference for Semantic Computing](https://www.ieee-icsc.org/)",
      "Assisted on another intern's [project](https://github.com/burnttomato/CrossLabsCookingRobot) to utilize LLMs to translate human-readable cocktail recipes into machine code with the ultimate goal of having a robot read the code and recreate the recipe based off of its instructions.",
    ],
  },
  {
    company: "Qualcomm Institute",
    link: "https://qi.ucsd.edu/",
    logo: "/experiences/qi.png",
    start: new Date(2024, JAN),
    end: new Date(2024, JUN),
    title: "Student Researcher",
    details: [
      "Working on the [CyberArchWarehouse project](https://cyberarch.pages.nrp-nautilus.io/cyberarchweb/) under Neil Smith",
      "Researching methods to convert historical figures to characters in the virtual world using AI models",
      "Specifically, looking into ways to use machine learning models to convert audio into 3D facial expressions and body gestures that will be exported to Unreal Engine 5",
    ],
  },
  {
    company: "Wisk",
    link: "https://wisk.aero/",
    logo: "/experiences/wisk.png",
    start: new Date(2024, JUN),
    end: "Present",
    title: "Simulation Software Engineer Intern",
    details: [
      "Resurrected and upgraded a terrain server for company-wide use. Optimized server to be deployed to and used from the cloud.",
      "Seamlessly integrated terrain server to flight-route planning tool by graphing elevations and altitudes along a trajectory. Communicated with flight test team to ensure that the tools being developed fit their needs.",
      "Updated an old tool that does first-person fly-through of flight routes by deploying it to the cloud, updating UI, and making flight routes shareable.",
    ],
  },
];
