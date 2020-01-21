const app = new Vue({
  el: "#ey",
  data: {
    intro: "Welcome to my page. My name is Ebow Yawson and I am glad you checked me out. Hopefully, we can have a conversation",
    //visitorName: '',
    bio: "I am a full-stack cloud developer looking to be a part of your team. In my many years of working professionally, I have risen rapidly through the rank due to hard work, commitment, and seeing through tasks. I have been working very hard at this career change to web and cloud development. I believe I am ready to be part of your team and contribute meaningfully. This is a love to build and figure things out.",
    majorSkills: [
      "Html",
      "CSS",
      "JavaScript",
      "Cloud Development",
      "AWS",
      "Microservices",
      "Docker",
      "Kubernetes",
      "SQL",
      "Accessibility",
      "PWA",
      "React",
      "Vue",
      "IONIC",
      "Lambda"
    ],
    friends: "If I do no fit your role, how about you check out my friends on ",
    contact: ["973 489 2670", "ebow.yawson@gmail.com"],
    showcase: [{
        name: "Udagram Microservice",
        image: "/images/udagram.png",
        alt: "image repo",
        skills: ["Kubernetes", "Docker", "Travis CI"],
        link: "https://github.com/eyawson/udacity-microservice-project"
      },
      {
        name: "Phebe's book",
        image: "./images/phebe.png",
        alt: "image repo",
        skills: ["HTML", "CSS", "Javascript"],
        link: "https://github.com/eyawson/phebebook"
      },
      {
        name: "Quantum Leap website",
        image: "/images/qli.png",
        alt: "image repo",
        skills: ["HTML", "CSS", "AWS hosting"],
        link: "https://github.com/eyawson/ravenous"
      }
      /* {
               work 3 name: 'Restaurant Reviews',
                image: '4.jpg',
                skills: ['Javascript', 'HTML / CSS', 'PWA'],
                link: 'https://github.com/eyawson/Restaurant-Reviews'
            },
            work5: {
                name: 'Udagram Social App',
                image: '5.jpg',
                skills: ['elastic beanstalk', 'APIs', 'Typescript'],
                link: 'https://github.com/eyawson/udagram'
            },
            work 2 name: "Ravenous a Yelp clone",
        image: "/images/qli.png",
        alt: "image repo",
        skills: ["React", "APIs", "CRUD"],
        link: "https://github.com/eyawson/ravenous"
       */
    ]
  }
});