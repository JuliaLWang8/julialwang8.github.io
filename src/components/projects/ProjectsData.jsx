export const marble = require("../../media/MeWithRobot.jpg");

export const listProjects = [
  {
    id: 14,
    title: "Covalent Reactivity of Proteins",
    subtitle: "UofT Bioinformatics Research 2023",
    description:
      "Developed and validated machine learning models to predict covalent reactivity of amino acid active sites towards optimizing drug design processes.",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/Gene2Lead-Ltd/DeepLinC",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/proteinReactivity.png?raw=true",
    tech: ["Python", "PyTorch", "3D CNN", "Deep CNN"],
    startDate: "Sep",
    endDate: "Dec 2023",
  },
  {
    id: 13,
    title: "Events Hub Web App",
    description:
      "Developed and deployed an events hub, implementing a robust CI/CD flow and automated unit, regression, and load testing for seamless deployment and reliability.",
    button1Type: "fab fa-github",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/beaverbuzz.png?raw=true",
    button1Link:
      "https://github.com/ECE444-2023Fall/project-1-web-application-design-group22-premium-potatoes",
    tech: ["React", "Flask", "PostgreSQL", "CSS"],
    startDate: "Sep. 2023",
    endDate: "Nov 2023",
  },
  {
    id: 12,
    title: "Custom Keyboard",
    subtitle: "RP2040 Stamp Microcontroller",
    description:
      "Used kmk firmware in Python to program keyboard, including OLED, RGB LED, rotary encoder, and custom macros.",
    img: "https://github.com/JuliaLWang8/Custom-Keyboard/blob/main/Keyboard.jpg?raw=true",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/JuliaLWang8/Custom-Keyboard",
    tech: ["Python", "C++", "RP2040"],
  },
  {
    id: 11,
    title: "GCN Retail Recommender",
    subtitle: "3rd Place - Daisy Intelligence Hackathon 2023",
    description:
      "Used sBERT and GCN in Python to output embeddings to predict item-user similarity as a proxy for products to recommend.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/GCN.png?raw=true",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/JuliaLWang8/RetailRecommender",
    tech: ["Python", "PyTorch", "sBERT", "GCN"],
  },
  {
    id: 10,
    title: "NAS for Recividism",
    subtitle: "1st Place - MLH AIHacks4Good 2022",
    description:
      "Neural Architecture Search in Python to predict recidivism. A Controller NN trained by RL uses the reward and fairness metric from a Child NN towards tuning.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/NAS.png?raw=true",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/JuliaLWang8/Predicting-Recidivism",
    tech: ["Python", "Pytorch", "NAS", "RL", "RNN"],
  },
  {
    id: 9,
    title: "Pokémon Battling RL",
    description:
      "Coded RL Agents in Python for Pokémon battling on Pokémon Showdown. Tuned hyperparameters according to policy choice and trained against a minimax player.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/PokemonRL.png?raw=true",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/JuliaLWang8/Pokemon-Battling-RL",
    tech: ["Python", "Keras", "RL"],
  },
  {
    id: 1,
    title: "DotsLogistics",
    subtitle: "2nd Place - Agorize AI For Business 2021",
    description:
      "Tailored to support B2B and B2C relationships, DotsLogistics leverages AI to connect companies with partners. Prototype coded in React.js.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/DotsLogistics1.png?raw=true",
    button2Type: "fas fa-video",
    button2Link:
      "https://drive.google.com/drive/u/0/folders/1fNZNdVjtwI-BbeOmP8N2J_77IMrn-yvH",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/JuliaLWang8/DotsLogistics",
    tech: ["React.js"],
  },
  {
    id: 2,
    title: "TIMBIT Dispenser",
    subtitle: "UofT Eng Kompetition (UTEK) 2020",
    description:
      "Arduino (C++) robot designed within 8 hours to follow a marked route via IR sensors and deliver marbles via servo motor to houses upon detection.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/MeWithRobot.jpg?raw=true",
    class: "vertical",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/JuliaLWang8/Timbit-Dispenser-Robot",
    tech: ["Arduino", "C++"],
  },
  {
    id: 6,
    title: "Clarity",
    subtitle: "Praxis Design Challenge 2020",
    description:
      "Arduino (C++) robot detects loads using IR sensors, then auto drives towards a predetermined target and outputs the load via a servo motor-controlled latch.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/ClarityFinal.jpg?raw=true",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/JuliaLWang8/Clarity-Robot",
    button2Type: "fas fa-file-alt",
    button2Link:
      "https://drive.google.com/file/d/1qRTZm6vK-2Qr4DaVgmjPikN4IiorYhOx/view?usp=sharing",
    tech: ["Arduino", "C++"],
  },

  {
    id: 3,
    title: "2nd Place Robot",
    subtitle: "Robotics for SpaceEx - SEEK 2019 Competition",
    description:
      "Bluetooth-controlled Arduino (C++) robot designed and built within 6h to complete an obstacle course with an autonomous challenge.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/SEEKBot.png?raw=true",
    button1Type: "fas fa-video",
    button1Link:
      "https://drive.google.com/file/d/1arArSZtApMOUZ98M3RPNkBzbZBE-N-c8/view?usp=sharing",
    tech: ["Arduino", "C++"],
  },
  {
    id: 4,
    title: "SteadyMate",
    subtitle: "UofT Biomedical Eng Competition 2019",
    description:
      "A Bluetooth Arduino body temperature monitor bracelet and mobile app for children with CIPA, alerting them when their temperature exceeds a threshold.",
    img: "https://raw.githubusercontent.com/ntnox/steadymate/master/Steadmate_Device.jpg",
    button1Type: "fab fa-github",
    button1Link: "https://github.com/ntnox/steadymate",
    tech: ["Arduino", "C++"],
  },
  {
    id: 8,
    title: "Matboard Bridge",
    subtitle: "Civil Engineering Challenge 2018",
    description:
      "Designed and prototyped a bridge from 1 piece of matboard designed for Baldwin testing and the capability of supporting a 400N load. Bridge held over 900N.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/MatboardBridge.png?raw=true",
    button1Link:
      "https://drive.google.com/file/d/14LQaAkfOKYk9O-XczhYrO21m3VzZXm9T/view?usp=sharing",
    button1Type: "fas fa-file-alt",
  },

  {
    id: 7,
    title: "Projectile Slingshot",
    subtitle: "Praxis Design Challenge 2019",
    description:
      "Designed and prototyped a slingshot to launch a projectile at a specified target using a 3D printer, wood, and elastics.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/Pikachu.jpg?raw=true",
    class: "zoom",
  },

  {
    id: 5,
    title: "Jenga Shoe Storage",
    subtitle: "BATA Shoe Museum Challenge 2020",
    description:
      "Jenga shoe storage design relative to stakeholders, objectives, and client-given metrics. Compiled a design brief summarizing solutions.",
    img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/BATA.jpg?raw=true",
    button1Type: "fas fa-file-alt",
    button1Link:
      "https://drive.google.com/file/d/1jkT2NdkLkELFpUprD6_Fn6JfBXkQmBAX/view?usp=sharing",
    button2Type: "fab fa-google-drive",
    button2Link:
      "https://drive.google.com/drive/folders/1OUF_zQq6GR_U6VQ_y9f2YZPLVO1Jy56a?usp=sharing",
  },
  // {
  //   id: 8,
  //   title: "Bridge Redesign",
  //   description: "",
  //   img: "https://github.com/JuliaLWang8/julialwang8.github.io/blob/master/src/media/BridgeRedesign.jpg?raw=true",
  // },
];
