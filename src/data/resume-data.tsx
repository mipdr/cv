import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { AdSecureLogo, Auth0Logo, KsyosLogo, UGRLogo, UHHLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Miguel Pedregosa",
  initials: "MP",
  location: "Spain",
  locationLink: "https://maps.app.goo.gl/UGXuJNGsii72x2nu9",
  about:
    "Software Engineer",
  summary:
    "Ever learning computer scientist with a musician background and a passion for problem solving and quality software design. Confident and upfront in my communication with both colleagues and clients. I enjoy team work, knowledge sharing and story telling on technical business topics.",
  avatarUrl: "https://avatars.githubusercontent.com/u/46425518?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "miguelpedregosaperez@gmail.com",
    tel: "+34 653992242",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mipdr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/miguel-pedregosa/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Granada",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2017",
      end: "2022",
      logo: UGRLogo,
    },
  ],
  work: [
    {
      company: "Auth0 (acquired by Okta)",
      link: "https://auth0.com/",
      badges: ["Remote"],
      title: "Software Engineer II",
      logo: Auth0Logo,
      start: "2023",
      end: null,
      description:
        "Developing and maintaining core CIAM features at high scale on a global infrastructure. With a high standard for security, performance and DX, we regularly work with standard identity protocols like OIDC or SAML to make authentication simpler.",
      technologies: [
        "OIDC",
        "SAML",
        "SQL",
        "NoSQL",
        "Typescript",
        "NodeJS",
        "AWS",
        "CI/CD",
        "Agile",
        "OAuth",
      ]
    },
    {
      company: "AdSecure",
      link: "https://www.adsecure.com/",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      logo: AdSecureLogo,
      start: "2022",
      end: "2023",
      description:
        `We develop a platform to identify and mitigate bad practices on online advertisement. We utilize browser automation to orchestrate user navigation discovery and several risk evaluation engines to assess threats.`,
      technologies: [
        "Typescript",
        "NodeJS",
        "AWS",
        "Browser Automation",
        "SQL",
        "NoSQL",
        "CI/CD",
      ]
    },
    {
      company: "Ksyos (via Nucleoo)",
      link: "https://ksyos.nl/",
      badges: [],
      title: "Software Engineer",
      logo: KsyosLogo,
      start: "2021",
      end: "2022",
      description:
        `We develop the web platform for the healthcare institution Ksyos. The system involves thousands of general practitioners, specialists and patients, in order to provide convenience and efficiency in their treatments.`,
      technologies: [
        "Typescript",
        "NodeJS",
        "SQL",
        "AWS",
        "TDD",
        "Scrum",
      ]
    },
    // {
    //   company: "Universität Hamburg - HerCoRe project",
    //   link: "https://www.inf.uni-hamburg.de/inst/dmp/hercore/projects.html",
    //   badges: [],
    //   title: "Web & Backend developer",
    //   logo: UHHLogo,
    //   start: "2020",
    //   end: "2020",
    //   description:
    //     "Developed a visualization tool for an OWL2 Ontology representing uncertain historical texts.",
    //   technologies: [
    //     "NodeJS",
    //     "SQL",
    //     "Python",
    //     "ETL",
    //   ]
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "C++",
    "React",
    "Node.js",
    "AWS",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "GenoMus",
      techStack: [
        "C++",
        "V8 bindings",
        "NodeJS",
      ],
      description: "FOSS Contributor to the GenoMus project",
      link: {
        label: "github.com",
        href: "https://github.com/mipdr/genomus-core",
      },
    },
    {
      title: "HerCoRe project",
      link: {
        href: "https://www.inf.uni-hamburg.de/inst/dmp/hercore/projects.html"
      },
      description:
        "Developed a visualization tool for an OWL2 Ontology representing uncertain historical texts.",
        techStack: [
        "NodeJS",
        "SQL",
        "Python",
        "ETL",
      ]
    },
    {
      title: "Data Science course",
      link: {
        href: "https://www.linkedin.com/school/mainforformacion/"
      },
      techStack: [
        "Python", "ML"
      ],
      description: "Received a 55h course on Data science @ Mainfor"
    },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "Personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers, and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description: "Howdy is a place for joining communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
