import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { AdSecureLogo, Auth0Logo, KsyosLogo, UGRLogo, UHHLogo, NotHiringLogo } from "@/images/logos";

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
      description: "URV's MECMAT program focuses on scientific computing, mathematics and computer science areas. Covered topics like Numerical Methods, High Performance Computing, Distributed Systems, Differential Equation Modelling, GPU programming and Cryptography, among others. Key technologies used in this program include C/C++, OMP, MPI, Cuda, Python, MatLab, Spark, Jupyter Notebooks and AWS."
    },
    {
      school: "University of Granada",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2017",
      end: "2022",
      logo: UGRLogo,
      description: "Studying Computer Science at UGR gave me the core knowledge set that has allowed me to suceed as a software engineer. Most significant learnings include Data Structures and Algorithms, Programming Paradigms like OOP and FP, Operating Systems, Distributed Systems, Database internals, Machine Learning, Compilers, Cybersecurity and Computer Graphics, among others."
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
        "Developing and maintaining core tier-0 CIAM features at high scale on a global multi-tenant infrastructure. Successfully shipped and lead many mission-critical features that achieved product adoption and revenue growth. Part of the core authentication department, where we ship and maintain the most critical areas of the core Auth0 authentication runtime. Actively lead software development from product design to incident response, while also empowering aspiring engineers through onboarding and mentoring. Some of the customer-facing features we shipped: [1](https://auth0.com/blog/introducing-session-management-api/), [2](https://auth0.com/docs/authenticate/single-sign-on/native-to-web), [3](https://auth0.com/docs/authenticate/login/logout/back-channel-logout), [4](https://auth0.com/docs/manage-users/sessions/manage-sessions-actions)",
      technologies: [
        "NodeJS",
        "TS",
        "PGSQL",
        "MongoDB",
        "Redis",
        "DynamoDB",
        "AWS",
        "Terraform",
        "K8s",
        "OAuth",
        "OIDC",
        "SAML"
      ]
    },
    {
      company: "Nothiring",
      link: "https://nothiring.me/",
      badges: [],
      title: "Engineering Mentor",
      logo: NotHiringLogo,
      start: "2025",
      end: "2025",
      description:
        "Participated in the NotHiring mentoring program as an Engineering Mentor. Carried out recurring meetings with Junior Engineer mentees to empower them on their career. Recurring items were mock interviews, system design talks, career progression talks and interview prep.",
      technologies: [
        "Mentoring", "Interview prep", "System design"
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
        `We develop a platform to identify and mitigate bad practices on online advertisement. We utilize browser automation to orchestrate user navigation discovery and several risk evaluation engines to assess threats. Shipped features to improve our malware detection capabilities. Extensively troubleshooted and debugged a complex microservices system, identifying issues and reducing the number of false positive and false negatives.`,
      technologies: [
        "TS",
        "AWS",
        "DevToolsProtocol",
        "SQL",
        "NoSQL",
        "CI/CD",
        "AWS CDK",
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
        `We develop the web platform for the healthcare institution Ksyos. Ksyos is one of the main private online healthcare platforms in the Neatherlands. The system involves thousands of general practitioners, specialists and patients, and provides convenience and efficiency in their treatments. During my time at Ksyos, I delivered quality software features as part of an agile Scrum team. Actively took part in feature design, implementation and maintentance. Successfully lead the design for and shipped an internal tool for automatic invoice and payment data syncronization to Exact, which saved the finance departments weeks of manual labor each quarter.`,
      technologies: [
        "Typescript",
        "NodeJS",
        "React",
        "SQL",
        "AWS",
        "TDD",
        "Scrum",
      ]
    },
    {
      company: "Universität Hamburg - HerCoRe project",
      link: "https://www.inf.uni-hamburg.de/inst/dmp/hercore/projects.html",
      badges: [],
      title: "Web & Backend developer",
      logo: UHHLogo,
      start: "2020",
      end: "2020",
      description:
        "Developed a visualization tool for an OWL2 Ontology representing uncertain historical texts in the context of the HerCoRe research project from the University of Hamburg.",
      technologies: [
        "NodeJS",
        "SQL",
        "Python",
        "ETL",
      ]
    },
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
      description: "FOSS Contributor to the GenoMus project. Prototype of a rewrite of the GenoMus language interpreter in C++.",
      link: {
        label: "github.com",
        href: "https://github.com/mipdr/genomus-core",
      },
    },
    // {
    //   title: "HerCoRe project",
    //   link: {
    //     href: "https://www.inf.uni-hamburg.de/inst/dmp/hercore/projects.html"
    //   },
    //   description:
    //     "Developed a visualization tool for an OWL2 Ontology representing uncertain historical texts.",
    //   techStack: [
    //     "NodeJS",
    //     "SQL",
    //     "Python",
    //     "ETL",
    //   ]
    // },
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
  ],
} as const;
