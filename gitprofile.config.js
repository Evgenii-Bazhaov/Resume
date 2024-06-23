// gitprofile.config.js

const config = {
  github: {
    username: 'Sudhanshu-77', 
    sortBy: 'stars',
    limit: 10, 
    exclude: {
      forks: false, 
      projects: ['DP-Solutions','ZtM-Job-Board','open-source-practice'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sudhanshu-tripathi77',
    twitter: 'sudhanshutwt',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'sudhanshu-77',
    dev: 'sudhanshu-77',
    stackoverflow: '23424157/sudhanshu-tripathi', // format: userid/username
    website: 'https://bio.link/sudhanshu77',
    phone: '',
    email: 'sudhanshu.dev@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'Html',
    'Css',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
    'GitHub',
    'Postman',
    'Figma',
    'Fierbase',
  ],
  experiences: [
    {
      company: 'Infosys Springboard',
      position: 'Full-Stack Intern',
      from: 'April 2024',
      to: 'June 2024',
      companyLink: 'https://www.linkedin.com/company/infosys-springboard/',
    },
    {
      company: 'Coding Blocks',
      position: 'Backend Trainee',
      from: 'June 2023',
      to: 'July 2023',
      companyLink: 'https://www.codingblocks.com/',
    },
    {
      company: 'Hacksquad',
      position: 'Contributor',
      from: 'Ovtober 2023',
      to: 'November 2023',
      companyLink: 'https://www.hacksquad.dev/',
    },
    {
      company: 'Postman',
      position: 'Postman Student Expert',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'https://www.hacksquad.dev/',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Azure Fundamentals',
      body: 'Demonstrate foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools.',
      year: 'March 2022',
      link: 'https://www.credly.com/badges/40b7331b-5f37-4c90-9efe-38334e841c2b/public_url',
    },
    {
      name: 'Microsoft Azure Developer Associate',
      body: 'Demonstrate foundational knowledge of cloud concepts. Develop Azure compute solutions,Develop for Azure storage, Implement Azure security, Monitor, troubleshoot, and optimize Azure solutions. Connect to and consume Azure services and third-party services.',
      year: 'July 2023',
      link: 'https://learn.microsoft.com/en-us/users/sudhanshutripathi-3363/credentials/e42605244daf3c10?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    },
  ],
  educations: [
    {
      institution: 'GLA University',
      degree: 'B.Tech in Computer Science',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Cambridge High School',
      degree: 'High School',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'DailyDose',
      description:
        'DailyDose blends reminders and medical recommendations to personalize routine healthcare for seniors based on their input on medications, goals, and habits.',
      imageUrl:
        'https://github.com/sudhanshu-77/DailyDose-Team-02/raw/master/images/userdashboard.png',
      link: 'https://github.com/sudhanshu-77/DailyDose-Team-02',
    },
    {
      title: 'Writify',
      description:
        'Writify : A Bogging App ,The main objectives of this project are to develop a web application that allows users to: Post the content, Edit, Delete the posts ,Track the Posts ,Like ,Dislike & Comment.',
      imageUrl:
        'https://github.com/sudhanshu-77/Writify-v1/raw/main/images/dashboard.png',
      link: 'https://github.com/sudhanshu-77/Writify-v1',
    },
    {
      title: 'AirTracker',
      description:
        'AirtAraker: A MERN Stack Application Objective: The main objectives of this project are to develop a web application that allows users to Search for the cheapest flights & Track ticket prices.',
      imageUrl:
        'https://github.com/sudhanshu-77/AirTracker/raw/master/ImagesOutput/login.png',
      link: 'https://github.com/sudhanshu-77/AirTracker',
    },
    {
      title: 'Meloverse',
      description:
        'Music-Streaming-Application by using HTML CSS & JavaScript to connect with Spotify Music.',
      imageUrl:
        'https://user-images.githubusercontent.com/86345777/215934999-b34ac65f-3b91-4c6f-90fa-a0b3e8b6d76c.png',
      link: 'https://github.com/sudhanshu-77/Meloverse',
    },
  ],

  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', 
    username: '', 
    limit: 2, 
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made By <a 
      class="text-primary" href="https://bio.link/sudhanshu77"
      target="_blank"
      rel="noreferrer"
    >Sudhanshu</a> and ❤️`,
};

export default config;
