import oqpiBackgroundImage from "@images/oqpi.png";
import yourWorkoutAppBackgroundImage from "@images/yourworkoutapp.png";
import emetBackgroundImage from "@images/emetISLHD.png";
import linmickBackgroundImage from "@images/linmickdistributors.png";
import forewordBackgroundImage from "@images/foreword.png";
import siHabloEspanolBackgroundImage from "@images/sihabloespanol.png";
import dQueensBackgroundImage from "@images/dqueens.png";
import alexanderBackgroundImage from "@images/alexanderbezzina.png";
import portfolioBackgroundImage from "@images/portfolio.png";
import theLostHobbitBackgroundImage from "@images/thelosthobbit.png";
import buyMeACoffeeBackgroundImage from "@images/buymeacoffee.png";

export const WELCOME = {
  english: "Hi, I'm Angus",
  spanish: "Hola, soy Angus",
};

export const BIO = {
  english: {
    title: "About me",
    subtitle: "Hi, my name is Angus",
    text: "I'm a software engineer and technical advisor specialising in building world-class websites and applications. \nWith a range of expertise across TypeScript, React, Next.js, Node, Python, Prisma & Postgres, a strong knowledge of serverless architecture like AWS & GCP and an aptitude for automation & CI/CD pipelines I excel at both creating game-changing software and solving high-level engineering problems. \nCheck out the content below to see some of the work I've been involved in lately.",
    skills: [
      {
        title: "Technical Skills",
        skillList: [
          "Typescript",
          "React",
          "Next.js",
          "Node",
          "GraphQL",
          "JS/HTML/CSS",
          "Python",
          "LangChain",
          "AWS",
          "GCP",
          "Firebase",
          "Prisma",
          "Flutter",
        ],
      },
      {
        title: "Soft Skills",
        skillList: [
          "Critical thinking",
          "Leadership",
          "Attention to detail",
          "Creativity",
          "Collaboration",
          "Communication",
          "Adaptability",
          "Time management",
        ],
      },
    ],
  },
  spanish: {
    title: "Sobre mí",
    subtitle: "Hola, me llamo Angus",
    text: "Soy un ingeniero de software y asesor técnico especializado en la creación de sitios web y aplicaciones de clase mundial. \nCon una variedad de experiencia en TypeScript, React, Next.js, Node, Python, Prisma y Postgres, un sólido conocimiento de la arquitectura serverless como AWS y GCP, y una aptitud para la automatización y los pipelines de CI/CD, sobresalgo tanto en la creación de software innovador como en la resolución de problemas de ingeniería de alto nivel. \nEcha un vistazo al contenido a continuación para ver algunos de los trabajos en los que he estado involucrado últimamente.",
    skills: [
      {
        title: "Habilidades Técnicas",
        skillList: [
          "Typescript",
          "React",
          "Next.js",
          "Node",
          "GraphQL",
          "JS/HTML/CSS",
          "Python",
          "LangChain",
          "AWS",
          "GCP",
          "Firebase",
          "Prisma",
          "Flutter",
        ],
      },
      {
        title: "Habilidades Blandas",
        skillList: [
          "Pensamiento crítico",
          "Liderazgo",
          "Atención al detalle",
          "Creatividad",
          "Colaboración",
          "Comunicación",
          "Adaptabilidad",
          "Gestión del tiempo",
        ],
      },
    ],
  },
};

