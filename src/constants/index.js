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
    href: "https://drive.google.com/file/d/1aHll9TP_y0wDLZ9mOcdcfqCOiDyN-xKP/view?usp=sharing",
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: "Emily Johnson",
//     position: "Marketing Director at GreenLeaf",
//     img: "assets/review1.png",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//   },
//   {
//     id: 2,
//     name: "Mark Rogers",
//     position: "Founder of TechGear Shop",
//     img: "assets/review2.png",
//     review:
//       "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
//   },
//   {
//     id: 3,
//     name: "John Dohsas",
//     position: "Project Manager at UrbanTech ",
//     img: "assets/review3.png",
//     review:
//       "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//   },
//   {
//     id: 4,
//     name: "Ether Smith",
//     position: "CEO of BrightStar Enterprises",
//     img: "assets/review4.png",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
//   },
// ];

export const myProjects = [
  {
    title: "AIBnB - AI based itinerary generator",
    desc: "AIBnB is a revolutionary Software-as-a-Service platform that generates personalized travel itineraries with user preferences. With the power of Google Gemini Vision Pro, it allows creators to modify and customize itineraries seamlessly with excellent recommendations.",
    subdesc:
      "Built as a unique Software-as-a-Service app with React.js, Tailwind CSS, Django, Supabase and Sqlite3, AIBnB is designed for optimal performance and scalability.",
    href: "https://ai-bnb.netlify.app/",
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
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Django",
        path: "/assets/django-logo.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase-icon.svg",
      },
    ],
  },
  {
    title: "Gringotts - The Wizarding Bank",
    desc: "Gringotts is a Harry Potter themed online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
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
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
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
