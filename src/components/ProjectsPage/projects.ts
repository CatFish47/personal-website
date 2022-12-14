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
  when: string;
  links: Link[];
}

const emptyProject: Project = {
  name: "",
  description: "",
  details: "",
  image: "",
  when: "",
  links: [],
};

export const featuredProjects: Project[] = [
  {
    name: "KachowRL",
    description: "Reinforcement learning with car racing",
    details:
      "Explored with 3 other teammates different model-free reinforcement learning algorithms. Through the use of Open AI Gym's custom car racing library, we trained various reinforcement learning algorithms to control a car to drive through a racetrack by taking images of each frame and using the pixels of the image as an input to determine the car's next move.",
    image: "",
    when: "Winter 2022",
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
    image: "",
    when: "Summer 2021",
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
    image: "",
    when: "December 2022",
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
];

export const projects: Project[] = [...featuredProjects];
