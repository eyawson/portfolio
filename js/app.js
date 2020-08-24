const app = new Vue({
  el: "#ey",
  data: {
    name: "Hello!",
    intro: "I'm Ebow",
    introB: 'DevOps Engineer "+" Problem Solver',
    bio: "Well, here it goes... a teacher in science, math, history, geography, oh and basketball coach. I am a devOps/ cloud engineer looking to be a part of your team. In my many years of working professionally, I am always known to be hardworking, on time, lead projects, and look for ways to improve projects. This has made me a reliable teammate, and in some cases caused me to rise rapidly through the ranks. I have been and continue to work hard at this career change to become a software developer. I am ready to be part of your team and contribute meaningfully. This comes from a love to build and relentlessly figure things out.",
    majorSkills: [
      "Coudformation",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Linux",
      "Bash",
      "Docker",
      "Kubernetes",
      "Cloud Development",
      "AWS",
      "Microservices",
      "Git",
      "Lambda",
      "SQL",
      "Accessibility",
      "Html",
      "CSS",
      "JavaScript",
      "PWA",
      "React",
      "Vue"
    ],
    friends: "If I do no fit your role, how about you check out my friends on ",
    contact: ["973 489 2670", "yawson@gmail.com"],
    showcase: [{
      name: "Cloudformation IaC",
      image: "/images/cloudformation.jpeg",
      alt: "lucidchart diagram",
      skills: ["Cloudformation", "Bash", "AWS", "Linux"],
      link: "https://github.com/eyawson/udacity-cloudformation-deployment"
    },
    {
      name: "Udagram Microservice",
      image: "/images/udagram.jpg",
      alt: "application screenshot",
      skills: ["Kubernetes", "Docker", "Travis CI", "a11y"],
      link: "https://github.com/eyawson/udacity-microservice-project"
    },
    {
      name: "Udagram Social App",
      image: "/images/udagramp2.jpg",
      alt: "application screenshot",
      skills: ["elastic beanstalk", "APIs", "Typescript", "a11y"],
      link: "https://github.com/eyawson/udagram"
    },
    {
      name: "Covid-19 Tracker",
      image: "/images/covid.png",
      alt: "application screenshot",
      skills: ["React", "AWS CodePipeline", "a11y"],
      link: "https://d2hfopo65qhm9m.cloudfront.net/"
    },
    {
      name: "Ravenous",
      image: "/images/ravenous.jpg",
      alt: "application screenshot",
      skills: ["React", "APIs", "CRUD", "a11y"],
      link: "https://github.com/eyawson/ravenous"
    },
    {
      name: "Restaurant Reviews",
      image: "/images/restaurant.jpg",
      alt: "application screenshot",
      skills: ["Javascript", "HTML / CSS", "PWA", "a11y"],
      link: "https://github.com/eyawson/Restaurant-Reviews"
    },
    {
      name: "Phebe's book",
      image: "./images/phebe.jpg",
      alt: "application screenshot",
      skills: ["HTML", "CSS", "Javascript", "a11y"],
      link: "https://github.com/eyawson/phebebook"
    },
    {
      name: "Quantum Leap Website",
      image: "/images/qli.jpg",
      alt: "application screenshot",
      skills: ["HTML", "CSS", "AWS", "a11y"],
      link: "https://github.com/eyawson/ravenous"
    }
    ]
  }
});