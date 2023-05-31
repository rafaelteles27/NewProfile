import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    mysql,
    spring,
    freelancer,
    coffee,
    feliz,
    Javabank,
    hackathon,
    threejs,
    tcpchat,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "spring",
      icon: spring,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Video Editor",
      company_name: "Freelancer",
      icon: freelancer,
      iconBg: "white",
      date: "July 2015 - January 2017",
      points: [
        "Developing and maintaining videos using AdobePremiere.",
        "Collaborating with cross-functional teams to create high-quality products.",
      ],
    },
    {
      title: "Coffee Rafa",
      company_name: "Waiter",
      icon: coffee,
      iconBg: "#E6DEDD",
      date: "March 2016 - Dec 2016",
      points: [
        "Moved to switzerland to help my father in his coffee shop",
        "Yes, my father named the coffee after me",
        "Working in a fast-paced environment, I developed the ability to multitask effectively, prioritize tasks and manage time efficiently",
        "I enhanced my communication skills in french, a language I didnt knew at the time (and still know the basics until today)",
      ],
    },
    {
      title: "Machine Operator",
      company_name: "O Feliz",
      icon: feliz,
      iconBg: "#383E56",
      date: "March 2017 - Dec 2022",
      points: [
        "Responsible for ensuring and testing the material was in good condition to be delivered to the client",
        "Teach and help new workers with their respective machines and help others in various activites",
      ],
    },
    /*{
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      title: "Books I've read",
      testimonials: ["Dune", "The Anomaly", "American Gods", "Leviathan Wakes", "The man in the high castle", "Everything is Fucked"],
    },
    {
      title: "Movies/Tv Shows I love",
      testimonials: ["Inception", "Back to the future", "The matrix", "Mr Robot", "Breaking Bad", "Better Call Saul" ],
    },
    {
      title: "Games I love",
      testimonials: ["Control", "The Outer Wilds", "CIV", "Red Dead Redemption", "God of War"],
    },
  ];
  
  
  const projects = [
    {
      name: "Javabank",
      description:
        "The idea was to develop a banking application, in several steps, implementing in each one a different methodology and/or framework.  With this, we were able to understand a lot of the functionality and responsibilities of a typical enterprise application, such as UI, Client/Server Architecture, Relational Databases and Database Transactions.",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "text-red-600",
        },
        {
          name: "Javascript",
          color: "text-yellow-300",
        },
      ],
      image: Javabank,
      source_code_link: "https://github.com/rafaelteles27",
    },
    {
      name: "TCP Chat",
      description:
        "The first step was to develop the server side of the application. After being able to send messages and receive back, the next step was to build the client side of the application and then refactor things on both sides so that the program was thread safe. In the end, I implemented the commands logic on the server side.",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "Network",
          color: "green-text-gradient",
        },
        {
          name: "Concurrency",
          color: "pink-text-gradient",
        },
      ],
      image: tcpchat,
      source_code_link: "https://github.com/rafaelteles27/tcp_chatServer",
    },
    {
      name: "Hackathon",
      description:
        "A 24-hour hackathon marathon with 12 teams to create something unique based on songs of oscar winners. Our song was 'Remember me' from the movie 'Coco' and we decided do create a website with the concept of dead, where you insert your name and birthday, and it predicts when you die and where you will go.",
      tags: [
        {
          name: "Javascript",
          color: "text-yellow-300",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: hackathon,
      source_code_link: "https://hackathonrememberme.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };