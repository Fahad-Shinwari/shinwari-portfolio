/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Fahad Shinwari",
  title: "Hi all, I'm Fahad Shinwari",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with  Reactjs / Nodejs / React Native / Laravel and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gBhE9pk9WqG0gIefSOetp-3NemgiN5DR/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Fahad-Shinwari",
  linkedin: "https://www.linkedin.com/in/fahad-shinwari-298456193/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BQFtvZMhET3OCPpKmOiiH8Q%3D%3D",
  gmail: "shinwarifahad96@gmail.com",
  facebook: "https://www.facebook.com/fahad.shinwari.7/",
  stackoverflow: "https://stackoverflow.com/users/14139033/fahad",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Absyn University",
      logo: require("./assets/images/unilogo.jpg"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "February 2015 - June 2019",
      desc: "Made an app which does kerberos cryptography over a message sending and recieving app",
      descBullets: [
        "Worked as a part time developer along with studies.",
        "Did lots of freelance work",
        "Have good grasp on my programming skills"
      ]
    }
  ]
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer (Mobile & Website)",
      company: "Ministry of Foreign Affairs Kabul",
      companylogo: require("./assets/images/wordpress1.jpg"),
      date: "December 2020 – Present",
      desc:
        "Worked as a full Stack website developer building React Applications that are highly scalable ,maintainable and reactive",
      descBullets: [
        "Brought significant changes to the current system.",
        "Changed the traditional methodologies to new and improved systems.",
        "Designed and coded a mobile application in react native that is used by around 24000 afghan students residing in different parts of India.",
        "Managing around 30 website's under belt of ministry of foreign affairs in different countries."
      ]
    },
    {
      role: "Front-End Website Developer",
      company: "Empire",
      companylogo: require("./assets/images/empireLogo.png"),
      date: "May 2020 – November 2020",
      desc:
        "Worked as a full Stack website developer building React Applications that are highly scalable ,maintainable and reactive",
      descBullets: [
        "Worked as a full Stack website developer building React Applications that are highly scalable ,maintainable and reactive.",
        "Handling the data coming through the API from the back end and integrating it on the front end by Development/ Deployment/ Maintenance.",
        "Made a plugin that got our website lots of traffic and sales.",
        "Made a sofa plugin which can customize the furniture’s of your choice with a go.",
        "Increased the loading speed of the mobile apps by 2x."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Remote Jobseekers",
      companylogo: require("./assets/images/remoteLogo.png"),
      date: "September 2017 – November 2018",
      desc:
        "Started my own website to provide jobs to the people who wants to work from home.",
        descBullets: [
          "Built with Bootstrap , Sass , Html , Javascript, Php (Laravel) and Mysql database.",
          "Started my own site for remote workers and took it to top 20 sites in the world.",
          "Started a facebook group which now has 190K Members."
        ]   
    },
    {
      role: "Software Engineer",
      company: "Freelance website developer",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "August 2016 – Present",
      desc:
        "Built responsive web applications for clients using React, Node, Oracle and Mongo database.",
        descBullets: [
          "Fixed client's software bugs through testing.",
          "Made happy clients.",
          "Achieved a better status in freelancing.",
          "Got a 4.8 ratings."
        ] 
    },
    {
      role: "Front End Website Developer",
      company: "Broadway Solutions",
      companylogo: require("./assets/images/broadwayLogo.png"),
      date: "June 2017 – October 2017",
      desc:
        "Worked as Front end Web Developer at Broadway Solutions building beautiful websites",
      descBullets: [
        "Built front end of the applications with Html , Css , React , Bootstap , Javascript and jquery",
        "Solved clients problems and dealt with them directly.",
        "Made good software’s for clients"
      ]
    },
    {
      role: "Web Applications Developer",
      company: "IT Artificer",
      companylogo: require("./assets/images/artificerLogo.png"),
      date: "March 2015 – May 2016",
      desc:
        "Development / Deployment / Maintenance of Industrial standard applications.",
        descBullets: [
          "Dealing with clients and managing organizational relationship.",
          "Started my career there learned it at IT Artificer and then implemented things there.",
          "Made websites and software's for local business that were a huge hit"
        ]   
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Close Source Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/reasy.webp"),
      projectName: "Reasy",
      projectDesc: "Project made for a netherlands based company for space management. Reasy is a solution for operational excellence providing ready-to-deploy Solutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.reasy.nl/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/prudental.webp"),
      projectName: "Prudental Netherlands",
      projectDesc: "An Ecommerce site providing Quality Dental Products And Tools.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.prudental.nl/"
        }
      ]
    },
    {
      image: require("./assets/images/legal.webp"),
      projectName: "Legal Netherlands",
      projectDesc: "Legal.nl is an initiative of Axel Macro and HJ van der Tak: both lawyers since the early 1990s, both lawyers with extensive experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://test.legal.nl/"
        }
      ]
    },
    {
      image: require("./assets/images/flex.webp"),
      projectName: "DatisFlex Netherlands",
      projectDesc: "Job Portal for IT Professionals",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://test.datisflex.nl/"
        }
      ]
    },
    {
      image: require("./assets/images/xyz.png"),
      projectName: "We Play Ball",
      projectDesc: "Project to create your custom teams and manage them",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weplay.irdemo.xyz/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};


