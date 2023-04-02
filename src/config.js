module.exports = {
  siteTitle: 'Amit Kumar',
  siteDescription:
    'Amit Kumar is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Amit Kumar, Amit, Kumar, amitkumar, software engineer, web developer, javascript, python, java, mitaoe, pune',
  siteUrl: 'https://yashitanamdeo.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Amit Kumar',
  location: 'Pune, India',
  email: 'amitkumar908616@gmail.com',
  github: 'https://github.com/amit1078-en',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/amit1078-en',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/amit279',
    },
    {
      name: 'Codepen',
      url: 'https://leetcode.com/amit279',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/amit279',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
