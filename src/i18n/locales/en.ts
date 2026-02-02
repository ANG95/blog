import type { Translations } from "../types";

export const en: Translations = {
  ui: {
    backToPortfolio: "← Back to portfolio",
    skills: "Skills",
    education: "Education",
    experience: "Experience",
    visit: "Visit",
    privacyPolicy: "Privacy policy – Offline Intercom",
    copyright: "German Apaza",
  },
  profile: {
    title: "ReactJS • React Native • Android Developer",
    summary:
      "I have 6 years of experience in software development specialized in mobile applications with React Native for iOS and Android, as well as web development with ReactJS. I am responsible, proactive and always seek to contribute and learn.",
  },
  education: [
    {
      title: "Systems and Computer Engineering",
      institution: "Universidad Privada TELESUP",
      date: "Dec 2021",
    },
    {
      title: "Computer Science Technician",
      institution: "Instituto de Educación Superior Tecnológico Público Juli",
      date: "Dec 2014",
    },
  ],
  experience: [
    {
      role: "Senior Developer",
      company: "Fractal - Peru",
      link: "https://www.fractal.com.pe/",
      period: "03/2025 – 05/2025",
      bullets: [
        "Development and implementation of new features in the bank's new mobile application.",
        "Application of Clean Code best practices and SOLID principles for maintainable and scalable code.",
        "Creation of reusable components to standardize design and improve development efficiency.",
      ],
      stack: [
        "ReactJS", "Storybook", "Micro frontend", "React Native", "TypeScript", "Hooks", "Axios", "ESLint", "Styled Components", "React Context", "React Hook Form"
      ],
    },
    {
      role: "Team Leader / Frontend Developer",
      company: "NTTDATA - Peru",
      link: "https://www.nttdata.com/",
      period: "08/2022 – 03/2025",
      projects: [
        {
          name: "Frontend developer – Pacífico Seguros (Peru)",
          bullets: [
            "Development and implementation of components using micro frontend.",
            "Component refactoring.",
            "Identification of polymorphic and non-polymorphic components.",
            "Component documentation in Storybook."
          ],
          stack: ["ReactJS", "Storybook", "Micro frontend"],
        },
        {
          name: "Frontend developer – MiBanco (Peru)",
          bullets: [
            "UX bug fixes in microfrontends.",
            "Banking reports refactoring.",
            "Support in project kickoff."
          ],
          stack: ["Android", "Jetpack Compose", "MVVM", "Retrofit", "Shared Preferences"],
        },
        {
          name: "Research and development – DTI Lab / NTT DATA",
          bullets: [
            "UX implementation for NFT transfer with Realm.",
            "Login module implementation with Auth0.",
            "Exploration and implementation of new technologies in Web3, blockchain and applied cryptography.",
            "Development of functional prototypes in a mobile app built with React Native.",
            "Use of Realm as local database for offline-first experience.",
            "Contribution to analysis of emerging technologies for secure and decentralized financial solutions.",
          ],
          stack: [
            "Android", "Crypto", "HTTP", "Web3", "Realm", "SharedPreferences", "React Native", "Web3.js / Ethers.js", "NFT", "Cryptography", "Smart contracts (exploratory level)"
          ],
        }
      ]
    },
    {
      role: "Lead Developer",
      company: "Telcel – Mexico",
      link: "https://www.telcel.com/",
      period: "2021 – 2022",
      projects: [
        {
          name: "Firmas",
          bullets: [
            "Contract signature implementation with fingerprint reader (Zkteco SLK20R USB).",
            "Signature capture via draw for contracts.",
            "DeepLink implementation to connect with external apps.",
            "SharedPreferences data handling refactoring.",
          ],
          stack: ["XML", "MVP", "MVVM", "Android", "SharedPreferences", "SLK20R driver"],
        },
        {
          name: "Preciador",
          bullets: [
            "Recognition for proactivity and collaboration.",
            "UI redesign and migration to Jetpack Compose.",
            "MVVM implementation and communication with MVP.",
            "Retail mode implementation for the pricer.",
            "Automatic price and promotion updates using web sockets."
          ],
          stack: [
            "Android", "Jetpack Compose", "XML", "MVP", "MVVM", "SharedPreferences", "Camera, audio, internet, accessibility, background, geolocation permissions"
          ],
        }
      ]
    },
    {
      role: "Leader Developer",
      company: "BCP (io)",
      link: "#",
      period: "2021",
      projects: [
        {
          name: "Matrix",
          bullets: [
            "Recognition for proactivity and collaboration in the squad.",
            "Push notifications implementation with deepLink.",
            "Credit card validation with Luhn algorithm.",
            "Payment module implementation with Culqui."
          ],
          stack: [
            "React Native: Redux toolkit, axios, hooks, react-hook-form, redux-saga, react-native-skeleton-placeholder, typescript, eslint",
            "AWS: amplify, cognito, appsync, pinpoint, dynamoDB",
            "Deploy: github actions, appcenter and testflight"
          ],
        }
      ]
    },
    {
      role: "Leader Developer",
      company: "Iconn (7-Eleven)",
      link: "#",
      period: "2020",
      projects: [
        {
          name: "oh4y0",
          bullets: [
            "Application redesign.",
            "Project organization and restructuring.",
            "Complete project delivery in a shorter timeframe.",
            "Connect React Native background geolocation with native modules.",
            "Payment module implementation with Vtex."
          ],
          stack: [
            "React Native: context, redux-toolkit, axios, hooks, formik, react-native-skeleton-placeholder, lottie, typescript, eslint",
            "Deploy: appcenter, testflight, firebase"
          ]
        }
      ]
    },
    {
      role: "Frontend Developer React Native",
      company: "Skydropx - Mexico",
      link: "https://www.skydropx.com/",
      period: "03/2022 – 06/2022",
      bullets: [
        "Structure according to project needs.",
        "Implement Atomic design.",
        "Scaffolding model for distribution and continuous integration.",
        "Use of social network identity providers.",
        "Implement pipelines to automate deploys.",
      ],
      stack: [
        "React Native: context, axios, hooks, formik, lottie, typescript, eslint, unit tests with Jest and react testing library",
        "Deploy: github actions, firebase distribution and testflight"
      ],
    },
    {
      role: "Frontend Developer React/React Native",
      company: "E-Momento - USA",
      link: "https://momentoglobal.com/",
      period: "09/2020 – 02/2022",
      bullets: [
        "Synapse integration for USA to Mexico remittances.",
        "App login module implementation with biometric login and face ID verification.",
        "Money movement display module implementation."
      ],
      stack: [
        "React Native Expo: context, axios, hooks, formik, lottie, typescript, eslint, unit tests with jest and enzyme",
        "Deploy: github actions, firebase distribution and testflight"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Centro Médico Medident - Puno Peru",
      link: "http://sigobras.com/",
      period: "01/2020 – 04/2020",
      bullets: [
        "Effective visual presentation to persuade the client.",
        "Adequate technology stack selection for system longevity.",
        "Develop executables for easy installation.",
      ],
      stack: [
        "Frontend: electronJS, context, axios, hooks, formik, lottie, typescript, eslint, IPC render, electronmon",
        "Backend: NodeJS, expressJS, mysql, date-fn, nodemon, typescript, Bootstrap 5",
        "Deploy: Build scripts and .exe generation"
      ],
    },
    {
      role: "Full Stack Developer",
      company: "SIGOBRAS - Puno Peru",
      link: "https://www.sigobras.com/",
      period: "01/2019 – 12/2019",
      bullets: [
        "Start of professional career as a developer.",
        "Adequate technology stack selection.",
        "App development with geolocation and chat using React Native.",
        "Recruitment and leadership of the development team.",
        "Module development: Metrados, Valorizaciones, Management Processes, authentication."
      ],
      stack: [
        "React Native and React: context, axios, hooks, formik, lottie, typescript, eslint, bootstrap 4, HTML, CSS, ES6",
        "Deploy: AWS EC2"
      ]
    }
  ],
};
