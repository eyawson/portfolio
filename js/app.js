const app = new Vue({
  el: "#ey",
  data: {
    intro:
      "Welcome to my page. My name is Ebow Yawson and I am glad you checked me out. Hopefully, you will hire me or point me in the right direction.",
    //visitorName: '',
    bio:
      "I am a fullstack cloud developer here looking to be a part of your team. In my many years of working professionaly, I have risen rapidly through the rank due to hard work, commitment, and and seeing through tasks. I have been working very hard at this career change to web and cloud development. I beleive I am ready to be part of your team and contribute meaningfuly. This is a love to build and figure things out.",
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
    friends: "If i do no fit your role, how about you check out my friends on ",
    contact: ["973 489 2670", "ebow.yawson@gmail.com"],
    showcase: [
      {
        name: "Udagram Microservice",
        image: "/images/cloud3.jpg",
        alt: "image repo",
        skills: ["Kubernetes", "Docker", "Travis CI"],
        link: "https://github.com/eyawson/udacity-microservice-project"
      },
      {
        name: "Phebe's book",
        image: "./images/cloud2.jpg",
        alt: "image repo",
        skills: ["HTML", "CSS", "Javascript"],
        link: "https://github.com/eyawson/phebebook"
      },
      {
        name: "Ravenous a Yelp clone",
        image: "/images/cloud1.jpg",
        alt: "image repo",
        skills: ["React", "APIs", "CRUD"],
        link: "https://github.com/eyawson/ravenous"
      }
      /* {
                name: 'MWS Prgressive app',
                image: '4.jpg',
                skills: ['a', 'b', 'c'],
                link: 'https://github.com/eyawson/mws_stage_1'
            },
            work5: {
                name: 'MWS Progressive app',
                image: '5.jpg',
                skills: ['a', 'b', 'c'],
                link: 'https://github.com/eyawson/mws_stage_1'
            },
            work6: {
                name: 'MWS Progressive app',
                image: '6.jpg',
                skills: ['a', 'b', 'c'],
                link: 'https://github.com/eyawson/mws_stage_1'
            } */
    ]
  }
});