//Open Source Projects

const openSourceProjects = {
  title: "Open Source Projects",
  subtitle: "SOME PROJECTS THAT I HAVE MADE IN MY FREE TIME",
  projects: [
    {
      image: require("./assets/images/linkedin.png"),
      projectName: "LinkedIn Clone",
      projectDesc: "Made a linkedin clone using React, Material UI, Firebase database, Password/Email Authentication",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://linkedin-6463a.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/airbnb.png"),
      projectName: "Airbnb Clone",
      projectDesc: "Airbnb Clone with the search dates functionality",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://airbnb-clone-fdc7f.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/netflix.jpg"),
      projectName: "NetFlix Clone",
      projectDesc: "Netflix Clone made with using netflix online api. Fetching data through api and showing it on frontend.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-clone-e23d2.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/social.jpg"),
      projectName: "Social Network",
      projectDesc: "Project made in MERN stack with React, Redux, React Router, Node and MongoDB",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mern-social-network.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/restaurant.jpg"),
      projectName: "Restaurant Dummy Site",
      projectDesc: "Restaurant Project made with Html, Css, Sass and Bootstrap",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://restaurant-677f9.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Nuno.jpg"),
      projectName: "Nuno Theme",
      projectDesc: "Project made with Html, Css, Sass, Bootstrap and Jquery",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://responsive-theme.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.jpg"),
      projectName: "Portfolio Project One",
      projectDesc: "Project made in Html, Css, Sass, Bootstrap and Jquery",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fahad-portfolios.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.jpg"),
      projectName: "Portfolio Project Two",
      projectDesc: "Project made in Html, Css, Sass, Bootstrap and Jquery",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portfolio-dummy.web.app/"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

//Wordpress Projects

const wordPressProjects = {
  title: "Joomla & WordPress Projects",
  subtitle: "SOME PROJECTS THAT I HAVE MADE IN CMS",
  projects: [
    {
      image: require("./assets/images/wordpress1.jpg"),
      projectName: "Ministry of Foreign Affairs Website",
      projectDesc: "Currently the admin and Webmaster of MOFA Afghanistan website(Joomla)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mfa.gov.af/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wordpress2.jpg"),
      projectName: "Milenin Mileage",
      projectDesc: "The theme used is DIVI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://melanin-mileage.com/"
        }
      ]
    },
    {
      image: require("./assets/images/wordpress3.jpg"),
      projectName: "Farmaciasivf Muslimmir",
      projectDesc: "Theme Used Avada",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://farmaciasivf.muslimmir.com/"
        }
      ]
    },
    {
      image: require("./assets/images/wordpress4.jpg"),
      projectName: "TradoMite",
      projectDesc: "Theme Used DIVI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tradomite.bilalkhawaja.com/"
        }
      ]
    },
    {
      image: require("./assets/images/wordpress5.jpg"),
      projectName: "Bluff City Logistics",
      projectDesc: "Theme Used Avada",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bluff901.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

//Mobile (React Native) Projects

const mobileProjects = {
  title: "React Native Projects",
  subtitle: "SOME PROJECTS THAT I HAVE MADE IN MOBILE TECHNOLOGIES(REACT NATIVE)",
  projects: [
    {
      image: require("./assets/images/wordpress1.jpg"),
      projectName: "Ministry of Foreign Affairs Students App",
      projectDesc: "This Application was made for the students residing in india.Tech Used Laravel, React Native, Redux, React Navigation and Drawer",

    },
    {
      image: require("./assets/images/whatsapp.jpg"),
      projectName: "WhatsApp Clone",
      projectDesc: "WhatsApp Clone made with React Native, Redux, TypeScript",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+93-704549657",
  email_address: "shinwarifahad96@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSourceProjects,
  bigProjects,
  openSource,
  wordPressProjects,
  mobileProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
