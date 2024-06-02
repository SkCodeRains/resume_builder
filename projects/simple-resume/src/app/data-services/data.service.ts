import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _personalDetails = {
    name: "Mohammed Shaikh",
    title: "Full-Stack Web Developer ",
    ummary: `    
          Experienced Full Stack Developer with over 2 years of proficiency in both \\BFront End and Back End\\B
           development, excelling in dynamic and challenging production environments. Proven track record of delivering
            fast, accurate, and effective code to enhance products and resolve critical infrastructure issues.
             Proficient in Angular,  Angular Material, NgBootstrap, and RxJS for engaging UI/UX experiences.
             AWS CodeCommit with strong collaboration skills in Agile environments. Well versed in Java development,
              including Spring Boot, Spring MVC, and Spring Framework, with expertise in RESTful API development and
               seamless database integration using Postgres, MySQL, and Oracle DB.
    `,
    summary: `
    \\BFull-stack developer with 2+ years of experience\\B building and deploying web applications using \\BJava,
     Spring Boot, and Angular\\B. Proven ability to deliver high-quality, user-centric applications with a
      focus on \\Bperformance optimization\\B. Seeking a challenging role to leverage my expertise in full-stack
       development, including \\BJavaScript, spring boot and database technologies\\B, to design, implement, and deploy innovative,
        scalable solutions utilizing \\BDocker containers\\B, AWS cloud infrastructure, and Spring Cloud for distributed
         systems.
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

      date: "May 2022 - Oct 2023", list: [
        "\\BDeveloped scalable features\\B in micro front-end and microservices using \\BSpring Boot 3\\B and \\BAngular.\\B",
        "\\BDesigned and deployed a software update\\B, resulting in a \\B30% reduction in system errors\\B and a \\B25% improvement in application performance.\\B",
        "\\BImplemented a real-time data analytics dashboard\\B with Angular, enhancing user experience and enabling dynamic data visualization.",
        "\\BIntroduced unit testing and code review processes using Jasmine/Karma for Angular\\B and JUnit for Spring Boot, \\Breducing bugs by 35%.\\B"
        // "Technologies & Skills : Java, Angular 12+/17, Micro Services, Micro Front-End, SpringFLo, Spring Boot, Spring Security, Angular Material, NgBootstrap, D3.JS, Gridster.Js, Docker, OKTA, OAuth2, Jenkins, Postgres, Redis, RabbitMQ, WebSocket"
      ]
    }
    ,
    {
      title: "Internship (FE/BE)",
      at: "OSI Systems.",
      location: "Hyderabad",
      date: "Nov 2021 - May 2022",

      //       Internship (FE/BE) OSI Systems, Hyderabad (Nov 2021 - May 2022)

      // - Contributed to the development of a scalable web application powered by Angular elements micro frontend.
      // - Built responsive web interfaces using Media Queries, Flexbox, CSS Grid, Bootstrap, Angular Material, and jQuery.
      // - Led a security enhancement project, integrating OAuth2 and JWT authentication mechanisms in Spring Boot applications, improving application security.
      // - Gained experience in routing, navigation, animations, RESTful APIs, testing, debugging, version control (Git, GitHub), Docker, and Jenkins.

      list: [
        `\\BContributed to the Development\\B of a scalable web application powered by Angular elements micro frontend.`,
        `\\BBuilt responsive web interfaces\\B using \\BMedia Queries, Flexbox, CSS Grid, Bootstrap, Angular Material\\B, and \\BjQuery.\\B`,
        '\\BContributed to a security enhancement\\B project \\Bby integrating OAuth2\\B and \\BJWT authentication mechanisms\\B in Spring Boot applications, improving application security',
        "\\BGained experience\\B in \\Brouting, navigation, animations, RESTful APIs, testing, debugging, version control (Git, GitHub), Docker\\B, and \\BJenkins.\\B",
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
    // {
    //   "name": "+917972914439",
    //   "icon": "bi-telephone-inbound-fill",
    //   "href": "tel:+917972914439"
    // },
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
      details: "HTML, CSS, SCSS, JavaScript, TypeScript, Angular, React",
      pro: 100,
    },
    {
      title: "Back-end skills:",
      details: "Java, Spring Boot, Spring Frameworks, Microservices, REST APIs, Hibernate, Node.js, Spring Security, JPA, MySQL, PostgreSQL, OracleDB",
      pro: 100,
    },
    {
      title: "Tools DevOps",
      details: "Docker, AWS CodeCommit, Git, Agile Methodology",
      pro: 100
    },
    {
      title: "Personal Skills:",
      details: "Algorithms, Flexibility, Analytical Problem-Solving, Learning Attitude",
      pro: 100
    },
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
      relevant stations, and manage report statuses.      
`
    },
    {
      "head": " Bank system",
      "text": "Created a Advanced java web application for online transactions, user detail management, and balance state management, simulating a bank process."
    },
    // {
    //   "head": "Files Uploading",
    //   "text": "Implemented a J2EE-based web application for cloud storage, allowing users to upload, view, and listen to audio, video, photos, and documents stored in database BLOBs."
    // },
    {
      "head": "Library management",
      "text": "Desktop Application using Java, To Manage the Books of Library and issue and return Functionality."
    }
  ]

  strength = [
    {
      "class": "bi-boxes",
      "text": "Exceptional analytical and problem-solving skills."
    },
    {
      "class": "bi-microsoft-teams",
      "text": "Strong team empowerment through positive thinking and self-motivation."
    },
    // {
    //   "class": "bi-radar",
    //   "text": "Exhibit fast adaptability to various situations."
    // }
  ]

  // To succeed in an environment of growth and excellence and earn a job which provides me with an opportunity to attain satisfaction, self - development, help me achieve personal and organizational goals.
  objective = `
  Full-Stack Developer with expertise in Angular and Spring Boot, seeking a challenging role to leverage skills in building scalable web applications and contributing to organizational success.
  `

  achievement: string[] = [
    ""
  ]


  public get personalDetails() {
    return this._personalDetails;
  }
  constructor() { }
}