export const PROJECTS = {
  english: {
    title: "Projects",
  },
  spanish: {
    title: "Proyectos",
  },
  projects: [
    {
      english: {
        title: "AngusBezzina.com",
        description:
          "Portfolio website built with Typescript, Vite & ThreeJS. Utilises a simple contact form that is connected to AirTable with an AWS Lambda function and a simple LangGraph Agent that provides the engine for the chatbot.",
        featureImageAlt: "AngusBezzina.com Screenshot",
        date: "July, 2024",
      },
      spanish: {
        title: "AngusBezzina.com",
        description:
          "Sitio web de portafolio construido con Typescript, Vite y ThreeJS. Utiliza un formulario de contacto sencillo que está conectado a AirTable con una función Lambda de AWS y un agente LangGraph simple que proporciona el motor para el chatbot.",
        featureImageAlt: "AngusBezzina.com Captura de pantalla",
        date: "Julio, 2024",
      },
      slug: "angusbezzina",
      url: "https://angusbezzina.com/",
      repoUrl: "https://github.com/angusbezzina/portfolio-vite",
      featureImageSrc: portfolioBackgroundImage,
      stack: {
        backend: "AWS/Serverless, LangChain",
        frontend: "Vite, Typescript, ThreeJS",
      },
    },
    {
      english: {
        title: "TheLostHobbit.com",
        description:
          "Remix website documenting and tracking the journey of Alexander Bezzina as he ran across New Zealand raising money for an endangered species of bird.",
        featureImageAlt: "TheLostHobbit.com Screenshot",
        date: "April, 2023",
      },
      spanish: {
        title: "TheLostHobbit.com",
        description:
          "Sitio web Remix que documenta y sigue el viaje de Alexander Bezzina mientras corría por Nueva Zelanda recaudando dinero para una especie de ave en peligro de extinción.",
        featureImageAlt: "TheLostHobbit.com Captura de pantalla",
        date: "Abril, 2023",
      },
      slug: "thelosthobbit",
      featureImageSrc: theLostHobbitBackgroundImage,
      // url: "https://thelosthobbit.com/",
      repoUrl: "https://github.com/angusbezzina/alexander-run",
      stack: {
        backend: "Strapi, Neon",
        frontend: "Remix, Typescript, Tailwind",
      },
    },
    {
      english: {
        title: "SiHabloEspanol.com",
        description:
          "Website for a Spanish tutor complete with integrations to manage bookings, payments and a basic Strapi CMS.",
        featureImageAlt: "SiHabloEspanol.com Screenshot",
        date: "December, 2021",
      },
      spanish: {
        title: "SiHabloEspanol.com",
        description:
          "Sitio web para un tutor de español completo con integraciones para gestionar reservas, pagos y un CMS básico de Strapi.",
        featureImageAlt: "SiHabloEspanol.com Captura de pantalla",
        date: "Diciembre, 2024",
      },
      slug: "sihabloespanol",
      repoUrl: "https://github.com/angusbezzina/nathalie-salas-frontend",
      // url: "https://sihabloespanol.com/",
      featureImageSrc: siHabloEspanolBackgroundImage,
      stack: {
        backend: "Strapi, Neon",
        frontend: "NextJS, Typescript, Tailwind",
      },
    },
    {
      english: {
        title: "dqueens.com.mx",
        description:
          "Website for a beauty parlour in Mexico complete with a blog, full internationalization and Strapi CMS.",
        featureImageAlt: "D'Queens Screenshot",
        date: "February, 2022",
      },
      spanish: {
        title: "dqueens.com.mx",
        description:
          "Sitio web para un salón de belleza en México completo con un blog, internacionalización completa y un CMS de Strapi.",
        featureImageAlt: "D'Queens Captura de pantalla",
        date: "Febrero, 2022",
      },
      slug: "dqueens",
      repoUrl: "https://github.com/angusbezzina/dqueens",
      // url: "https://dqueens.com.mx/",
      featureImageSrc: dQueensBackgroundImage,
      stack: {
        backend: "Neon, Strapi",
        frontend: "Next.js, Typescript, Tailwind",
      },
    },
    {
      english: {
        title: "AlexanderBezzina.com",
        description:
          "Portfolio website with attached photography store built with NextJS/React, Typescript, GraphQL, KeystoneJS and MongoDB.",
        featureImageAlt: "AlexanderBezzina.com Screenshot",
        date: "April, 2021 (currently in development)",
      },
      spanish: {
        title: "AlexanderBezzina.com",
        description:
          "Sitio web de la cartera con tienda de fotografía adjunta construida con NextJS/React, Typescript, GraphQL, KeystoneJS y MongoDB.",
        featureImageAlt: "AlexanderBezzina.com Captura de pantalla",
        date: "Abril, 2021 (actualmente en desarrollo)",
      },
      slug: "alexanderbezzina",
      url: "https://alexanderbezzina.com/",
      repoUrl: "https://github.com/angusbezzina/alexanderbezzina-frontend",
      featureImageSrc: alexanderBackgroundImage,
      stack: {
        backend: "MongoDB, GraphQL, KeystoneJS",
        frontend: "React, NextJS, Typescript, Apollo",
      },
    },
    {
      english: {
        title: "Emergency Medicine Education and Training",
        description:
          "Podcast and website created for the Emergency Medicine Education and Training branch of the Illawarra Shoalhaven Local Health District.",
        featureImageAlt: "EMET-ISLHD Screenshot",
        date: "January, 2019",
      },
      spanish: {
        title: "Educación y Capacitación en Medicina de Emergencia",
        description:
          "Podcast y sitio web creado para la rama de Educación y Capacitación en Medicina de Emergencia del Distrito de Salud Local de Illawarra Shoalhaven.",
        featureImageAlt: "EMET-ISLHD Captura de pantalla",
        date: "Enero, 2019",
      },
      slug: "emetislhd",
      url: "https://emet-islhd.blog",
      repoUrl: "https://github.com/angusbezzina/emet-islhd",
      featureImageSrc: emetBackgroundImage,
      stack: {
        backend: "Wordpress",
        frontend: "JS/HTML/CSS",
      },
    },
    {
      english: {
        title: "Linmick Distributors",
        description:
          "Website created for a small Illawarra business specialising in food and general store supply distribution.",
        featureImageAlt: "Linmick Distributors Screenshot",
        date: "July, 2018",
      },
      spanish: {
        title: "Linmick Distributors",
        description:
          "Sitio web creado para una pequeña empresa de Illawarra especializada en distribución de alimentos y suministros para tiendas generales.",
        featureImageAlt: "Linmick Distributors Captura de pantalla",
        date: "Julio, 2018",
      },
      slug: "linmick",
      url: "https://linmick.com.au/",
      featureImageSrc: linmickBackgroundImage,
      stack: {
        backend: "Wordpress",
        frontend: "JS/HTML/CSS",
      },
    },
  ],
};

