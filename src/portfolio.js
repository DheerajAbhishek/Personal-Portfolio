/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dheeraj Abhishek",
  title: "Hi all, I'm Dheeraj",
  subTitle: emoji(
    "Solutions Architect building AI-powered cloud applications with AWS, React.js, and Python — driven by GenAI, computer vision, and serverless architecture."
  ),


  resumeLink:
    "https://drive.google.com/file/d/1nv-sYg7PjLwLqujXMEmPUdLSP5tnzmXr/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "http://github.com/DheerajAbhishek",
  linkedin: "https://www.linkedin.com/in/dheeraj-abhishek-31b779321/",
  gmail: "dheerajabhishek111@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do & My Skills",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Craft responsive and dynamic user interfaces using HTML, CSS, JavaScript, and React.js"),
    emoji("⚡ Build Single Page Applications (SPA) with smooth routing and state management using React Router and Redux"),
    emoji("⚡ Develop RESTful APIs and backend logic with Node.js, Express.js, and MongoDB / MySQL"),
    emoji("⚡ Integrate third-party services and APIs like Firebase, Stripe, and Google Maps"),
    emoji("⚡ Deploy and manage scalable web apps using AWS (EC2, S3, Route 53, Lambda, CloudFront)"),
    emoji("⚡ Proficient in AWS tools: IAM, VPC, RDS, CloudWatch, S3 versioning, and DynamoDB basics"),
    emoji("⚡ Version control with Git & GitHub, CI/CD workflows, and basic Docker usage"),
    emoji("⚡ Currently preparing for AWS Certified Solutions Architect – Associate")
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "n8n",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "AWS Solution Architect ",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java ",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C Programming",
      fontAwesomeClassname: "far fa-c"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharaj Vijayaram Gajapathi Rai College of Engineering (MVGR) ",
      logo: require("./assets/images/Mvgrlogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "September 2022 - April 2026",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud/AWS",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "SwapNow Pvt Ltd",
      companylogo: require("./assets/images/swap.png"),
      date: "April 2026 - Present",
      desc: "Built the production website and app for SwapNow.in.",
      descBullets: [
        "Developed and launched the core production website (swapnow.in).",
        "Built and deployed the accompanying application for SwapNow users."
      ]
    },
    {
      role: "Cloud Developer (Intern)",
      company: "Swap Dietetics Pvt. Ltd. / SWAP Management & Restalytics.ai",
      companylogo: require("./assets/images/swap.png"),
      date: "June 2025 – February 2026",
      desc: "Built SWAP Management and Restalytics.ai — internal tools and analytics platform on AWS.",
      descBullets: [
        "Developed a multi-role web application connecting kitchen franchises, company admins, and auditors.",
        "Designed a serverless AWS stack with Lambda, API Gateway, CloudFront, and S3.",
        "Built ETL pipelines to unify Swiggy and Zomato outlet reports.",
        "Automated reporting workflows with n8n-powered dashboards, reducing manual Excel effort by 70%.",
        "Integrated secure API communication with JWT/OAuth authentication and CORS enforcement."
      ]
    },
    {
      role: "Full Stack Developer (Intern)",
      company: "Zidio",
      companylogo: require("./assets/images/ZidioLogo.png"),
      date: "April 2025 – June 2025",
      desc: "Developed an Excel Analytics Platform",
      descBullets: [
        "Developed a full-stack analytics dashboard using ReactJS, NodeJS, Express.js and DynamoDB",
        "Integrated AI-powered modules to generate actionable insights from uploaded Excel datasets.",
        "Implemented dynamic charting, data filtering, and reporting features"
      ]
    },
    {
      role: "Hackathon Lead Developer",
      company: "Anurag University Hyderabad",
      companylogo: require("./assets/images/aulogo.png"),
      date: "March 2025",
      desc: "Built a sign language translator",
      descBullets: [
        "Winning Project of a Hackathon",
        "Built a sign language translation system to bridge communication gaps for the hearing impaired",
        "Uses AI and image recognition to interpret hand gestures into readable text in real-time",
      ]
    },
    // {
    //   role: "Team Lead",
    //   company: "Collage Mini Project",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/swap.png"),
      projectName: "SwapNow Website & App",
      projectDesc: "Developed and launched the core production website and accompanying application for SwapNow.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://swapnow.in"
        }
      ]
    },
    {
      image: require("./assets/images/restalyticsLogo.png"),
      projectName: "Restalytics.ai",
      projectDesc: "Startup project developed with Swap Dietetics Pvt. Ltd. Built as a serverless analytics platform with AWS + ETL pipelines, now focused on n8n-driven automation. Currently in development.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://restalytics.ai"
        }
      ]
    },
    {
      image: require("./assets/images/EAPlogo.jpg"),
      projectName: "Excel Analytics Platform",
      projectDesc: "Developed an end-to-end analytics platform that processes Excel data to deliver actionable insights. Enabled dynamic charts, real-time filtering, and auto-generated reports to support data-driven decisions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://excel-analytics-platform-6hhl.vercel.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/DheerajAbhishek/Excel-Analytics-Platform"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Skilledge - AI-Powered Resume Analyzer",
      projectDesc: "A modern React-based resume analyzer that parses PDF resumes, detects skills, scores profiles, and generates personalized interview questions using Groq AI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skill-edge-zeta.vercel.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/DheerajAbhishek/Skill_edge"
        }
      ]
    },
    {
      image: require("./assets/images/RAlogo.png"),
      projectName: "Roadside Assistance",
      projectDesc: "A web app that helps travelers find quick, reliable aid for vehicle issues. It connects users to nearby mechanic shops and service providers based on their location, reducing stress and downtime during travel emergencies by offering contact details and navigation to the nearest assistance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://roadside-assistance-epzz.vercel.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/DheerajAbhishek/roadside-assistance"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "FUll Stack Developer",
      subtitle:
        "Completed the Full Stack Web Development Bootcamp –By  Colt Steele (2025) ",
      image: require("./assets/images/MERN.jpeg"),
      imageAlt: "MERN stack image",
      footerLink: [
        {
          name: "Certificate of Completion",
          url: "https://drive.google.com/file/d/1g9VBUqlEhdC5QHrehWvxM3dxk2c_mfb7/view?usp=drive_link"
        },

      ]
    },
    {
      title: "Winning Project in Hackathon",
      subtitle:
        "Developed a sign language translation system to bridge communication gaps for the hearing impaired ",
      image: require("./assets/images/d.jpg"),
      imageAlt: "Hackathon Winning Project",
      footerLink: [
        {
          name: "Certificate of Achievement",
          url: "https://drive.google.com/file/d/1WlvFYjyIqABGEFBLQsrE-Mu4P5IylKTk/view?usp=sharing"
        },
        {
          name: "Winning Check",
          url: "https://drive.google.com/file/d/1G3LgNLCk1YGcGVYzhYl8iAaCTZmp__Rl/view?usp=drive_link"
        }
      ]
    }, {
      title: "Completion of Internship at Zidio",
      subtitle:
        "Completed an internship at Zidio, where I developed an Excel Analytics Platform that processes Excel data to deliver actionable insights.",
      image: require("./assets/images/internCert.jpg"),
      imageAlt: "Internship Certificate",
      footerLink: [
        {
          name: "Certificate of Internship",
          url: "https://drive.google.com/file/d/1TFeMBDYfj1HedZkMO1eCgD_D4YZVLjJJ/view?usp=drive_link"
        },
        {
          name: "Certificate of Training",
          url: "https://drive.google.com/file/d/1iSzJ-j5CQlnfVxfsKyBmgM58mhuZI2xz/view?usp=drive_link"
        }
      ]
    }, {
      title: "Certified AWS Solutions Architect",
      subtitle:
        "Gained expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
      image: require("./assets/images/AWScert.png"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qQ5x3_qW63v39LOBghZLnaSZY-IQYorM/view"
        }

      ]
    },
    {
      title: "Jr Penetration Tester — TryHackMe",
      subtitle:
        "Completed the Jr Penetration Tester Learning Path (30+ hours) covering web app security, networking, and ethical hacking fundamentals.",
      image: require("./assets/images/thmCert.png"),
      imageAlt: "TryHackMe Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1c696gNvqvNVU9o4JN3Aa0gtMkvo2258n/view"
        }
      ]
    },
    {
      title: "Completion of Internship at SWAP Dietetics",
      subtitle:
        "Designed and developed an architecture for a serverless analytics platform in AWS cloud",
      image: require("./assets/images/SWAPintern.png"),
      imageAlt: "Internship Certificate",
      footerLink: [
        {
          name: "Certificate of Internship",
          url: "https://drive.google.com/file/d/1lysBLAr2X3oZIQm9WIdyX2aBxSuX385P/view?usp=drive_link"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9398366756",
  email_address: "dheerajabhishek111@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
