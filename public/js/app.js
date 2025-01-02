const app = new Vue({
  el: "#ey",
  data: {
    name: "Hello!",
    intro: "I'm Ebow",
    introB: 'ServiceNow Developer"+" Problem Solver',
    bio: "My career path has taken me from the classroom to the cloud. With a background as a science, math, history, and geography teacher – and even a gold medal-winning basketball coach – I've honed my skills as a ServiceNow Developer. I'm passionate about building and figuring things out, and I bring this drive to every project I work on. I have a proven track record of leading and optimizing projects, and I'm known for being a reliable and hardworking teammate. I've focused primarily on ServiceNow, with expertise in ITSM, ITOM, and asset management.  I also enjoy mentoring others who are interested in getting into ServiceNow or cybersecurity. I'm eager to continue learning and growing in this exciting field.",
    majorSkills: [
      "ServiceNow",
      "ITSM",
      "ITOM",
      "Asset Management",
      "Discovery",
      "Linux",
      "Bash",
      "Knowledge Management",
      "Asset Management",
      "Cloud Development",
      "AWS",
      "Microservices",
      "Git",
      "Lambda",
      "CSM",
      "Accessibility",
      "Html",
      "CSS",
      "JavaScript",
      "PWA",
      "React",
      "Vue",
    ],
    friends: "I am not looking for any new roles at the moment. How about you check out my friends for a fit on ",
    contact: ["973 489 2670", "yawson@hey.com"],
    showcase: [
      {
        name: "Capstone Pipeline Project",
        image: "/images/pass.png",
        alt: "An image of jenkins pipeline stage passing",
        decription:
          "A CI/CD pipeline for a microservices application using a rolling update deployment strategy. Using a defined scope, the project satisfies all business requirements.",
        skills: ["Docker", "Jenkins", "Kubernetes", "Linux", "AWS EKS"],
        link: "https://github.com/eyawson/udacity-devops-capstone",
      },
      {
        name: "Machine Learning price predictor",
        image: "/images/ml_image.jpg",
        alt: "Jonathan Hey's machine learning sketch",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["Docker", "Bash", "Kubernetes", "Linux", "CircleCI"],
        link: "https://github.com/eyawson/ML-microservice-k8s",
      },
      {
        name: "Cloudformation IaC",
        image: "/images/cloudformation.jpeg",
        alt: "lucidchart diagram",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["Cloudformation", "Bash", "AWS", "Linux"],
        link: "https://github.com/eyawson/udacity-cloudformation-deployment",
      },
      {
        name: "Udagram Microservice",
        image: "/images/udagram.jpg",
        alt: "application screenshot",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["Kubernetes", "Docker", "Travis CI", "a11y"],
        link: "https://github.com/eyawson/udacity-microservice-project",
      },
      {
        name: "Udagram Social App",
        image: "/images/udagramp2.jpg",
        alt: "application screenshot",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["elastic beanstalk", "APIs", "Typescript", "a11y"],
        link: "https://github.com/eyawson/udagram",
      },
      {
        name: "Covid-19 Tracker",
        image: "/images/covid.png",
        alt: "application screenshot",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["React", "AWS CodePipeline", "a11y"],
        link: "https://d2hfopo65qhm9m.cloudfront.net/",
      },
      {
        name: "Ravenous",
        image: "/images/ravenous.jpg",
        alt: "application screenshot",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["React", "APIs", "CRUD", "a11y"],
        link: "https://github.com/eyawson/ravenous",
      },
      {
        name: "Restaurant Reviews",
        image: "/images/restaurant.jpg",
        alt: "application screenshot",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["Javascript", "HTML / CSS", "PWA", "a11y"],
        link: "https://github.com/eyawson/Restaurant-Reviews",
      },
      {
        name: "Phebe's book",
        image: "./images/phebe.jpg",
        alt: "application screenshot",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["HTML", "CSS", "Javascript", "a11y"],
        link: "https://github.com/eyawson/phebebook",
      },
      {
        name: "Quantum Leap Website",
        image: "/images/qli.jpg",
        alt: "application screenshot",
        decription:
          "A set of data processing elements connected in series, where the output of one element is the input of the next one",
        skills: ["HTML", "CSS", "AWS", "a11y"],
        link: "https://github.com/eyawson/ravenous",
      },
    ],
  },
});