export const EXPERIMENTS = {
  english: {
    title: "Experiments",
  },
  spanish: {
    title: "Experimentos",
  },
  experimentList: [
    {
      english: {
        title: "BuyMeACoffee",
        description:
          "Simple 'Buy Me A Coffee' smart contract that is written in Solidity and built with Hardhat.",
        featureImageAlt: "BuyMeACoffee screenshot",
        date: "November, 2024",
      },
      spanish: {
        title: "BuyMeACoffee",
        description:
          "Contrato inteligente simple 'Buy Me A Coffee' que está escrito en Solidity y construido con Hardhat.",
        featureImageAlt: "BuyMeACoffee Captura de pantalla",
        date: "Noviembre, 2024",
      },
      featureImageSrc: buyMeACoffeeBackgroundImage,
      slug: "buymeacoffee",
      url: "https://buy-me-a-coffee-astro.vercel.app/",
      stack: {
        backend: "Solidity, Hardhat, Typescript",
        frontend: "Astro, React, Typescript, Wagmi, Viem",
      },
    },
    {
      english: {
        title: "PromptSavvy",
        description:
          "Platform and Chrome extension that enables Creators to market and sell AI Prompts.",
        featureImageAlt: "PromptSavvy screenshot",
        date: "In Development",
      },
      spanish: {
        title: "PromptSavvy",
        description:
          "Plataforma y extensión de Chrome que permite a los creadores comercializar y vender prompts de IA.",
        featureImageAlt: "PromptSavvy Captura de pantalla",
        date: "Actualmente en desarrollo",
      },
      slug: "promptsavvy",
      url: "https://www.promptsavvyapp.com/",
      stack: {
        backend: "MongoDB, Node",
        frontend: "React, Vite, Tailwind",
      },
    },
    {
      english: {
        title: "YourWorkout.App",
        description: "Workout app that generates random workouts based on user preferences.",
        featureImageAlt: "Your Workout App screenshot",
        date: "September, 2019",
      },
      spanish: {
        title: "YourWorkout.App",
        description:
          "Aplicación de entrenamiento que genera entrenamientos aleatorios según las preferencias del usuario.",
        featureImageAlt: "Your Workout App Captura de pantalla",
        date: "Septiembre, 2019",
      },
      slug: "yourworkoutapp",
      url: "https://yourworkout.app/",
      featureImageSrc: yourWorkoutAppBackgroundImage,
      stack: {
        backend: "Node JS, GraphQL (apollo-server-lambda), AWS Serverless",
        frontend: "React, Apollo",
      },
    },
    {
      english: {
        title: "OQPI",
        description:
          "Remote business workflow app that was designed to allow guests of a local hotel to check-in remotely using a tablet on the premises.",
        featureImageAlt: "OQPI Screenshot",
        date: "July, 2020",
      },
      spanish: {
        title: "OQPI",
        description:
          "Aplicación de flujo de trabajo empresarial remoto que fue diseñada para permitir a los huéspedes de un hotel local registrarse de forma remota utilizando una tableta en las instalaciones.",
        featureImageAlt: "OQPI Captura de pantalla",
        date: "July, 2020",
      },
      slug: "oqpi",
      url: "https://oqpi.com.au/",
      featureImageSrc: oqpiBackgroundImage,
      stack: {
        backend: "Node JS, GraphQL (apollo-server-lambda), AWS Serverless",
        frontend: "React, Apollo",
      },
    },
    {
      english: {
        title: "ForeWord",
        description:
          "An app where users can subscribe to learn a new word in a foreign language every day.",
        featureImageAlt: "ForeWord Screenshot",
        date: "January, 2021",
      },
      spanish: {
        title: "ForeWord",
        description:
          "Una aplicación donde los usuarios pueden suscribirse y aprender una nueva palabra en un idioma extranjero todos los días.",
        date: "Enero, 2021",
      },
      slug: "foreword",
      repoUrl: "https://github.com/angusbezzina/foreword-signup",
      // url: "https://foreword.world/",
      featureImageSrc: forewordBackgroundImage,
      stack: {
        backend: "AWS/Serverless",
        frontend: "React",
      },
    },
  ],
};

