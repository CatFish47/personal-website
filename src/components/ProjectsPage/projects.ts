import { monthsCode } from "../../json/utils";

const { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC } =
  monthsCode;

export interface Link {
  text: string;
  type?: "github" | "demo";
  url: string;
}

export interface Project {
  name: string;
  description: string; // short description
  details: string; // longer details
  image: string;
  when: Date;
  links: Link[];
}

const emptyProject: Project = {
  name: "",
  description: "",
  details: "",
  image: "",
  when: new Date(),
  links: [],
};

export const featuredProjects: Project[] = [
  {
    name: "KachowRL",
    description: "Reinforcement learning with car racing",
    details:
      "Explored with 3 other teammates different model-free reinforcement learning algorithms. Through the use of Open AI Gym's custom car racing library, we trained various reinforcement learning algorithms to control a car to drive through a racetrack by taking images of each frame and using the pixels of the image as an input to determine the car's next move.",
    image:
      "/projects/ppo_results.gif",
    when: new Date(2022, JAN),
    links: [
      {
        text: "View",
        type: "github",
        url: "https://github.com/acmucsd-projects/KachowRL",
      },
    ],
  },
  {
    name: "ArcAIde",
    description: "Using the genetic algorithm to play arcade games",
    details:
      "To dive into the basics of machine learning, my partner and I explored how the genetic algorithm worked and applied it to play a game of snake. The end result was a battle-royale-style snake game, each one using a genetic-algorithm-trained neural network to fight to the death. To show that we could apply what we learned to not just snake, we also trained a neural network to play the arcade game Atari Breakout as well.",
    image: "/projects/snake.png",
    when: new Date(2021, SEP),
    links: [
      {
        text: "Snake",
        type: "github",
        url: "https://github.com/UCSD-CSE-SPIS-2021/spis21-snaike-Arnav-Grant",
      },
      {
        text: "Atari Breakout",
        type: "github",
        url: "https://github.com/UCSD-CSE-SPIS-2021/spis21-snaike-Arnav-Grant",
      },
    ],
  },
  {
    name: "Personal Website",
    description: "A personal website built using Astro",
    details:
      "Motivated from both a need for a personal website and a desire to learn the web framework Astro, I built a website entirely with Astro (with the exception of the occasional React components).",
    image: "/projects/personalwebsite.png",
    when: new Date(2022, DEC),
    links: [
      {
        text: "View",
        type: "github",
        url: "https://github.com/CatFish47/personal-website",
      },
      {
        text: "Demo",
        url: "https://www.grantcheng.com",
      },
    ],
  },
  {
    name: "SamBamViz VIZualiser",
    description: "A web app to visualize Covid-19 genome sequences",
    details:
      "For a research project in NiemaLab, I worked on SamBamViz Visualizer with a partner to create a webapp that would take in a tsv file from Professor Moshiri's SamBamViz tool alongside an optional reference FASTA file and would generate an interactable bar graph that would visualize the data. Customizability options for color, y-axis, and range were included to make it as friendly as possible for all users.",
    image: "/projects/sambamvizvis.png",
    when: new Date(2022, MAY),
    links: [
      {
        text: "View",
        type: "github",
        url: "https://github.com/CatFish47/NiemaLabGraphSite",
      },
      { text: "Demo", url: "https://niema.net/SamBamViz/" },
    ],
  },
  {
    name: "Interacting LLMs play Wikirace",
    description: "An experiment testing if LLMs can collaborate to perform better.",
    details:
      "For my AI research internship at CrossLabs, I created an experiment that tested various methods for large language models (LLMs) to play Wikirace, a game where you get from one Wikipedia page to another by clicking only the links on the current page. 4 methods of interacting LLMs were tested against a singular LLm and a traditional graph-search algorithm to see how well it worked. In the end, the experiment was a success, and the interacting LLMs proved to be better at completing the task than a singular LLM.",
    image: "/projects/interacting-llms.png",
    when: new Date(2023, AUG),
    links: [
      {
        text: "View",
        type: "github",
        url: "https://github.com/CatFish47/interacting-llms",
      },
    ],
  },
  {
    name: "Tasseography",
    description: "A website for fortune telling with tea leaves.",
    details:
      "For my CSE 110 class on software engineering, we were put in groups of 10 people to create a fortune telling app. I designed and drew half of the assets, wrote most of the CI/CD, wrote unit and end-to-end tests, helped format the CSS, and streamlined the app to be a single-page application for a smoother result.",
    image: "/projects/tasseography.png",
    when: new Date(2023, MAY),
    links: [
      {
        text: "View",
        type: "github",
        url: "https://github.com/cse110-sp23-group18/cse110-sp23-group18",
      },
    ],
  },
];

export const projects: Project[] = [
  ...featuredProjects,

  {
    name: "EMPress Optmization",
    description: "Compressing data in EMPress to load larger trees",
    details: "",
    image: "",
    when: new Date(),
    links: [],
  },
  {
    name: "Gamernation",
    description: "",
    details: "",
    image: "",
    when: new Date(),
    links: [],
  },
  {
    name: "Qiita Plugins",
    description:
      "Plugins for Qiita to make a Covid-19 genome analysis pipeline",
    details: "",
    image: "",
    when: new Date(),
    links: [],
  },
];
