import yo from "../assets/img/yo.jpg";

export const profile = {
  name: "GERMAN APAZA",
  title: "ReactJS • React Native • Android Developer",
  summary: "Tengo 6 años de experiencia en desarrollo de software especializado en aplicaciones móviles con React Native para iOS y Android, así como en desarrollo web con ReactJS. Soy responsable, proactivo y siempre busco aportar y aprender.",
  image: yo,
};

export const contact = {
  whatsapp: "+51 925 710 617",
  github: "https://github.com/ANG95",
  email: "german.apaza.n@gmail.com",
};

export const skills = [
  "ReactJS",
  "React Native (CLI & Expo)",
  "ElectronJS",
  "NodeJS (Express)",
  "Jetpack Compose",
  "MySQL",
  "GitHub (GitHub Actions)",
  "Kotlin",
  "Android",
  "PHP",
  "AWS",
  "Web Sockets",
  "GraphQL",
  "MongoDB",
  "WordPress",
];

export const education = [
  {
    title: "Ingeniería de Sistemas e Informática",
    institution: "Universidad Privada TELESUP",
    date: "Dic 2021",
  },
  {
    title: "Técnico en Computación e Informática",
    institution: "Instituto de Educación Superior Tecnológico Público Juli",
    date: "Dic 2014",
  },
];

