const app = new Vue({
  el: '#ey',
  data: {
    name: ' Hello!',
    intro: 'I\'m Ebow',
    introB: 'Web Developer | Problem Solver',
    bio: 'I am a full-stack cloud developer looking to be a part of your team. In my many years of working professionally, I have risen rapidly through the rank due to hard work, commitment, and seeing through tasks. I have been working very hard at this career change to web and cloud development. I believe I am ready to be part of your team and contribute meaningfully. This is a love to build and figure things out.',
    majorSkills: [
      'Html',
      'CSS',
      'JavaScript',
      'Cloud Development',
      'AWS',
      'Microservices',
      'Docker',
      'Kubernetes',
      'SQL',
      'Accessibility',
      'PWA',
      'React',
      'Vue',
      'IONIC',
      'Lambda'
    ],
    friends: 'If I do no fit your role, how about you check out my friends on ',
    contact: ['973 489 2670', 'ebow.yawson@gmail.com'],
    showcase: [{
        name: 'Udagram Microservice',
        image: '/images/udagram.png',
        alt: 'application screenshot',
        skills: ['Kubernetes', 'Docker', 'Travis CI', 'a11y'],
        link: 'https://github.com/eyawson/udacity-microservice-project'
      },
      {
        name: 'Ravenous',
        image: '/images/ravenous.png',
        alt: 'application screenshot',
        skills: ['React', 'APIs', 'CRUD', 'a11y'],
        link: 'https://github.com/eyawson/ravenous'
      },
      {
        name: 'Restaurant Reviews',
        image: '/images/restaurant.png',
        alt: 'application screenshot',
        skills: ['Javascript', 'HTML / CSS', 'PWA', 'a11y'],
        link: 'https://github.com/eyawson/Restaurant-Reviews'
      },
      {
        name: 'Udagram Social App',
        image: '/images/udagramp2.png',
        alt: 'application screenshot',
        skills: ['elastic beanstalk', 'APIs', 'Typescript', 'a11y'],
        link: 'https://github.com/eyawson/udagram'
      },
      {
        name: 'Phebe\'s book',
        image: './images/phebe.png',
        alt: 'application screenshot',
        skills: ['HTML', 'CSS', 'Javascript', 'a11y'],
        link: 'https://github.com/eyawson/phebebook'
      },
      {
        name: 'Quantum Leap Website',
        image: '/images/qli.png',
        alt: 'application screenshot',
        skills: ['HTML', 'CSS', 'AWS', 'a11y'],
        link: 'https://github.com/eyawson/ravenous'
      }
    ]
  }
});