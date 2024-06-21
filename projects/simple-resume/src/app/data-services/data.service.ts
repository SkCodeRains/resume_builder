import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _personalDetails = {
    name: "Mohammed Shaikh",
    title: "Full-Stack Web Developer ",
    summary1: `    
          Experienced Full Stack Developer with over 2 years of proficiency in both \\BFront End and Back End\\B
           development, excelling in dynamic and challenging production environments. Proven track record of delivering
            fast, accurate and effective code to enhance products and resolve critical infrastructure issues.
             Proficient in Angular,  Angular Material, NgBootstrap and RxJS for engaging UI/UX experiences.
             AWS CodeCommit with strong collaboration skills in Agile environments. Well versed in Java development,
              including Spring Boot, Spring MVC and Spring Framework, with expertise in RESTful API development and
               seamless database integration using Postgres, MySQL and Oracle DB.
    `,
    summary2: `
    \\BFull-stack developer with 2+ years of experience\\B building and deploying web applications using Java,
     Spring Boot and Angular. Proven ability to deliver high-quality, user-centric applications with a
      focus on \\Bperformance optimization\\B. Seeking a challenging role to leverage my expertise in full-stack
       development, including \\BJavaScript, spring boot and database technologies\\B, to design, implement and deploy innovative,
        scalable solutions utilizing \\BDocker containers\\B, AWS cloud infrastructure and Spring Cloud for distributed
         systems.
    `,
    summary: `   
    With two years of professional experience at \\BOSI Systems\\B from November 2021 to October 2023, an \\BAngular\\B and \\BSpring Boot\\B developer focused on a \\Bsecurity domain\\B product for \\Bintegration systems\\B used in \\Bscanning processes\\B at \\Bairports\\B, \\Bborder security\\B, and similar events. Contributed to \\Bdeveloping complex features\\B, including \\Bdesigning user interfaces\\B, creating \\Badvanced data visualizations\\B, implementing \\Breal-time updates\\B, and ensuring application responsiveness and cross-browser compatibility. Integrated \\BRESTful APIs\\B and collaborated with cross-functional teams to ensure the product's robustness and scalability.
    `
  };

  // Hands-on experience in build and deployment through CI/CD pipelines with Jenkins, Docker And Kubernetes.

  experiences = [
    {
      title: "Software Engineer (FE/BE)",
      at: "OSI Systems.",
      location: "Hyderabad",

      //       Software Engineer (FE/BE) OSI Systems, Hyderabad (May 2022 - Oct 2023)

      // - Directed and managed the development of scalable features in micro front-end and microservices using Spring Boot 3 and Angular.
      // - Designed and deployed a software update, resulting in a 30% reduction in system errors and a 25% improvement in application performance.
      // - Implemented a real-time data analytics dashboard with Angular, enhancing user experience and enabling dynamic data visualization.
      // - Introduced unit testing and code review processes using Jasmine/Karma for Angular and JUnit for Spring Boot, reducing bugs by 35%.

      date: "Nov 2021 - Oct 2023", list: [
        "\\BDeveloped scalable features\\B in micro front-end and microservices using \\BSpring Boot 3\\B and \\BAngular.\\B",
        "\\BDesigned and deployed\\B a software update, resulting in a \\B30% reduction\\B in system errors and a \\B25% improvement\\B in application performance.",
        "\\BImplemented a real-time data analytics dashboard\\B with Angular, Spring Boot enhancing user experience and enabling dynamic data visualization.",
        "\\BComponent Libraries :\\B developed  with advanced dynamic reactive forms for faster, consistent product development."
        // "Technologies & Skills : Java, Angular 12+/17, Micro Services, Micro Front-End, SpringFLo, Spring Boot, Spring Security, Angular Material, NgBootstrap, D3.JS, Gridster.Js, Docker, OKTA, OAuth2, Jenkins, Postgres, Redis, RabbitMQ, WebSocket"
      ]
    } 
  ]
  // experiences = [
  //   {
  //     title: "Software Engineer (FE/BE)",
  //     at: "OSI Systems.",
  //     location: "Hyderabad",

  //     //       Software Engineer (FE/BE) OSI Systems, Hyderabad (May 2022 - Oct 2023)

  //     // - Directed and managed the development of scalable features in micro front-end and microservices using Spring Boot 3 and Angular.
  //     // - Designed and deployed a software update, resulting in a 30% reduction in system errors and a 25% improvement in application performance.
  //     // - Implemented a real-time data analytics dashboard with Angular, enhancing user experience and enabling dynamic data visualization.
  //     // - Introduced unit testing and code review processes using Jasmine/Karma for Angular and JUnit for Spring Boot, reducing bugs by 35%.

  //     date: "Nov 202 - Oct 2023", list: [
  //       "\\BDeveloped scalable features\\B in micro front-end and microservices using \\BSpring Boot 3\\B and \\BAngular.\\B",
  //       "\\BDesigned and deployed\\B a software update, resulting in a \\B30% reduction\\B in system errors and a \\B25% improvement\\B in application performance.",
  //       "\\BImplemented a real-time data analytics dashboard\\B with Angular, enhancing user experience and enabling dynamic data visualization.",
  //       "\\BIntroduced unit testing\\B and code review processes using Jasmine/Karma for Angular and JUnit for Spring Boot, \\Breducing bugs by 35%.\\B"
  //       // "Technologies & Skills : Java, Angular 12+/17, Micro Services, Micro Front-End, SpringFLo, Spring Boot, Spring Security, Angular Material, NgBootstrap, D3.JS, Gridster.Js, Docker, OKTA, OAuth2, Jenkins, Postgres, Redis, RabbitMQ, WebSocket"
  //     ]
  //   }
  //   ,
  //   {
  //     title: "Internship (FE/BE)",
  //     at: "OSI Systems.",
  //     location: "Hyderabad",
  //     date: "Nov 2021 - May 2022",

  //     //       Internship (FE/BE) OSI Systems, Hyderabad (Nov 2021 - May 2022)

  //     // - Contributed to the development of a scalable web application powered by Angular elements micro frontend.
  //     // - Built responsive web interfaces using Media Queries, Flexbox, CSS Grid, Bootstrap, Angular Material and jQuery.
  //     // - Led a security enhancement project, integrating OAuth2 and JWT authentication mechanisms in Spring Boot applications, improving application security.
  //     // - Gained experience in routing, navigation, animations, RESTful APIs, testing, debugging, version control (Git, GitHub), Docker and Jenkins.

  //     list: [
  //       `\\BContributed\\B to the \\BDevelopment\\B of a scalable web application powered by Angular elements micro frontend.`,
  //       `\\BBuilt responsive\\B web \\Binterfaces\\B using media BQueries, Flexbox, CSS Grid, Bootstrap, Angular Material, jQuery.`,
  //       '\\BContributed\\B to a \\Bsecurity enhancement\\B project by integrating \\BOAuth2\\B and \\BJWT authentication\\B mechanisms in Spring Boot applications, improving application security.',
  //       "\\BGained experience\\B in Routing, Navigation, Animations, RESTful APIs, Testing, Debugging, SVN, Docker, Jenkins.",
  //     ]
  //   }
  // ]



  skillsDetails=[
    {
      list:[
        "\\BComponent-based architecture:\\B Understanding how to create reusable UI components building standalone and libraries.",
        '\\BRxJS:\\B Managing asynchronous data streams, observable, and reactive programming patterns.',
        "\\BRESTful API development:\\B Creating scalable and efficient APIs using Spring MVC and NodeJs.",
        "\\BSpring Data JPA:\\B simplifies database operations with repositories and entities. Spring Security implements robust authentication and authorization mechanisms.",
        "\\BGit:\\B Experienced in Version control and branching."
      ]
    }    
  ]


  courses = [
    {
      title: "Data Structures & Algorithms Fellowship",
      from: "NextLeap",
      href: "https://assets.nextleap.app/certificate/Cohort-5-c63a38463c352705c003a89879ba3e62.pdf"
    },
    // {
    //   title: "Full Stack Java Developer affiliated by NASSCOM",
    //   from: "Naresh-IT Hyderabad",
    // },
    {
      title: "Master Spring Boot 3 & Spring Framework 6 with Java",
      from: "Udemy",
      href: "https://www.udemy.com/certificate/UC-beb6c7c4-eaa1-4e86-b9dc-1da2fc2159c7/"
    },
    {
      title: "Spring Security 6 Zero to Master along with JWT,OAUTH2",
      from: "Udemy",
      href: "https://www.udemy.com/certificate/UC-7ab11234-ee09-4d69-9f37-63c2e95cd814/"
    },
    // {
    //   title: "Angular - The Complete Guide (2024 Edition)",
    //   from: "Udemy"
    // },

  ];
  education = [
    {
      title: "Bachelor Of Computer Application",
      from: "Late Babanrao Deshmukh College, Amravati",
      by: "2020"
    }

  ]
  links = [
    {
      "name": "+917972914439",
      "icon": "bi-telephone-inbound-fill",
      "href": "tel:+917972914439"
    },
    {
      "name": "Amravati",
      "icon": "bi-pin-map-fill",
      "value": "Amravati Maharashtra India",
      "href": "https://maps.app.goo.gl/6Bn5ud5X1i2P5zdHA"
    },
    {
      "name": "Gmail",
      "icon": "bi-google",
      "href": "mailto:skcoderains@gmail.com"
    },
    {
      "name": "LinkedIn",
      "icon": "bi-linkedin",
      "href": "https://linkedin.com/in/CodeRains/"
    },
    {
      "name": "LeetCode",
      "icon": "bi-code-square",
      "href": "https://leetcode.com/coderains/"
    },
    {
      "name": "GitHub",
      "icon": "bi-github",
      "href": "https://github.com/SkCodeRains"
    },
    {
      "name": "PortFolio",
      "icon": "bi-award-fill",
      "href": "https://skcoderains.github.io/portfolio/"
    }

  ];
  skills: Array<{ title?: string, details: string, pro: number }> = [

    {
      title: "Front-end skills:",
      details: `Agile Methodology, Java, Angular, CSS, Spring Boot, Node.js, RESTful APIs, SaaS, Microservices, OAuth2, Git, JavaScript, JQuery, TypeScript, PostgresSQL, SQL, NoSQL, Docker,JPA, Hibernate, Maven, Jenkins, Cloud Services, AWS, JSON, XML, RxJS, NgRx, HTML, JUnit, Mockito, Responsive Design, Animations, D3.js, Reactive Coding,  HTTP, Cross-Browser,  WebSockets, Diagnostics`,
      pro: 100,
    },
    // {
    //   title: "Front-end skills:",
    //   details: "HTML, CSS, SCSS, JavaScript, TypeScript, Angular, React",
    //   pro: 100,
    // },
    // {
    //   title: "Back-end skills:",
    //   details: "Java, Spring Boot, Spring Frameworks, JPA, Microservices, REST APIs, Hibernate, Node.js, ExpressJs, Spring Security,  MySQL, PostgreSQL, OracleDB",
    //   pro: 100,
    // },
    // {
    //   title: "Tools DevOps",
    //   details: "Docker, AWS CodeCommit, Git, Agile Methodology",
    //   pro: 100
    // },
    // {
    //   title: "Skills:",
    //   details: "Algorithms, Flexibility, Analytical, Problem-Solver, Quick Learner, Coding Attitude",
    //   pro: 100
    // },
  ];

  projects = [
    // {
    //   "head": "Task management.",
    //   "text": "Web application J2EE,To manage task by drag & drop user can change the state of task to completed, continue or have to do or can delete and edit it is multi-user web Application."
    // },
    {
      "head": "Online Crime Report",
      "text": ` Developed a J2EE-based web application to
      track user-based and anonymous reports, submit case details to
      relevant stations and manage report statuses.      
`
    },
    {
      "head": " Bank system",
      "text": "Created a Advanced java web application for online transactions, user detail management and balance state management, simulating a bank process."
    },
    // {
    //   "head": "Files Uploading",
    //   "text": "Implemented a J2EE-based web application for cloud storage, allowing users to upload, view and listen to audio, video, photos and documents stored in database BLOBs."
    // },
    {
      "head": "Library management",
      "text": "Desktop application using java to manage the books of library and issue and return functionality."
    }
  ]

  strength = [
    {
      "class": "bi-bar-chart-line title",
      "text": "Exceptional Analytical, Critical thinking and Troubleshooting Skills."
    },
    {
      "class": "bi-people title",
      "text": "Strong team empowerment through positive thinking and self-motivation."
    },
    {
      "class": "bi-lightbulb title",
      "text": "Adaptability, quick learning in fast-paced environments."
    },
    {
      "class": "bi-puzzle title",
      "text": "Creative problem-solving abilities."
    },

  ]

  // To succeed in an environment of growth and excellence and earn a job which provides me with an opportunity to attain satisfaction, self - development, help me achieve personal and organizational goals.
  objective = `
  Full-Stack Developer with expertise in Angular and Spring Boot, seeking a challenging role. Eager to leverage skills in building scalable web applications and contribute to organizational success through innovative solutions.
  `

  achievement: string[] = [
    ""
  ]


  public get personalDetails() {
    return this._personalDetails;
  }
  constructor() { }
}
