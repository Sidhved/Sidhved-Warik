export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Resume",
    href: "https://drive.google.com/file/d/1PeR-NMsXkSvGqY-sl9tFUuipkXLi6h1M/view?usp=drive_link",
  },
];



export const myProjects = [
  {
    title: "Surge Price Simulator",
    desc: "A machine learning-powered surge pricing simulator built with Python, Streamlit, and Scikit-learn that generates dynamic pricing algorithms using Gradient Boosting Regression.",
    subdesc:
      "Built as a unique and interactive tool for users to simulate the surge pricing algorithm and gain a deeper understanding of the taxi market dynamics.",
    href: "https://surge-pricing-simulator.streamlit.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "assets/streamlit.png",
      },
      {
        id: 3,
        name: "Scikit-learn",
        path: "/assets/Scikit-learn.svg",
      },
      {
        id: 4,
        name: "Pandas",
        path: "/assets/pandas.svg",
      },
    ],
  },
  {
    title: "Supply Chain Management Dashboard",
    desc: "An interactive Supply Chain Dashboard.",
    subdesc:
      "Built using Vue.js to visualize real-time inventory, optimize demand forecasting, and enhance logistical efficiency.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/Vue.svg",
      },
      {
        id: 2,
        name: "NodeJS",
        path: "assets/Node.js.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "Black Schole's Options Pricing Calculator",
    desc: "A clasic options pricing calculator that provides respective call and put values based on live market attributes such as asset price, strike price and volatility factor.",
    subdesc:
      "Built with Python, Pandas, Streamlit and Huggingface, the calculator provides seamless insights on predicting future order prices by being a useful tool for backtesting various strategies on our standardized  model.",
    href: "https://huggingface.co/spaces/Sidhved/BlackScholesOptionsPricingModel",
    texture: "/textures/project/coming_soon.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "assets/streamlit.svg",
      },
      {
        id: 3,
        name: "HuggingFace",
        path: "/assets/hf-logo.svg",
      },
      {
        id: 4,
        name: "Pandas",
        path: "/assets/pandas.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.055 : 0.06,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [8, -5, 0]
      : [9, -5.5, 0],
    pythonLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [8, 4, 0]
      : [15, 3, 0],
    ringPosition: isSmall
      ? [-5, 5, 0]
      : isMobile
      ? [-10, 13, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    coffeeMugPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -9, -9]
      : isTablet
      ? [-11, -9, -10]
      : [-13, -11, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "FinOptima Solutions Inc.",
    pos: "Machine Learning Engineering Intern",
    duration: "Sep 2024 - Present",
    title:
      "Develop and Implement Video Processing Algorithms, Data Collection and Annotation, Creating Data Workflow and Pipelines, Integration of Vision Models, Testing and Evaluation of AI models, Support Backend Server Design and implementation.",
    icon: "/assets/finOptimaLogo.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Yellow.ai",
    pos: "Machine Learning Engineering Intern",
    duration: "Feb 2023 - June 2023",
    title:
      "Established a performance benchmark for evaluation, achieving 12% improvement in answering table queries through innovative methodologies. \n Successfully mitigated GPT-3, Elastic Search call issues by developing meticulous test cases, ensuring seamless integration and performance robustness. \n Implemented Apache Airflow for ETL data pipelines, showcasing proficiency in data processing and transformation, resulting in a 30% increase in data processing efficiency through streamlined workflows.",
    icon: "/assets/yellow-logo.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "IndiaFIRST Robotics Ltd.",
    pos: "Robotics and Automation Intern",
    duration: "Dec 2022 - Feb 2023",
    title:
      "Designed and Developed a low-latency high-frequency Object Detection Module for Automatic Grabage Segregation System using Tensorflow, Keras and OpenCV by levaraging ONNX runtime implemented at local municipal dumping ground. Spearheaded design and motor functions of autonomous robotic dog using C++ and Arduino Mega. Contributed to asynchronous movement of arms for reliable traversal on different surfaces. Deployed a IoT system for ray tracing and path identification for the robotic dog to act as a service animal (funded by Pune Municipal Corporation)",
    icon: "/assets/IndiaFIRSTRobotics-logo.png",
    animation: "salute",
  },
];