export const experience = [
  {
    role: "Desarrollador Senior",
    company: "Fractal - Perú",
    link: "https://www.fractal.com.pe/",
    period: "03/2025 – 05/2025",
    project: "Mobile developer – Banco BanBif (Perú)",
    bullets: [
      "Desarrollo e implementación de nuevas funcionalidades en la nueva aplicación móvil del banco.",
      "Aplicación de buenas prácticas de Clean Code y principios SOLID para asegurar código mantenible y escalable.",
      "Creación de componentes reutilizables para estandarizar el diseño y mejorar la eficiencia del desarrollo.",
    ],
    stack: [
      "ReactJS", "Storybook", "Micro frontend", "React Native", "TypeScript", "Hooks", "Axios", "ESLint", "Styled Components", "React Context", "React Hook Form"
    ],
  },
  {
    role: "Team Leader / Frontend Developer",
    company: "NTTDATA - Perú",
    link: "https://www.nttdata.com/",
    period: "08/2022 – 03/2025",
    projects: [
      {
        name: "Frontend developer – Pacífico Seguros (Perú)",
        bullets: [
          "Desarrollo e implementación de componentes usando micro frontend.",
          "Refactorización de componentes.",
          "Identificación de componentes polimórficos y no polimórficos.",
          "Documentación de componentes en Storybook."
        ],
        stack: ["ReactJS", "Storybook", "Micro frontend"],
      },
      {
        name: "Frontend developer – MiBanco (Perú)",
        bullets: [
          "Corrección de bugs de UX en microfrontends.",
          "Refactorización de reportes bancarios.",
          "Apoyo en el levantamiento del proyecto."
        ],
        stack: ["Android", "Jetpack Compose", "MVVM", "Retrofit", "Shared Preferences"],
      },
      {
        name: "Investigación y desarrollo – Laboratorio DTI / NTT DATA",
        bullets: [
          "Implementación de UX para transferencia de NFT con Realm.",
          "Implementación del módulo de login con Auth0.",
          "Exploración e implementación de nuevas tecnologías en Web3, blockchain y criptografía aplicada.",
          "Desarrollo de prototipos funcionales en una app móvil construida con React Native.",
          "Uso de Realm como base de datos local para experiencia offline-first.",
          "Contribución en análisis de tecnologías emergentes para soluciones financieras seguras y descentralizadas.",
        ],
        stack: [
          "Android", "Cripto", "HTTP", "Web3", "Realm", "SharedPreferences", "React Native", "Web3.js / Ethers.js", "NFT", "Criptografía", "Smart contracts (nivel exploratorio)"
        ],
      }
    ]
  },
  {
    role: "Lead Developer",
    company: "Telcel – México",
    link: "https://www.telcel.com/",
    period: "2021 – 2022",
    projects: [
      {
        name: "Firmas",
        bullets: [
          "Implementación de firma con lector de huellas (Zkteco SLK20R USB) de los contratos.",
          "Captura de firma mediante draw para los contratos.",
          "Implementar deepLink para conectar con otras apps externas.",
          "Refactorizar el manejo de datos en SharedPreferences.",
        ],
        stack: ["XML", "MVP", "MVVM", "Android", "SharedPreferences", "SLK20R driver"],
      },
      {
        name: "Preciador",
        bullets: [
          "Reconocimientos por proactividad y colaboración.",
          "Rediseño de la UI y migración a Jetpack Compose.",
          "Implementar y comunicar MVVM con MVP.",
          "Implementar modo retail para el preciador.",
          "Actualización automática de precios y promociones usando web sockets."
        ],
        stack: [
          "Android", "Jetpack Compose", "XML", "MVP", "MVVM", "SharedPreferences", "Permisos de cámara, audio, internet, accesibilidad, background, geolocalización"
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
          "Reconocimientos por proactividad y colaboración en el squad.",
          "Implementación de push notifications con deepLink.",
          "Validación de tarjetas de crédito con el algoritmo de Luhn.",
          "Implementación de módulo de pagos con Culqui."
        ],
        stack: [
          "React Native: Redux toolkit, axios, hooks, react-hook-form, redux-saga, react-native-skeleton-placeholder, typescript, eslint",
          "AWS: amplify, cognito, appsync, pinpoint, dynamoDB",
          "Despliegue: github actions, appcenter y testflight"
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
          "Rediseño de aplicación.",
          "Organización y reestructuración del proyecto.",
          "Completar la entrega del proyecto en un plazo más breve.",
          "Conectar react native de geolocalización en background con módulos nativos.",
          "Implementación de módulo de pagos con Vtex."
        ],
        stack: [
          "React Native: context, redux-toolkit, axios, hooks, formik, react-native-skeleton-placeholder, lottie, typescript, eslint",
          "Despliegue: appcenter, testflight, firebase"
        ]
      }
    ]
  },
  {
    role: "Frontend Developer React Native",
    company: "Skydropx - México",
    link: "https://www.skydropx.com/",
    period: "03/2022 – 06/2022",
    bullets: [
      "Estructura de acuerdo con las necesidades del proyecto.",
      "Implementar Atomic design.",
      "Modelo scaffolding de distribución e integración continua.",
      "Uso de proveedores de identidad de redes sociales.",
      "Implementar los pipelines para automatizar los deploy.",
    ],
    stack: [
      "React Native: context, axios, hooks, formik, lottie, typescript, eslint, pruebas unitarias con Jest y react testing library",
      "Despliegue: github actions, firebase distribution y testflight"
    ],
  },
  {
    role: "Frontend Developer React/React Native",
    company: "E-Momento - EE.UU.",
    link: "https://momentoglobal.com/",
    period: "09/2020 – 02/2022",
    bullets: [
      "Integración de synapse para remesas de EE.UU. a México.",
      "Implementación del módulo de login de la app con login biométrico y face ID verification.",
      "Implementación del módulo de visualización de movimientos de dinero."
    ],
    stack: [
      "React Native Expo: context, axios, hooks, formik, lottie, typescript, eslint, pruebas unitarias con jest y enzyme",
      "Despliegue: github actions, firebase distribution y testflight"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Centro Médico Medident - Puno Perú",
    link: "http://sigobras.com/",
    period: "01/2020 – 04/2020",
    bullets: [
      "Presentación visual efectiva para persuadir al cliente.",
      "Selección de stack tecnológico adecuado para la perdurabilidad del sistema.",
      "Desarrollar ejecutables para fácil instalación.",
    ],
    stack: [
      "Frontend: electronJS, context, axios, hooks, formik, lottie, typescript, eslint, IPC render, electronmon",
      "Backend: NodeJS, expressJS, mysql, date-fn, nodemon, typescript, Bootstrap 5",
      "Despliegue: Scripts para build y generación de .exe"
    ],
  },
  {
    role: "Full Stack Developer",
    company: "SIGOBRAS - Puno Perú",
    link: "https://www.sigobras.com/",
    period: "01/2019 – 12/2019",
    bullets: [
      "Inicio de carrera profesional como desarrollador.",
      "Selección de stack tecnológico adecuado.",
      "Desarrollo de app con geolocalización y chat utilizando React Native.",
      "Reclutamiento y liderazgo del equipo de desarrollo.",
      "Desarrollo de módulos: Metrados, Valorizaciones, Procesos Gerenciales, autenticación."
    ],
    stack: [
      "React Native y React: context, axios, hooks, formik, lottie, typescript, eslint, bootstrap 4, HTML, CSS, ES6",
      "Despliegue: AWS EC2"
    ]
  }
];