export const LINKS = {
  english: {
    about: "About",
    projects: "Projects",
    experiments: "Experiments",
    explore: "Learn more",
    returnToTop: "Return",
  },
  spanish: {
    about: "Sobre mí",
    projects: "Proyectos",
    experiments: "Experimentos",
    explore: "Aprende más",
    returnToTop: "Volver",
  },
};

export const AI = {
  english: {
    intro: "Hey there 👋, how can I help?",
  },
  spanish: {
    intro: "Hola 👋, ¿cómo puedo ayudarte?",
  },
};

export const CONTACT_DETAILS = {
  english: {
    preTitle: "Want to work with me?",
    title: "Get in touch",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
      responseSuccess: `Thanks {{name}}! I'll be in touch soon 😁`,
      responseFailure: `Sorry {{name}}. It looks like something has gone wrong 😔`,
    },
    download: {
      title: "Old School?",
      buttonText: "Download my CV",
      fileName: "angus-bezzina-cv-2024.pdf",
    },
    placeholders: {
      name: "Jane Doe",
      email: "hi@jane.com",
      message: "Hi, my name is Jane...",
    },
  },
  spanish: {
    preTitle: "¿Quieres trabajar conmigo?",
    title: "Poner en contacto",
    labels: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      submit: "Enviar",
      responseSuccess: `Gracias {{name}}! Se responderé lo antes posible 😁`,
      responseFailure: `Lo siento {{name}}. Parece como algo ha pasado malo 😔`,
    },
    download: {
      title: "¿Eres de la vieja escuela?",
      buttonText: "Descarga mi CV",
      fileName: "angus-bezzina-cv-2024.pdf",
    },
    placeholders: {
      name: "Yessica Perez",
      email: "hola@yessica.com",
      message: "Hola, mi nombre es Yessica...",
    },
  },
  cv: "angus-bezzina-cv-2024.pdf",
  email: "angusbezzina@gmail.com",
  phone: "+(1) 857 445 1198",
};

export const SOCIAL_DETAILS = {
  twitter: "https://twitter.com/angus1192",
  gitHub: "https://github.com/angusbezzina/",
  linkedIn: "https://www.linkedin.com/in/angus-bezzina",
};
