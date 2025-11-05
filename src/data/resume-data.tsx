import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { AdSecureLogo, Auth0Logo, KsyosLogo, UGRLogo, UHHLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Miguel Pedregosa",
  initials: "MP",
  location: "Spain",
  locationLink: "https://maps.app.goo.gl/UGXuJNGsii72x2nu9",
  about:
    "Senior Software Engineer",
  summary:
    "Ever learning software engineer with a musician background and a passion for problem solving and quality software design. I enjoy developing critical systems at scale and delivering high quality products for the end-user. Fast-pased, highly-collaborative environments is where I thrive.",
  avatarUrl: "https://avatars.githubusercontent.com/u/46425518?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "miguelpedregosaperez@gmail.com",
    tel: "+34 653992242",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/mipdr",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/miguel-pedregosa/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universitat Rovira i Virgili",
      degree: "Master's Degree in Computational Engineering and Mathematics",
      start: "2024",
      end: "*",
      logo: UGRLogo,
    },
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
      badges: [],
      title: "Senior Software Engineer",
      logo: Auth0Logo,
      start: "2023",
      end: null,
      description:
        "Developing and maintaining core CIAM features at high scale on a global multi-tenant infrastructure. With a high standard for security, performance and DX, we regularly work with standard identity protocols like OIDC or SAML to make authentication simpler.",
      technologies: [
        "TS",
        "PGSQL",
        "MongoDB",
        "Redis",
        "DynamoDB",
        "AWS",
        "Terraform",
        "K8s",
      ]
    },
    {
      company: "AdSecure",
      link: "https://www.adsecure.com/",
      badges: [],
      title: "Senior Software Engineer",
      logo: AdSecureLogo,
      start: "2022",
      end: "2023",
      description:
        `We develop a platform to identify and mitigate bad practices on online advertisement. We utilize browser automation to orchestrate user navigation discovery and several risk evaluation engines to assess threats.`,
      technologies: [
        "TS",
        "NodeJS",
        "AWS",
        "DevToolsProtocol",
        "SQL",
        "NoSQL",
        "CI/CD",
        "Graph Databases"
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
      title: "Kick the bad actors out",
      techStack: [
        "OIDC",
        "SAML SLO",
        "BCLO",
        "Security"
      ],
      description: "Talk for DevDay24 on how to accomplish Global Logout to mitigate session hijacking risks.",
      link: {
        href: "https://a0.to/devday24/access-revocation",
      },
    },
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
    // {
    //   title: "Data Science course",
    //   link: {
    //     href: "https://www.linkedin.com/school/mainforformacion/"
    //   },
    //   techStack: [
    //     "Python", "ML"
    //   ],
    //   description: "Received a 55h course on Data science @ Mainfor"
    // },
  ],
} as const;
